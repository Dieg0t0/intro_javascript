/*Problema 1*/
let numero = Number(prompt("Ingrese un numero: "));
let varControl = 1;

while(varControl<=numero){
    if(varControl%5==0){
        console.log(varControl);
    }
    varControl++;
}

/*Problema 2*/
let numeroDo = Number(prompt("Ingrese un numero: "));
let varControlDo = 1;
do{
    if(varControlDo % 5 == 0){
        console.log(varControlDo);
    }
    varControlDo++;
}while(varControlDo <= numeroDo);

/*Problema 3*/
for(i = 1; i <= 50; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

//Ejercicio 4 Numeros impares del 1 al 50
for (let index = 1; index <= 50; index++) {
    if (index % 2 !== 0) {
      console.log(index);
    }
}

//Ejercicio 5 numeros del 1 al 100 exluyendo 10 numeros
var rangoMin = Number(prompt("Se excluiran 10 numeros a partir del numero que indique (1 -100)"));
var rangoMax= rangoMin + 10;

for (let index = 1; index <= 100; index++) {
    if (index > rangoMax  || index < rangoMin) {
      console.log(index);
    }
} 