// 2.Nos reportaron sobre un fraude de estudiantes que estan matriculados (su status debe ser "Matriculado") en carreras que no son ofrecidas en la universidad a la que pertenecen,
//  Necesitamos generar una lista con los siguientes datos por cada uno de los estudiantes que estan cometiendo el fraude.

// { fullName: "", userId: "", universityName: "", }
const gradesDB = require("./grades_db.json");
const studentDB = require("./student_db.json");
const universitiesDB = require("./universities_db.json");

function verificandoFraude(){
    let estudiantesMatriculados = "";
    let codigoUniversidad = "";
    let estudiantesConFraude = [];
    let carreraEstudiante = "";

    for(let i = 0; i < studentDB.length; i++){
        codigoUniversidad = studentDB[i].universityCode;
        carreraEstudiante = studentDB[i].career
        if(studentDB[i].status === "Matriculado"){
            estudiantesMatriculados = studentDB[i];
        }
        for(let i = 0; i < universitiesDB.length; i++){
            if(universitiesDB[i].code === codigoUniversidad){
                    if(!universitiesDB[i].offeredCareers.includes(carreraEstudiante)){
                        estudiantesConFraude.push(studentDB[i]);
                    }
            }
        }
    }

        

       return estudiantesConFraude;
            
}

console.log(verificandoFraude());