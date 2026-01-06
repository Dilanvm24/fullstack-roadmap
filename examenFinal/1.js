const gradesDB = require("./grades_db.json");
const studentDB = require("./student_db.json");
const universitiesDB = require("./universities_db.json");

//1.Necesitamos encontrar todos los estudiantes de Mosquera que estudien en la Universidad Nacional.

function buscandoPorLocalidad(localidad){
    let estudiantesEnEsaLocalidad = [];
     let codigoUniversidad;
    let codigoUniversidadEstudiantes;
    let codigoUniversidadBuscada = "903022448B";

    for(let i = 0; i < universitiesDB.length; i++){
         codigoUniversidad = universitiesDB[i].code;
    }

    for(let i = 0; i < studentDB.length; i++){
        codigoUniversidadEstudiantes = studentDB[i].universityCode;
        if(codigoUniversidadEstudiantes === codigoUniversidadBuscada &&  studentDB[i].originCity === localidad){
            estudiantesEnEsaLocalidad.push(studentDB[i]);
            
        }
    }

    return estudiantesEnEsaLocalidad;
}

console.log(buscandoPorLocalidad("Mosquera"));

