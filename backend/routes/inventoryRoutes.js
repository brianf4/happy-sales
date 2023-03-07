const express = require('express')
const Inventory = require('../models/inventoryModel')
const router = express.Router()

// GET all inventory
router.get('/', (req, res) => {
    res.json({mssg: 'GET all inventory'})
})

// GET a single inventory(product)
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single inventory(product)'})
})

// POST a new inventory(product)
router.post('/', async (req, res) => {
    const {product, cost, id, qty} = req.body
    try {
        const inventory = await Inventory.create({product, cost, id, qty})
        res.status(200).json(inventory)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
})

// DELETE a new inventory(product)
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workout'})
})

// UPDATE a new inventory(product)
router.put('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})

module.exports = router