/*Problema 1*/
let edad = 0;
let nombre = "";

edad = Number(prompt("¿Que edad tiene?"));
if(edad >= 18){
    nombre = prompt("¿Cual es su nombre?"); 
    if(nombre == "Carlos" || nombre == "Mario"){
        console.log("Entra a VIP");
    }
    else{
        console.log("Entra a la discoteca");
    }
}
else{
    console.log("No puede entrar a la discoteca"); 
}

/*Problema 2*/
let numero = Number(prompt("Ingrese un numero: "));
console.log( numero % 2 == 0 ? " El numero " + numero + " es divisible entre 2 " : " El numero " + numero + " no es divisible entre 2." );

/********************************************************************/
/*Problema 3*/
let numeroPar  = Number(prompt("Ingrese un numero: "));
alert( numeroPar % 2 == 0 ? " El numero " + numeroPar + " es par " : " El numero " + numeroPar + " no es par." );

/********************************************************************/
/*Problema 4*/
let numeroGanador = Number(prompt("Ingrese un numero: "));
if(numeroGanador == 1000){
    console.log("Ganaste un premio.");
}
else{
    console.log("Lo sentimos, sigue participando.");
}

/********************************************************************/
/*Problema 5*/
let numero1 = Number(prompt("Ingrese el primer numero: "));
let numero2 = Number(prompt("Ingres el segundo numero: "));
if(numero1<numero2){
    console.log("El numero " + numero1 + " es el menor.");
}
else if(numero2 < numero1){
    console.log("El numero " + numero2 + " es el menor.");
}

/********************************************************************/
/*Problema 6*/
let numeros1 = Number(prompt("Ingrese el primer numero: "));
let numeros2 = Number(prompt("Ingrese el segundo numero: "));
let numeros3 = Number(prompt("Ingrese el tercer numero: "));
if(numeros1 > numeros2){
    if(numeros1 > numeros3){
        console.log("El numero " + numeros1 + " es el mayor.");
    }
    else if( numeros3 > numeros1 ){
        console.log("El numero " + numeros3 + " es el mayor.");
    }
    else{
        console.log("El numero " + numeros1 + " y  " + numeros3 + " son iguales");
    }
}
else if(numeros1 > numeros3){
    if(numeros1 == numeros2){
        console.log("El numero " + numeros1 + " y  " + numeros2 + " son iguales");
    }
    else{
        console.log("El numero " + numeros2 + " es el mayor.");
    }
}
else{
    if(numeros2 > numeros3){
        console.log("El numero " + numeros2 + " es el mayor.");
    }
    else if(numeros3 > numeros2){
        console.log("El numero " + numeros3 + " es el mayor.");
    }
    else{
        console.log("El numero " + numeros2 + " y  " + numeros3+ " son iguales");
    }
}






