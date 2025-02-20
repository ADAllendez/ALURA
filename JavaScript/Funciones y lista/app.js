//Aqui estamos seleccionando el h1 y dando le un valor, en este caso el titulo es: Juego del numero secreto
let titulo = document.querySelector('h1');
titulo.innerHTML = ("Hora del Desafío");

//Aqui seleccionamos la etiqueta p del aparrafo y le indicamos el contenido que va a tener
let parrafo = document.querySelector('p');
parrafo.innerHTML = ("Indica un numero del 1 al 10");

//Aqui llamamos al metodo intento de usuario donde en el realizamos la logica para esta funcion.
function intentoDeUsuario(){
    alert('El boton fue clicado');
}