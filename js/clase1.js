
/*ejercicio numero 1 de Algortimo utilizando un ciclo*/

/*pedir un numero mediante prompt y sumarle otro numero en cada repeticion, realizando una salida por cada resultado*/

/*

let numero = parseInt(prompt("ingrese un numero: "));
resultado=0;
for(let i=0;i <5;i++){
    let numeroDos = parseInt(prompt("ingrese el numero que desea sumarle: "));
    resultado =numero+numeroDos;
    console.log ("el numero ingresado es: "+numero+" + "+numeroDos +" = "+ resultado);
}

*/




/*ejercicio numero 2*/

/*Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.*/
/*


let nombre = prompt("ingrese su nombre: ");

while(nombre !="esc"){

    let dia = prompt("ingrese el dia de su cumpleaños: ");
    console.log ("su nombre es: "+ nombre + " y su dia de cumpleaños es: "+dia);
    nombre = prompt("ingrese su nombre: ");
}

*/



/*ejercicio numero 3*/
/*Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.*/

let numero = parseInt(prompt("ingrese un numero: "));

for(let i=1; i<=numero;i++){
    alert("hola");
}