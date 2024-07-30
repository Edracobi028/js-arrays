const words = ['spray', 'limit', 'elite', 'exuberant'];

/* == camino largo == */
const newArray = []; //creamos un array vacio
for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if(item.length >= 6 ){ //si el largo de la palabra es mayor a 6
        newArray.push(item); //agregamos al nuevo array
    }
}
console.log('newArray', newArray);
console.log('original', words);


/* == camino corto == */
//Usamos la funcion filter y agregamos la condición despues de AF y guardar en un nuevo arreglo
const betterArray = words.filter( item => item.length >= 6);
console.log('betterArray', betterArray);
console.log('original', words);


const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
    },
]

const deliveredOrders = orders.filter(item => item.delivered && item.total >= 100); //ordenes entregadas (true) y total + de 100
console.log('deliveredOrders',deliveredOrders);

//Crear un buscador con filter
const search = (query) => {
    //Retornar el array que cumple la condicion del string que envie
    // includes
    return orders.filter( item => {
        return item.customerName.includes(query); //buscando en el atributo del objeto con la función includes()
    });
}

console.log(search('Nico'));

/* == Ejercicio Playground clase 8 */
// const array = ['amor', 'amor', 'piedra', 'piedra'];
// filterByLength(array);
// export function filterByLength(array) {
//   return array.filter(item => item.length >= 4);
// }


