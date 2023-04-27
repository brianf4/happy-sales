require('dotenv').config()

const path = require('path');
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const inventoryRoutes = require('./routes/inventoryRoutes')
const userRoutes = require('./routes/userRoutes')

//express app
const app = express()



app.use(express.static("dist"));

//middleware
app.use(cors());
app.use(express.json())

//routes
app.use('/api/inventory', inventoryRoutes)
app.use('/api/user', userRoutes)  

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to DB & Listening to " + process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})