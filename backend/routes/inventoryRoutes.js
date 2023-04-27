const express = require('express')
const {
    getInventory,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
    updateInventory
} = require('../controllers/inventoryController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all inventory routes
router.use(requireAuth)

// GET all inventory
router.get('/', getInventory)

// GET a single inventory(product)
router.get('/:id', getProduct)

// POST a new inventory(product)
router.post('/', createProduct)

// DELETE a new inventory(product)
router.delete('/:id', deleteProduct)

// UPDATE a new inventory(product)
router.put('/:id', updateProduct)

// UPDATE ALL inventory(product)
router.put('/', updateInventory)

module.exports = router