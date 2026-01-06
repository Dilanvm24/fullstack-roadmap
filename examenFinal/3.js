// 3.Necesitamos crear una funcion que nos permita identificar si un estudiante aprobo una materia,
// para esto la funcion debe recibir el nombre completo del estudiante y el nombre de la materia como parametros,
//debe retornar "true" si aprobo la materia o "false" si la reprobo. Nota: Cada estudiante tiene varias calificaciones en cada materia,
//para determinar si paso la materia, el promedio de las calificaciones debe ser superior a 3.

const gradesDB = require("./grades_db.json");
const studentDB = require("./student_db.json");
const universitiesDB = require("./universities_db.json");

function estudiantesQueAprobaron(nombreEstudiante, materia){
    let nombreCompleto = "";
    let idUsuario = "";
    let sumaNotas = 0;
    let promedioNotas = 0;


     for(let i = 0; i < studentDB[i].length; i++){
        idUsuario = studentDB[i].userId;
        if(studentDB[i].firstName + " " + studentDB[i].lastName === nombreEstudiante.toLowerCase()){
            nombreCompleto = studentDB[i].firstName + " " + studentDB[i].lastName;
        }
    }

    let notasSuma = 0;
    for (const grade in gradesDB) {
        idMateriaUsuario = gradesDB[grade].userId
        if(idMateriaUsuario === idUsuario){
            if(gradesDB[grade].subject === materia){
                notasSuma = gradesDB[grade].grade;
                promedioNotas = notasSuma * gradesDB[grade].length;
            }
        }
    }
    if(promedioNotas >= 3){
        return true;
    }else{
        return false;
    }
    

}

console.log(estudiantesQueAprobaron("Oscar Téllez", "Tipografía"));

   