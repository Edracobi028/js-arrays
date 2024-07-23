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
]

  console.log('original', orders);
  const totales = orders.map(item => item.total) ; //Solo traer los totales del array de objetos
  console.log('Respuesta', totales);

  //añadir un nuevo elemento al objeto
/*   const AddTaxes = orders.map(item => {
    item.tax = .19; //Agregar el impuesto
    return item; //Si retornamos el mismo objeto, asi lo hayamos modificado copiamos la referencia en memoria
  });
  console.log('Impuestos', AddTaxes);
  console.log('original', orders); */

  const newAddTaxes = orders.map(item => {
    return { //Generamos un nuevo objeto
        
        ...item, // Clonar los atributos del objeto sin la referencia en memoria con Spread Operation (...)
        tax: .19 //Agregar el impuesto
    }; 
  });

  console.log('Nuevos Impuestos', newAddTaxes);
  console.log('original', orders);


  /* 
    function multiplyElements(array) {
        const newArray = array.map(item => item * 2);
        return newArray;
    }
  
  */

const array = [
    {
        "name": "Product 1",
        "price": 1000,
        "stock": 10
    },
    {
        "name": "Product 2",
        "price": 2000,
        "stock": 20
    }
];

function addNewAttr(array) {
    //console.log('original',array);
    const newArray = array.map(item => { 
        return {
        ...item,
        taxes: Math.round( item.price * .19)
        }
    });
    return console.log(newArray,array); 
}
addNewAttr(array);   

/* //solucion clase 7
export function addNewAttr(array) {

    return array.map(item => {
      return {
        ...item,
        taxes: Math.floor(item.price * .19)
      }
    });
  } */

