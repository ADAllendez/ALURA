//1.Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
// De lo contrario, muestra "¡Buena semana!".
let dia = prompt ('Que dia de la semana es?');

if (dia === 'Sábado' || dia === 'Domingo'){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
};


//2.Verifica si un número ingresado por el usuario es positivo o negativo. 
// Muestra una alerta informativa.
let num = prompt("ingrese un numero para saber si es positivo o negativo: ");
if(num >=0){
    alert("Numero positivo");
}else if (num<0){
    alert("Numero negativo");
}else{
    alert("El numero es cero");
}


//3.Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
// En caso contrario, muestra "Intentalo nuevamente para ganar."
let puntuación = Number(prompt('Ingrese su puntuacion'));
if(puntuación >= 100){
    alert("¡Felicidades, has ganado!");
}else {
    alert("Intentalo nuevamente para ganar.");
}


//4.Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
// utilizando un template string para incluir el valor del saldo.
let saldo = 300;
alert(`Su saldo es: $${saldo}`);

//5.Pide al usuario que ingrese su nombre mediante un prompt. 
//Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("Ingrese su nombre:");
alert(`¡Bienvenido/a, ${nombre}!`);
