//BONUS//

let numeroRNG1 = 0;
let numeroRNG2 = 0;
let total = 0;
let respuestaUsuario = 0;
let controlDoWhile = true
do{
    do{
        numeroRNG1 = Math.floor(Math.random() * 10);
    }while(numeroRNG1 >= 10 || numeroRNG1 < 0);

    do{
        numeroRNG2 = Math.floor(Math.random() * 1000);
    }while(numeroRNG2 > 999 || numeroRNG2 < 0);

    total = numeroRNG1 * numeroRNG2;
    respuestaUsuario = Number(prompt("¿Cuanto da la multiplicación de " + numeroRNG1 + " por " + numeroRNG2 + "?"));
    if(respuestaUsuario == total){
        controlDoWhile = false;
        alert("Ganaste!");
    }
    else{
        alert("Intentalo de nuevo.");
    }
}while(controlDoWhile);