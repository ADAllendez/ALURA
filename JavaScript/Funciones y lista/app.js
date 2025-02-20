let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

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
function intentoDeUsuario(){
    alert('El boton fue clicado');
    return;
}

function generarNumeroSecreto(numero){
    return Math.floor(Math.random()*10)+1;
    
}

//Llamamos a la funcion creada para designarle lo que deseamos al elemento.
// Donde espera recibir un elemento tipo h1,h2,p,etc; junto con su texto o lo que querramos designar.
asignarTextoElemento('h1',"Hora del Desafío");
asignarTextoElemento('p',"Indica un numero del 1 al 10");