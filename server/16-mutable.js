const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === "🍔");//Crear una variable para Buscar el producto

if(productIndex !== -1) {                       //Si es diferente a -1 (cuando no encuentra indice)
    myProducts.push(products[productIndex]);    //ir al array de productos y agregar lo que hay en la posicion
    products.splice(productIndex, 1);           //Eliminamos el producto pasandole la ubicacion y cuantos elementos apartir de la ubicacion debe eliminar
}

//Imprimir resultados
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Update 
const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

// id con los datos para actualizar solo al elemento de nuestro Array
const update = {
    id : "🥞",
    changes: {
        price: 200,
        description: "Delicioso"
    }
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id); //Obtener el id
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2], //copiar un nuevo objeto usando spread para que no midifique el original
    ...update.changes //Aplicar los cambios
};
console.log(productsV2);
