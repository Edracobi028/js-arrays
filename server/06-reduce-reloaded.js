const items = [1, 3, 2, 3, 3, 1, 10, 3];

//
//
//
//
//1. Acumulador = (obj)
//2. Item que vamos a iterar =  (item)
//3. 1er argumento (arrow function) = (sum, element) => sum + element
//4. 2do argumento estado inicial = {}  (Porque es un objeto)
const respuesta = items.reduce( (obj, item) =>{
    if (!obj[item]){ //si no existe o si NO el acumulado tiene el valor iterado
        obj[item] = 1; //inicializamos en uno
    } else { // Si existe
        obj[item] = obj[item] + 1; //obtener en el contador
    }
    return obj; //Retornamos el objeto
}, {} );

console.log(respuesta);

const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name:"Andrea",
        level:"medium",
    },
    {
        name:"Zulema",
        level:"high",
    },
    {
        name:"Santiago",
        level:"low",
    },
    {
        name:"Valentina",
        level:"medium",
    },
    {
        name:"Lucia",
        level:"high",
    },
];

//Contabilizar cuantos niveles hay de cada tipo

const levelTypes = 
data
.map( item => item.level) //Crear un array con los niveles
.reduce( (obj, item) =>{
    if (!obj[item]){ 
        obj[item] = 1; 
    } else { 
        obj[item] = obj[item] + 1; 
    }
    return obj;
}, {} );  

console.log('levelTypes',levelTypes);


/* == Ejercicio Playground clase 12 */

// const input1 = [1, 2, 3];
// calcSum(input1);
// const input2 = [2, 4, 8];
// calcSum(input2);
// export function calcSum(numbers) {
//    return numbers.reduce((sum, element) => sum + element, 0);
// }
