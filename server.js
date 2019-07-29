const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())





app.use('/api', require('./src/routes'))

app.listen(process.env.PORT || 3001)