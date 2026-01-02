// 2. Por control medico debemos informar sobre la ultima vez que un usuario se le administro cierto medicamento,
//  para esto crea una funcion llamada medicationUsedTracker, la funcion debe recibir 2 parametros,
//  el primer parametro puede ser el id del usuario o su nombre completo y el segundo parametro debe ser el nombre del medicamento,
//  la respuesta de la funcion debe dar la siguiente informacion:
// { userId: "", fullName: "", date: "", hospitalName: "" doctor: "" }
// esos datos deben ser de la ultima vez que se le suministro el medicamento al usuario.
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");


function medicationUsedTracker(usuario, nombreMedicamento) {

    let userId = "";
    let fullName = "";

    // 1️⃣ Buscar usuario (ID o nombre completo)
    for (let i = 0; i < usersDB.length; i++) {
        let nombreCompleto = usersDB[i].firstName + " " + usersDB[i].lastName;

        if (
            usersDB[i].userId === usuario ||
            nombreCompleto.toLowerCase() === usuario.toLowerCase()
        ) {
            userId = usersDB[i].userId;
            fullName = nombreCompleto;
            break;
        }
    }

    if (!userId) {
        return "Usuario no encontrado";
    }

    // 2️⃣ Buscar última vez que se administró el medicamento
    let ultimaFecha = "";
    let hospitalName = "";
    let doctor = "";

    for (let i = 0; i < clinicalRecordDB.length; i++) {
        if (clinicalRecordDB[i].userId === userId) {

            let meds = clinicalRecordDB[i].medicationsUsed;

            if (meds && meds.length > 0) {
                for (let j = 0; j < meds.length; j++) {

                    // ✅ VALIDACIÓN SIN typeof
                    if (
                        meds[j] &&
                        meds[j].toLowerCase() === nombreMedicamento.toLowerCase()
                    ) {
                        if (
                            ultimaFecha === "" ||
                            clinicalRecordDB[i].date > ultimaFecha
                        ) {
                            ultimaFecha = clinicalRecordDB[i].date;
                            hospitalName = clinicalRecordDB[i].hospitalName;
                            doctor = clinicalRecordDB[i].doctor;
                        }
                    }
                }
            }
        }
    }

    if (!ultimaFecha) {
        return "El medicamento no fue administrado a este usuario";
    }

    // 3️⃣ Resultado final
    return {
        userId: userId,
        fullName: fullName,
        date: ultimaFecha,
        hospitalName: hospitalName,
        doctor: doctor
    };
}

console.log(medicationUsedTracker("usr_003", "Meloxicam"));