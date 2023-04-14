const pizzaRouter = require('express').Router()

const pizzaController = require('../controllers/pizza.controller')

pizzaRouter.get('/:id', pizzaController.getPizza)

module.exports = pizzaRouter