const express = require('express')
const routes = express.Router()

const PersonController = require('./controllers/PersonController')

// routes.get('/cpf', PersonController.index)

routes.get('/cpf/:id', PersonController.cpfSearch)

routes.get('login_check', PersonController.login)

module.exports = routes
