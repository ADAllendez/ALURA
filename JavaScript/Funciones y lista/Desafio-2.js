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