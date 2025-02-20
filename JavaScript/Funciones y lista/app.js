let numeroSecreto = generarNumeroSecreto();

//Aqui estamos seleccionando el h1 y dando le un valor, en este caso el titulo es: Juego del numero secreto
/*let titulo = document.querySelector('h1');
titulo.innerHTML = ("Hora del Desafío");

//Aqui seleccionamos la etiqueta p del aparrafo y le indicamos el contenido que va a tener
let parrafo = document.querySelector('p');
parrafo.innerHTML = ("Indica un numero del 1 al 10");*/


//Otra opcion mejor a la hora de llamar o designar un titulo o parrafo
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Aqui llamamos al metodo intento de usuario donde en el realizamos la logica para esta funcion.
function verificarIntento(){
    let numeroElegido = parseInt(document.getElementById('numeroUsuario').value);
    console.log(numeroSecreto);
    console.log(numeroElegido);
    if(numeroSecreto === numeroElegido){
        alert("Excelente!, Adivinaste el numero!");
    }
    return;
}

function generarNumeroSecreto(numero){
    return Math.floor(Math.random()*10)+1;
    
}

//Crear una función que muestre "¡Hola, mundo!" en la consola.

function titulo(){
   console.log("Hola, mundo!");
    return;
}
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludar(nombre){
    console.log(`Hola ${nombre}!!!`);
    return;
}
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function calcularDoble(numero){
    return numero * 2;
}
//Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(num1,num2,num3){
    return (num1+num2+num3)/3;
}
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function mayor(numero1, numero2){
    if(numero1>numero2){
        console.log(`El primer numero es mayor: ${numero1}`);
    }else{
        console.log(`El segundo numero es mayor: ${numero2}`);
    }
}
//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicarPorSiMismo(numeroo){
    return numeroo * numeroo;
}
//Llamamos a la funcion creada para designarle lo que deseamos al elemento.
// Donde espera recibir un elemento tipo h1,h2,p,etc; junto con su texto o lo que querramos designar.
asignarTextoElemento('h1',"Hora del Desafío");
asignarTextoElemento('p',"Indica un numero del 1 al 10");
titulo();

//Metodos del desafio.
saludar('Alejo');
let sacarElDoble = calcularDoble(2);
console.log(sacarElDoble);
let prom = promedio(14,12,20);
console.log(prom);
let numMayor = mayor(3,1)
console.log(numMayor);
let porSiMismo = multiplicarPorSiMismo(10);
console.log(porSiMismo);