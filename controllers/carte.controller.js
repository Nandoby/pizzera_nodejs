const { getMenu } = require('../modules/carte.module')

const carteController = {
    getCartePage: (req, res) => {

        const pizzas = getMenu()

        res.locals.title = "Notre menu"

        res.status(200).render('pages/carte', { pizzas })
    }
}

module.exports = carteController