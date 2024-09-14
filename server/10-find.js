const numbers = [1,30,49,29,10,13];

/* == Camino Largo == */
let rta ;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element === 3013213521){
        rta = element;
        break; // Si lo encuentra romper el ciclo
    }
}
console.log('for', rta);
const rta2 = numbers.find(item => item === 3013213521);
console.log('find', rta2);


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
// Find lo encuentra y trae el elemento
const rta3 = products.find(item => item.id === '🍔');
console.log('find', rta3);

// findIndex lo encuentra y solo la posición donde esta localizado, si no lo encuentra nos devuelve -1
const rta4 = products.findIndex(item => item.id === '🍔');
console.log('findIndex', rta4);
