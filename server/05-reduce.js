/* == Camino Corto == */

const totals = [1,2,3,4];
let sum = 0; //crear variable let que podamos ir modificando
for (let i = 0; i < totals.length; i++) {
    const element = totals[i];
    sum = sum + element; //ir sumando los valores que vamos iterando
}
console.log(sum);
//1. Acumulador = (sum)
//2. Item que vamos a iterar =  (element)
//3. 1er argumento (arrow function) = (sum, element) => sum + element
//4. 2do argumento estado inicial = (0) 
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log('rta', rta);