const Inventory = require('../models/inventoryModel')
const mongoose = require('mongoose')

//get all inventory
async function getInventory(req, res) {
  const inventory = await Inventory.find({}).sort({createdAt: -1})
  res.status(200).json(inventory)
}

//get a single inventory(product)
async function getProduct(req, res) {
  const { id } = req.params

  const product = await Inventory.findById(id)

  if(!product) {
    return res.status(404).json({error: 'No such product'})
  }
}


//create a new inventory(product)
async function createProduct(req, res) {
  const {product, cost, id, qty} = req.body
    try {
        const inventory = await Inventory.create({product, cost, id, qty})
        res.status(200).json(inventory)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete an inventory(product)
const deleteProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such product'})
  }

  const inventory = await Inventory.findOneAndDelete({_id: id})

  if (!inventory) {
    return res.status(404).json({error: 'No such todo'})
  }

  res.status(200).json(inventory)
}


//update an inventory(product)


module.exports = {
  getInventory,
  getProduct,
  createProduct,
  deleteProduct
}