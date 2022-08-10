
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

while(nombre !="ESC"){

    let dia = parseInt(prompt("ingrese el dia de su cumpleaños: "));
    console.log ("su nombre es: "+ nombre + " y su dia de cumpleaños es: "+dia);
    nombre = prompt("ingrese su nombre: ");
}

/*




/*ejercicio numero 3*/
/*Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.*/

/* 
let numero = parseInt(prompt("ingrese un numero: "));

for(let i=1; i<=numero;i++){
    alert("hola");
}
*/

/*Escriba un programa que solicite una contraseña (el texto de la contraseña no es importante) y la vuelva a solicitar hasta que las dos contraseñas coincidan.*/

/*
let contraseña = prompt("Escriba su contraseña: ");
alert("tiene 3 intentos para confirmar su contraseña.");
let guardar = prompt("Confirme su contraseña: ");

while(guardar != contraseña){
    alert("las contraseñas no coinciden intentelo de nuevo: ")
    contraseña = prompt("Escriba su contraseña: ");
    guardar = prompt("Confirme su contraseña: ");
}
alert("contraseña coinciden correctamente")
*/

/*Escriba un programa que solicite una contraseña (el texto de la contraseña no es importante) y la vuelva a solicitar hasta que las dos contraseñas coincidan, con un límite de tres peticiones.*/

/*
let contraseña = prompt("Escriba su contraseña: ");
alert("tiene 3 intentos para confirmar su contraseña.");
let guardar = prompt("Escriba de nuevo su contraseña: ");
let a =0;
let b =2;
while((guardar != contraseña) && (a<=b)){
        alert("las contraseñas no coinciden intentelo de nuevo: ")
        contraseña = prompt("Escriba su contraseña: ");
        guardar = prompt("Escriba de nuevo su contraseña: ");
        a = a+1;
    }
alert("contraseña coinciden correctamente");

*/
/*esto es una funcion que me permite sumar con parametro, estos parametros son ingresados por el usuario

let resultado=0;
function sumar(num1, num2){
    resultado = num1+num2;
    console.log("la suma de"+" " + num1 + "+" + num2 +"=" + resultado);
}

sumar(num1=+prompt("ingrese un numero"),num2=+prompt("ingrese un numero"));
sumar(3,10);
sumar(6,8)
sumar(num1=+prompt("ingrese un numero"),num2=+prompt("ingrese un numero"));
*/
/*
function sumar(num1, num2){
    return num1+num2;
}
let resultado = sumar(num1=+prompt("ingrese un numero"),num2=+prompt("ingrese un numero"));

console.log("el resultado de"+" "+ num1 + "+" + num2 + "=" + resultado);
*/

/*Desafío 1-->Simulador con funciones, bucles y condicionales*/

