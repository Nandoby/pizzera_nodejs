const pizzas = [
    { id: 1, name: "Margherita", price: 10, img: "margherita.jpeg" },
    { id: 2, name: "Capricciosa", price: 12, img: "capricciosa.webp" },
    { id: 3, name: "Calzone", price: 18, img: "calzone.webp" },
]

const carteModule = {
    getMenu: () => pizzas,
    getPizza: (id) => {
        return pizzas.find(item => item.id === id)
    }

}

module.exports = carteModule