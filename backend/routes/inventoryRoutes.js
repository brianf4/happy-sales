const express = require('express')

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
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
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