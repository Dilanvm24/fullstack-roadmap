/**
 * Write a JavaScript program to check a pair of numbers and return
 * true if one of the numbers is 50 or if their sum is 50.  
 */
let numeroUno =  25;
let numeroDos = 25;
let resultado = numeroUno + numeroDos;
console.log(resultado);
let esCincuenta = numeroUno === 50 || numeroDos === 50 || resultado === 50;
    console.log("La suma o alguno de los 2 numeros es 50?: " + esCincuenta);

if(numeroUno % 2 === 0){
    console.log(" el numero uno  es par");
}else{
    console.log(" El numero uno Es impar")
}

if(numeroDos % 2 === 0){
    console.log("El numero dos es par");
}else{
    console.log("El numero dos es impar")
}