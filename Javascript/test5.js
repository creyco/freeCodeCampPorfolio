/* function randomFraction(x) {
    // Only change code below this line 
    return Math.random() * x;
  
    // Only change code above this line
  }
  console.log(randomFraction(5));
 */

 /*  function randomWholeNum(min, max) {
   // return Math.floor(Math.random() * 10);
   return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  for (let i = 1; i< 10; i++) {
    console.log('i=',i);
   
  } */
/* 
  function coundown(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = coundown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(coundown(10)); */
/* 
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18] */

/* const numeros = [2, 7, 4, 6];
const doble = [];
for(let i = 0; i < numeros.length; i++) {
    doble.push(numeros[i] * 2)
}
console.log(doble); */

/* function rangeOfNumbers(startNum, endNum) {
    const arr = [];
    for (let i = startNum; i <= endNum; i++){
          arr.push(i);
    }
    return arr;
  };
  console.log(rangeOfNumbers(1, 5)); */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const numerosMes = meses.map((mes, index) => index + 1);

const mesesParesEnMayusculas = meses.map((mes, index) => {
    if(index % 2 != 0) {
        return mes.toUpperCase();
    } 
    return mes;
});

console.log(mes)
  