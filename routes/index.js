const router = require("express").Router()

const homeController = require('../controllers/home.controller')
const carteRouter = require('./carte.router')
const pizzaRouter = require('./pizza.router')

router.get('/', homeController.getPage)

router.use('/carte', carteRouter)
router.use('/pizza', pizzaRouter)

module.exports = router