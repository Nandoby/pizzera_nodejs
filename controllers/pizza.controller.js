const { getPizza, addPizza } = require('../modules/carte.module')

const pizzaController = {
    getPizza: (req, res) => {
        const id = req.params.id
        const pizza = getPizza(+id)
        res.locals.title = `Pizza ${pizza.name}`
        res.status(200).render('pages/pizza-detail', { pizza })
    },
    getPizzaAdd: (req, res) => {
        
        res.locals.title = "Ajouter une pizza"
        res.status(200).render('pages/add-pizza')
    },
    postPizzaAdd: (req, res) => {
        const data = req.body 

        addPizza(data)

        res.redirect('/carte')

    }
}

module.exports = pizzaController