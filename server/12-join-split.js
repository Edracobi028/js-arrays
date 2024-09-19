const elements = ["Fire", "Air", "Water"];

/* == solucion larga */
let phrase = ''; //String vacio para depositar la frase ya unificado
const separator = '--'; //Lo que separa las palabras
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    phrase = phrase + element + separator;
}

/* == solucion corta con join */
const phraseTypeJoin = elements.join('--') //Solo se le pasa el caracter que separa
console.log('for', phrase);
console.log('phraseTypeJoin', phraseTypeJoin);


//Transformar una frase en una URL
//devuelve en un array cada elemento que resulta de separar por el caracter que le pasamos
const title = 'Curso de manipulación de arrays';
const url = title.split(' ').join('-').toLocaleLowerCase();
console.log(url);

/* == Playground clase 19 == */

/* 
let exampleTitle = "La forma de correr Python";
parseToURL(exampleTitle);
function parseToURL(title) {
    return   title = title.split(' ').join('-').toLocaleLowerCase(); 
} 
*/