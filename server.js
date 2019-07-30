const express = require('express')
var cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())





app.use('/api', require('./src/routes'))

app.listen(process.env.PORT || 3001)
console.log('Server starts at port 3001')