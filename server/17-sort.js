const months = ['March','Jan','Feb','Dec'];
months.sort(); //Por defecto sin la config ordena con el criterio de tabla ascci
console.log(months);

const numbers = [1,30,4,21,100000];
numbers.sort((a,b) => a - b); //Usando la config de sort con Arrow Function, para comparar numeros a - b
console.log(numbers);

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b)); //Se usoa localeComapre para navegadores obsoletos
console.log(words);

//Sort con objetos por total
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date("2024-08-08")
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date("2024-04-30")
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date("2024-12-25")
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date("2024-03-21")
    },
];

orders.sort((a,b) => a.total - b.total); 
console.log(orders);
console.log("-".repeat(10));
orders.sort((a,b) => a.date - b.date); 
console.log(orders);