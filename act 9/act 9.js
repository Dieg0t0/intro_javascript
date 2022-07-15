// ejercisio 1 //

const input=[1,2,3,4,5]

let numeros= input.map(num =>num*num)
console.log(numeros);

//ejercisio 2 //

const array1 = [12,46, 32, 64];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
let media = sumWithInitial/array1.length
console.log(sumWithInitial);
console.log(media);
let median=mediana(array1)
console.log(median);


function mediana(arr) {
    arr.sort((a,b) => a-b);
    const l=arr.length;
    return l%2==0
        ? arr.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
        : arr.slice((l/2), l/2+1)[0];
}

//ejercisio 3 //

var acum=0
var anterior=1

var contador=2
while (acum<720) {
    acum=anterior*contador
    anterior=acum
    console.log(acum);
    contador+=1
}
console.log(acum);