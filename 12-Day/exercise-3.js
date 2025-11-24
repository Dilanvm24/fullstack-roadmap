/**
 *  write a js function that receives an object and two strings as parameters
 *  the function should add a property named as the second parameter and 
 *  the value of that property should be the third parameter.
 */

let habilidades = {
    habilidad1: "El es veloz",
    habilidad2: "el es fuerte",
}
let masHabilidades = {};
function addProperty(habilidades, value){
    habilidades.nuevaHabilidad = value;
    return habilidades;
}
 
