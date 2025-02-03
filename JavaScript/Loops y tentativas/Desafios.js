//1.Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. 
// Muestra cada número.

let contador = 1;
while(contador <=10 ){
    alert(contador);
    contador++;
};

//2.Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'.
// Muestra cada número.
let cont = 10;
while(cont >=0 ){
    alert(cont);
    cont--;
};
//3.Crea un programa de cuenta regresiva. 
// Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 
//'while' en la consola del navegador.

let numero = Number(prompt('Ingrese un numero para hacer la cuenta regresiva: '));
while(numero >=0 ){
    alert(numero);
    numero--;
};

//4.Crea un programa de cuenta progresiva. Pide un número y 
//cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.let numero = Number(prompt('Ingrese un numero para hacer la cuenta regresiva: '));
let num = Number(prompt('Ingrese un numero para hacer la cuenta progresiva: '));
let con=0;
while(con <= num ){
    alert(con);
    con++;
};


