// 3.necesitamos obtener una lista de usuarios que han visitado un hospital dado,
//  para esto crea una funcion llamada hospitalUsers que reciba como parametro el nombre del hospital y
//   que retorne un array con el nombre COMPLETO de los usuarios que han visitado ese hospital ej:

// ["Diego Sánchez", "Isabella Flores", "Fernando Sierra"]
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
function hospitalUsers(nombreHospital){
    let fullName = "";
    let visitaUsuariosHospital = []; 
    let usuarioId = [];
    for(let i = 0; i < clinicalRecordDB.length; i++){
         if(clinicalRecordDB[i].hospitalName.toLowerCase() === nombreHospital.toLowerCase()){
            usuarioId.push(clinicalRecordDB[i].userId)
        }
    }

            for(let j = 0; j < usersDB.length; j++){
                if(usuarioId.includes(usersDB[j].userId)){
                     fullName =  usersDB[j].firstName + " " + usersDB[j].lastName;
                    if(!visitaUsuariosHospital.includes(fullName)){
                        visitaUsuariosHospital.push(fullName);
                    }

                       
                }
        }
         return visitaUsuariosHospital;
        
    }



console.log(hospitalUsers("Clínica Medihel"));