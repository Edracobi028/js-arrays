const letters = ['a', 'b','c'];

// === Forma larga de recorrer un array y transformarlo ===
/* const newArray = []; //creamos un nuevo array
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newArray.push(element + '++');//trasnformamos cada elemento y guardamos
} */

// === Forma corta de recorrer un array y transformarlo ===
const newArray = letters.map(item => item + '++');


console.log('original', letters);
console.log('new', newArray);




/* function multiplyElements(array) {
    const numbersx2 = array.map(item => {
        return item * 2;
        
    });
    console.log(array);
    console.log(numbersx2);
} 

const array = [2,4,5,6,8];
multiplyElements(array); */


// === Ejercicio de Sandbox clase 5 ===
function multiplyElements(array) {
    const numbersx2 = array.map(item => item * 2);
    return console.log(array, numbersx2);
} 

const array = [2,4,5,6,8];
multiplyElements(array);


 





 