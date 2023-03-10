const express = require('express')
const {
    getInventory,
    getProduct,
    createProduct,
    deleteProduct
} = require('../controllers/inventoryController')
const router = express.Router()

// GET all inventory
router.get('/', getInventory)

// GET a single inventory(product)
router.get('/:id', getProduct)

// POST a new inventory(product)
router.post('/', createProduct)

// DELETE a new inventory(product)
router.delete('/:id', deleteProduct)

// UPDATE a new inventory(product)
router.put('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})

module.exports = router