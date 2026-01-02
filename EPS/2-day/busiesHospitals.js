
// 1.Por orden del gobierno debemos informar cuales hospitales del pais estan atendiendo la mayor cantidad de pacientes,
//  para esto crea una funcion llamada busiestHospitals que retorne una lista de los 3 hospitales mas usados, los objetos de la lista deben tener la siguiente estrucutra:
// { hospitalName: "Clínica Especialistas de Sincelejo" usersServed: 1200 }
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
function busiestHospitals() {
    let hospitales = [];
    for (let i = 0; i < clinicalRecordDB.length; i++) {
        let hospitalActual = clinicalRecordDB[i].hospitalName;
        let encontrado = false;

        for (let j = 0; j < hospitales.length; j++) {
            if (hospitales[j].hospitalName === hospitalActual) {
                hospitales[j].usersServed++;
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            hospitales.push({
                hospitalName: hospitalActual,
                usersServed: 1
            });
        }
    }
    for (let i = 0; i < hospitales.length - 1; i++) {
        for (let j = i + 1; j < hospitales.length; j++) { 
            if (hospitales[j].usersServed > hospitales[i].usersServed) {
                let temp = hospitales[i];
                hospitales[i] = hospitales[j];
                hospitales[j] = temp;
            }
        }
    }
    let top3 = [];

    for (let i = 0; i < 3 && i < hospitales.length; i++) {
        top3.push(hospitales[i]);
    }

    return top3;
}

console.log(busiestHospitals());