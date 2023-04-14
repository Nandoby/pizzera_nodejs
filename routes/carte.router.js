const carteRouter = require("express").Router()

const carteController = require('../controllers/carte.controller')

carteRouter.get("/", carteController.getCartePage)

module.exports = carteRouter