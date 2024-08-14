const numbers = [1,30,39,29,10,13];

let rta = true; //inicializarla en true
/* == solucion larga */
// verificar si cada uno es mayor a 40
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element >= 40){  
        rta = false;
    }else{

    }
}

console.log('for', rta);

const rta2 = numbers.every(item => item <= 40);
console.log('rta2', rta2);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

const rta3 = team.every(item => item.age <= 15);
console.log('reto', rta3);

/* == Playground clase 16 == */
// const input1 = [2, 4, 6, 8, 10];
// checkArray(input1);
// const input2 = [1, 3, 5, 7, 10, 11];
// checkArray(input2);
// const input3 = [1, 3, 5];
// checkArray(input3);
// const input4 = [];
// checkArray(input4);

// export function checkArray(array) {
//     if(array.length == 0){
//         return false;
//     }else{
//         return array.every(item => item % 2 ===0);
//     }
// }
  
