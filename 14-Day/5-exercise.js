/**
 * Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
 * The string length must be broader than or equal to 1.  
 */

let cadenaDada = "Sebas nos esta dando palo";
let nuevaLetra = "Y";
let otraLetra = "D"
let agregandoLetraAlFinal;
let agregandoLetraAlInicio;


if(cadenaDada.length >= 1){
    agregandoLetraAlFinal = cadenaDada.slice() + nuevaLetra;
    console.log(agregandoLetraAlFinal);
    agregandoLetraAlInicio =  otraLetra + cadenaDada.replace(0) ;
    console.log(agregandoLetraAlInicio);
    let resultadoFrase = agregandoLetraAlInicio + agregandoLetraAlFinal;
    console.log(resultadoFrase);
}else{
    console.log("Cadena de texto no valida")
}
