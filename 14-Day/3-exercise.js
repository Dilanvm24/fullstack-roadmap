/**
 * Write a JavaScript program to create another string by adding "Py" in front of a given string
 * If the given string begins with "Py" return the original string.  
 */
let palabra = "Viva la programacion";
 console.log(palabra[0]);
 console.log(palabra[1]);
 let letraUno = palabra[0];
 let letraDos = palabra[1];

 if(letraUno === "P" && letraDos === "y"){
     console.log("la cadena de texto  ya tiene las letras 'Py':" + palabra);
 }else{
    let letrasNuevas = "Py" + palabra;
    console.log("La palabra con sus dos nuevas letras es: " + letrasNuevas);
 }
