const pizzas = [
  {
    id: 1,
    name: "Margherita",
    price: 10,
    img: "margherita.jpeg",
    description:
      "La pizza Margherita est un plat napolitain emblématique fait à base de tomates, de mozzarella et de basilic, reprenant ainsi les couleurs du drapeau italien. La pizza est l'un des plats les plus populaires au monde",
    ingredients: [ "mozzarella", "basilic", "parmesan", "tomate"  ]
  },
  {
    id: 2,
    name: "Capricciosa",
    price: 12,
    img: "capricciosa.webp",
    description:
      "La pizza capricciosa est un type de pizza de la cuisine italienne préparée avec du fromage mozzarella, du jambon sec italien, des champignons, de l'artichaut et de la tomate. Les types de champignons utilisés peuvent inclure des cremini (champignons blancs) et d'autres champignons.",
    ingredients: [ "tomate", "câpres", "olives", "artichaud", "champignon", "mozzarella", "jambon" ]
  },
  {
    id: 3,
    name: "Calzone",
    price: 18,
    img: "calzone.webp",
    description:
      "La Calzone est un des plats les plus populaires d'Italie. Il s'agit d'une pizza pliée en deux, formant ainsi un chausson. Celui-ci est traditionnellement garni de tomates et de mozzarella, auxquels on ajoute parfois du jambon.",
    ingredients: [ "jambon", "champignon", "tomate", "mozzarella" ]
  },
];

let currentId = 3

const carteModule = {
  getMenu: () => pizzas,
  getPizza: (id) => {
    return pizzas.find((item) => item.id === id);
  },
  addPizza: (pizza) => {
    const pizzaToAdd = {
      id: ++currentId,
      ...pizza
    }

    pizzas.push(pizzaToAdd)
  }
};

module.exports = carteModule;
