require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const inventoryRoutes = require('./routes/inventoryRoutes')


//express app
const app = express()

//middleware
app.use(cors());
app.use(express.json())


//routes
app.use('/api/inventory', inventoryRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to DB & Listening to port 4000!")
    })
})
.catch((error) => {
    console.log(error)
})

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})