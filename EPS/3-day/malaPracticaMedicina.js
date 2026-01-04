// 4.la Warfarina es un anticoagulante muy potente y su dosis debe ser controlada con una exactitud muy alta,
//  nos informaron que existen doctores en nuestra red que han suministrado este medicamente mas de 1 vez en una misma visita medica,
//   encuentra esos doctores y da un informe detallado sobre que dia hicieron esa mala practica y en que pacientes lo utilizaron.
//    el informe debe tener la siguiente estructura:

// [ { doctor: "Dr. Mario Vargas" fechas: [ "2023-07-13T17:36:17.616Z", "2024-08-14T21:17:05.780Z", "2023-10-18T10:38:20.499Z" ],
//      pacientes: [ "Andrés Gomez", "Nicolás Torres", "Alejandro Moreno" ] },
//       { doctor: "Dra. Isabela Rosales" fechas: [ "2023-06-11T17:36:17.616Z", "2024-04-18T21:17:05.780Z", "2023-12-04T10:38:20.499Z" ],
//          pacientes: [ "Lorena Bermúdez", "Cristian Toro", ] }, ]
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
function detectarMalaPracticaWarfarina(){
    let doctoresConMalaPractica = {};
    
    for(let i = 0; i < clinicalRecordDB.length; i++){
        let registro = clinicalRecordDB[i];
        let medicamentos = registro.medicationsUsed;
        
        if(!medicamentos || !Array.isArray(medicamentos)){
            continue;
        }
        
        let contadorWarfarina = 0;
        for(let j = 0; j < medicamentos.length; j++){
            if(medicamentos[j] && 
               medicamentos[j].toLowerCase() === "warfarina"){
                contadorWarfarina++;
            }
        }
        
        if(contadorWarfarina > 1){
            let doctor = registro.doctor;
            
            if(!doctoresConMalaPractica[doctor]){
                doctoresConMalaPractica[doctor] = {
                    fechas: [],
                    userIds: []
                };
            }
            
            doctoresConMalaPractica[doctor].fechas.push(registro.date);
            doctoresConMalaPractica[doctor].userIds.push(registro.userId);
        }
    }
    
    let informe = [];
    
    for(let doctor in doctoresConMalaPractica){
        let datos = doctoresConMalaPractica[doctor];
        let userIds = datos.userIds;
        let nombresPacientes = [];
        
        for(let i = 0; i < userIds.length; i++){
            for(let j = 0; j < usersDB.length; j++){
                if(usersDB[j].userId === userIds[i]){
                    nombresPacientes.push(
                        usersDB[j].firstName + " " + usersDB[j].lastName
                    );
                    break;
                }
            }
        }
        
        informe.push({
            doctor: doctor,
            fechas: datos.fechas,
            pacientes: nombresPacientes
        });
    }
    
    return informe;
}
console.log(detectarMalaPracticaWarfarina());