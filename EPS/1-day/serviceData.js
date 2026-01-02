
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
// 1. necesitamos crear una funcion que nos de la informacion de un servicio dado,
//  para esto crea una funcion llamada serviceData que reciba por parametro el id del servicio y
//   retorne el objeto de ese servicio en nuestra base de datos.

function serviceData(idService){
    for(let i = 0; i < clinicalRecordDB.length; i++){
        if(clinicalRecordDB[i].serviceId === idService);
         return clinicalRecordDB[i];
    }
}

console.log(serviceData("srv_0001",))
