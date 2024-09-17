const pets = ['cat', 'dog','bat'];

/* == Camino Largo == */

//variable que nos va a indicar si si esta o no inicializada en false
let includeArray = false;
for (let i = 0; i < pets.length; i++) {//Convierte a true la variable si encuentra dog
    const element = pets[i];
    if (element === 'dog') {
        includeArray = true;
        break;
    }
}

/* == Camino Corto == */
console.log('log', includeArray);

//Hay un elemento que sea dog
const rta = pets.includes('dog') //no funciona con arrow function, solo se le pasa el elemento
console.log('includes', rta);

/* == Playground clase 19 == */
/* 
const names1 = ["ana", "santi", "nico", "anastasia"];
let search1 = 'ana';
filterByTerm(names1,search1);

const names2 = ["ana", "santi", "nico", "anastasia"];
let search2 = 'ana';
filterByTerm(names2,search2);

export function filterByTerm(array, term) {
    return array.filter(item => item.includes(term))
  }  
*/