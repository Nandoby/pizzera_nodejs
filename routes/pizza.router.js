const pizzaRouter = require('express').Router()

const pizzaController = require('../controllers/pizza.controller')

pizzaRouter.get('/add', pizzaController.getPizzaAdd)
pizzaRouter.post('/add', pizzaController.postPizzaAdd)
pizzaRouter.get('/:id', pizzaController.getPizza)

module.exports = pizzaRouter