/*Simulador ---> Este simulador me va a a permitir que los usuarios se registren, despues comprobará si ese usuario ya está registrado. En el proceso de registro va a pedir dos veces la contraseña, una para almacenar en una variable y la otra va  a ser de confirmación, para poder comparar que ambas sean iguales.
*/
/*
function validar(password, confirmacion){
    while(password != confirmacion){
        alert("las contraseñas no coinciden intentelo de nuevo");
        confirmacion = prompt("Por favor confirme la contraseña: ");
    }
}
function igualar(correo, contraseña){
    while(correo == contraseña){
        alert("usuario no se ecuentra registrado");
        correo = prompt("Ingrese su email: ");
        contraseña = prompt("Ingrese su contraseña: ");
    }
}

alert("BIENVENIDO AL PROCESO DE LOGIN\n\nDIGITE:\n \n1.Si desea registrarse\n2.Si desea Iniciar Sesion.");
let tecla = parseInt(prompt("1.Si desea registrarse\n2.Si desea Iniciar Sesion."));
/*
if(tecla == 1){
    alert("BIENVENIDOS AL PROCESO DE REGISTRO")
    let email = prompt("Ingrese su email de registro: ");
    let password = prompt("Ingrese su contraseña de registro: ");
    alert("Digite nuevamente la contraseña")
    let confirmacion = prompt("Confirme la contraseña: ");
    validar(password,confirmacion);
    alert("registro exitoso");
}
else if(tecla == 2){
    alert("selecionó Iniciar Sesion");
    let correo = prompt("Ingrese su email: ");
    let contraseña = prompt("Ingrese su contraseña: ");
    igualar(correo, contraseña);
    alert("Inicio de sesión exitoso");
}
else{
    alert("lo sentimos digito una opción no valida.")
}
*/
/*
switch (tecla){
    case 1:
        alert("BIENVENIDOS AL PROCESO DE REGISTRO")
        let email = prompt("Ingrese su email de registro: ");
        let password = prompt("Ingrese su contraseña de registro: ");
        alert("Digite nuevamente la contraseña")
        let confirmacion = prompt("Confirme la contraseña: ");
        validar(password,confirmacion);
        alert("registro exitoso");
        break;
    case 2:
        alert("selecionó Iniciar Sesion");
        let correo = prompt("Ingrese su email: ");
        let contraseña = prompt("Ingrese su contraseña: ");
        igualar(correo, contraseña);
        alert("Inicio de sesión exitoso");
        break;
    default:
        alert("lo sentimos digito una opción no valida.");  
        break;
}
*/


/* Desafio 2-->Objetos,Clases y función constructor/*

/* en ester primera parte hicimos un programa con clase y funciones que me permite introducir el inventario a mi e-commerce con una forma mas sencilla y en una sola linea, ademas me suma el IVA Colombiano del (%19), para así actualizar el precio nuevo, lo agregue todo a la funcion agregarItem y cada vez que quiera agregar un producto es solo llamarla*/ 

class celular{
    constructor(nombre, precio, memoria, color){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.memoria = parseInt(memoria);
        this.color = color;
    }
    sumarIva(){
        this.precio = this.precio*1.19;
    }
}


const productos =[];

/*Funcion  para agregar elemenots al stock*/
const stockear = (celular)=>{
    productos.push(new celular(prompt("ingrese la marca: "),prompt("ingrese el precio: "),prompt("ingrese la memoria: "),prompt("ingrese el color: ")))

    for (const celular of productos)
    celular.sumarIva();
}


/*ingreso del usuario permitira comprar-vender-stockear ó borrar elementos del array */


let usuario = " "

while(usuario != "salir"){
usuario = prompt("ingrese la operación que va a realizar: \ncomprar\ninventario\nstockear\nborrar\nsalir")
switch(usuario){
    case "comprar":
        alert("comprar")
        comprar();
        break;
    case "inventario":
        alert("inventario")
        verInventario()
        break;
    case "stockear":
        stockear(celular)
        break;
    case "borrar":
        alert("borrar")
        borrar()
        break;
    case "salir":
        alert("hasta luego")
        break;
    default:
        alert("lo sentimos digito una opción no valida.");  
        break;
}
}

/*Funcion  para ver el inventario existente*/

function verInventario(){
    productos.forEach(celular => {
        console.log(celular)
    });
}

/*Funcion  para comprar*/

function comprar(){
    let celularElegido = prompt("ingrese la marca y modelo del celular elegido");
    const resultado = productos.find((celular) =>{
        return celular.nombre == celularElegido;
    })
    if(resultado != undefined){
        console.log("el telefono que usted compro es :" ,resultado);
    }
    else{
        console.log("lo sentimos no encontramos la referencia del celular");
    }
}

/*Funcion  para borrar del stock*/
function borrar(){
    let buscar = prompt("ingrese el nombre del elemento que desea borrar");
    let indiceEncontrado = -1;
    for(indice = 0;indice < productos.length;indice++){
        if(productos[indice].nombre === buscar){
            indiceEncontrado = indice;
            break;
        }
    }
    productos.splice(indiceEncontrado, 1);
}
