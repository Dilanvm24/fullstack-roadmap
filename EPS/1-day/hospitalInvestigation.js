// 5.Oh nooo!
//  nos acaban de informar que el doctor Luis Burbano realizo un robo en uno de nuestros centros medicos
//   por favor crea un script que nos de una lista de los hospitales en los que ha trabajado el doctor burbano para poder informar a los respectivos centros medicos
//    y que ellos puedan realizar una investigacion.
const clinicalRecordDB = require("./medical_history.json");
function hospitalInvestigation(nombre) {
    let hospitales = [];

    for (let i = 0; i < clinicalRecordDB.length; i++) {
        let doctor = clinicalRecordDB[i].doctor.toLowerCase();
        let nombreBuscado = nombre.toLowerCase();

        if (doctor.indexOf(nombreBuscado) !== -1) {

            let hospitalActual = clinicalRecordDB[i].hospitalName;
            let existe = false;

            // 🔁 Verificar si ya existe
            for (let j = 0; j < hospitales.length; j++) {
                if (hospitales[j] === hospitalActual) {
                    existe = true;
                    break;
                }
            }

            // ➕ Solo agregar si NO existe
            if (!existe) {
                hospitales.push(hospitalActual);
            }
        }
    }

    return hospitales;
}

console.log(hospitalInvestigation("luis burbano"));