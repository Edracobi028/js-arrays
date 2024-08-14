const numbers = [1, 2, 3, 4];

/* == Camino Largo == */

let rta1 = false;
//Encontrar si en el listado de numeros hay un numero par
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {//Si el residuo de dividirlo en dos es cero (validamos si es par)
        rta1 = true;
        break; // cortamos la busqueda si encuentra
    }
}
console.log(rta1);

/* == Camino Corto ==   con some()  */

//3. 1er argumento (arrow function) = (item => )
//4. 2do argumento condicional = {}  (Porque es un objeto)
let rta2 = numbers.some(item => item % 2 === 0);
console.log('rta2', rta2);

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

//verificar si hay al menos una orden entregada
let isDelivered = orders.some(item => item.delivered);
console.log('Entregadas', isDelivered);

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = { 
    startDate: new Date(2021, 1, 1, 8), 
    endDate: new Date(2021, 1, 1, 9, 30), 
};

const { areIntervalsOverlapping } = require("date-fns");

//crear una funcion para verificar si se traslapa
//Recibimos una nueva fecha
const isOverLap = (newDate) => {
    return dates.some(date => { //Evaluar por cada una de las fechas si se traslapan
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.startDate},      //evaluar las fechas que ya estan
            {start: newDate.startDate, end: newDate.endDate},  //evaluar con la nueva fecha
        )
    }); 
};

console.log( 'isOverlap',isOverLap(newAppointment)  );

/* == Playground clase 14 == */

// const input1 = [1, 3, 5, 7, 10, 11];
// checkArray(input1);
// const input2 = [1, 3, 5];
// checkArray(input2);
// const input3 = [];
// checkArray(input3);

// export function checkArray(numbers) {
//     return numbers.some(item => item % 2 === 0);
// }


