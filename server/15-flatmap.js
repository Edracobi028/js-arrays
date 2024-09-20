const users = [
    {userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    {userId: 2, username: "Mike", attributes: ["Lovely"] },
    {userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

/* == solucion larga == */
//Un array completo con todos los atributos de mis usuarios
const attributes =  users.map(user => user.attributes).flat(); //1ro obtenemos un array de arrays y despues lo ponemos en uno solo con flat
console.log("map-flat = ", attributes);

/* == Solución corta ==*/
//ejemplo con arrays
const attributes2 =  users.flatMap(user => user.attributes);
console.log("flatMap = ", attributes);


//ejemplo con arrays de objetos 
const calendars = { 
    primaryCalendar: [
        { 
            startDate: new Date(2021, 1, 1, 15), endDate: new Date(2021, 1, 1, 15, 30), title: "Cita 1", 
        }, 
        { 
            startDate: new Date(2021, 1, 1, 17), endDate: new Date(2021, 1, 1, 18), title: "Cita 2", 
        },
    ], 
    secondaryCalendar: [
        { 
            startDate: new Date(2021, 1, 1, 12), endDate: new Date(2021, 1, 1, 12, 30), title: "Cita 2", 
        }, 
        { 
            startDate: new Date(2021, 1, 1, 9), endDate: new Date(2021, 1, 1, 10), title: "Cita 4", 
        },
    ], 
};

//Convertir objeto en array
const attributes3 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate); //volvemos a mapear para obtener un array con los valores
}); //object.values trae los atributos de un objeto, obtener en un array los 4 objetos
console.log(attributes3);

/* == Playground clase 25 == */

const phrases = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
];
countWords(phrases);
export function countWords(array) {
    return array.flatMap(item => item.split(' ')).length; //ordenamos en un solo array y por cada uno separe por espacio y al fnal contabilizamos
}