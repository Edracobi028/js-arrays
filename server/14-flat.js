const matriz = [
    [1,2,3],
    [4,5,6, [10,11,[12,13]]],
    [7,8,9]
];
/* == solucion larga */
//Aplanar en un solo array todos los elementos de los arrays dentro de Matriz
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

/* == Solución corta */

const arrayFlat = matriz.flat(3);//Indicar hasta que nivel debe aplanar
console.log('for = ',newArray);
console.log('Flat = ',arrayFlat);
