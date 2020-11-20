const express = require('express')
const routes = express.Router()

const PersonController = require('./controllers/PersonController')

// routes.get('/cpf', PersonController.index)

routes.get('/cpf/:id', PersonController.cpfSearch)

module.exports = routes
