/**
 * Write a JavaScript program to get the difference between a given number and 13,
 * if the number is broader than 13 return double the absolute difference.
 */

let num1 = 13;
let num2 = prompt("Digite un numero: ");
let resultado = num1 - num2;

if (num1 > num2){
    alert("La diferencia es: " + resultado)
} else{
    alert("el doble de la diferencia absoluta es " + (resultado) * 2); 
}


 