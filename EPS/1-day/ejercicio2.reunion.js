// Necesitamos obtener cual es el medicamento mas consumido de un usuario dado,
//  para esto crea una funcion llamada userMostConsumedMedication que reciba como parametro el nombre del usuario
//   y retorne el nombre del medicamento mas usado.
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
function userMostConsumedMedication(nombreUsuario){
    let idUsuario = "";
    let medicamentos = {};
    
    for(let i = 0; i < usersDB.length; i++){
        let fullName = usersDB[i].firstName + " " + usersDB[i].lastName;
        
        if(fullName.toLowerCase() === nombreUsuario.toLowerCase()){
            idUsuario = usersDB[i].userId;
            break;
        }
    }
    
    if(!idUsuario){
        return "Usuario no encontrado";
    }
    
    for(let j = 0; j < clinicalRecordDB.length; j++){
        if(idUsuario === clinicalRecordDB[j].userId){
            for(let k = 0; k < clinicalRecordDB[j].medicationsUsed.length; k++){
                let medicamento = clinicalRecordDB[j].medicationsUsed[k];

                if(medicamentos[medicamento]){
                    medicamentos[medicamento]++;
                } else {
                    medicamentos[medicamento] = 1;
                }
            }
        }
    }
    
    let medicamentoMasUsado = "";
    let maxCount = 0;
    
    for(let medicamento in medicamentos){
        if(medicamentos[medicamento] > maxCount){
            maxCount = medicamentos[medicamento];
            medicamentoMasUsado = medicamento;
        }
    }
    
    return medicamentoMasUsado;
}

console.log(userMostConsumedMedication("Andrés Gómez"));