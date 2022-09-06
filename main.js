const Pizzas = [{
        id: 1,
        nombre: 'Muzarela',
        precio: 550,
        Ingredientes: ['Muzarela', 'Oregano'],
    },
    {
        id: 2,
        nombre: 'Napolitana con Jamon',
        precio: 1100,
        Ingredientes: ['Muzarela', 'Tomate', 'Jamon'],
    },
    {
        id: 3,
        nombre: 'Calabresa',
        precio: 1200,
        Ingredientes: ['Muzarela', 'Salame'],
    },
    {
        id: 4,
        nombre: '4 Quesos',
        precio: 1400,
        Ingredientes: ['Muzarela', 'Roquefort', 'Parmesano', 'Provolone'],
    },
    {
        id: 5,
        nombre: 'Fugazeta',
        precio: 1100,
        Ingredientes: ['Muzarela', 'Cebolla'],
    },
    {
        id: 6,
        nombre: 'Baconator',
        precio: 1400,
        Ingredientes: ['Chedar', 'Bacon', 'Muzarela', 'Salchicha'],
    },
];

const infoPizza = document.querySelector('.info-pizza')
const input = document.querySelector('.seleccionar');
const seleccionarBtn = document.querySelector('.seleccionar-btn');
const errorMessage = document.querySelector('.error-message')

let nuevoPizzas = []


const pizzaId = () => {

    const filterId = input.value;

    if (!filterId.length) {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorNoneText();
        nuevoPizzas = [];
        input.value = '';
        renderPizza(nuevoPizzas);
        return;

    } else if (filterId < 1 || filterId > 6) {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorOptions()
        nuevoPizzas = [];
        input.value = '';
        renderPizza(nuevoPizzas);
        return;

    } else if (
        nuevoPizzas = Pizzas.filter(pizza => pizza.id === parseInt(filterId))
    ) {
        errorMessage.style.visibility = 'hidden';
    }

    renderPizza(nuevoPizzas);

}


const createHtmlPizza = pizzas => {
    return `<h2 class="title"><p>Variedad: </p>${pizzas.nombre}</h2>
      <h4 class="precio"><p>Precio: </p>$${pizzas.precio}</h4>`
}

const createHtmlErrorNoneText = () => {
    return `<h3 class="message">Por favor, elegi una opcion !</h3>`
}

const createHtmlErrorOptions = () => {
    return `<h3 class="message">Por favor, elíge opciones de 1 a 6 !</h3>`
}

const renderPizza = pizza => infoPizza.innerHTML = pizza.map(pizzita => createHtmlPizza(pizzita))



const init = () => {
    seleccionarBtn.addEventListener('click', pizzaId)
    errorMessage.style.visibility = 'hidden';

}


init();
console.log('working on process of beign a javascript ninja')