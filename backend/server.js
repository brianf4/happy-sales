const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

//express app
const app = express()

const inventoryRoutes = require('./routes/inventoryRoutes')

//routes
app.use('/api/inventory', inventoryRoutes)

app.listen(process.env.PORT, () => {
    console.log("Listening to port 4000!")
})