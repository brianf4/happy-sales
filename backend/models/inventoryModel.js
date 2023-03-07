const mongoose = require('mongoose')

const Schema = mongoose.Schema

const inventorySchema = new Schema({
    product: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }, 
    id: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Inventory', inventorySchema, 'inventory')