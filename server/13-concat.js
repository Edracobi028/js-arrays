const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements]; //clonar con spread, para que no duplique por la referencia en memoria
for (let i = 0; i < othersElements.length; i++) {
    const element = othersElements[i];
    newArray.push(element);
}


//Unir arrays con la funcion concat
const newArrayConcat =  elements.concat(othersElements);//Solo se agrega el array como parametro

//Unir arrays con la funcion spread
const newArraySpread = [...elements,...othersElements];

//Ejemplo para cambiar el original
elements.push(...othersElements);//modificar y agregar al final los elementos

console.log("for = ", newArray);
console.log("concat = ", newArrayConcat);
console.log("Spread = ", newArraySpread);
console.log("Merge elements= ", elements);