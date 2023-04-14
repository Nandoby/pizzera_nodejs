const homeController = {
    getPage: (req, res) => {
        res.locals.title = "Accueil"
        res.status(200).render('pages/home')
    }
}

module.exports = homeController