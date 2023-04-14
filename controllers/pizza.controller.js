const { getPizza } = require('../modules/carte.module')

const pizzaController = {
    getPizza: (req, res) => {
        const id = req.params.id
        const pizza = getPizza(+id)
        res.locals.title = `Pizza ${pizza.name}`
        res.status(200).render('pages/pizza-detail', { pizza })
    }
}

module.exports = pizzaController