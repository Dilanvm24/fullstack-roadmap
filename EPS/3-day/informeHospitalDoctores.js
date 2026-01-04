// 2. resulta que en medio de una reunion con nuestros medicos el doctor Alberto Martínez nos informo que un paciente se comunico con el para preguntarle acerca de unas indicaciones
//que el doctor le habia dado en su cita de Alergología pero el doctor Alberto no da esa especialidad,
//eso solo quiere decir que tenemos un impostor! realiza un script que nos permita identificar
//tanto a los pacientes que este impostor halla atendido como a los hospitales en los que estuvo para poder realizar nuestro respectivo informe.
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");

function identificandoPacientesHospitales(doctorImpostor){
    let especialidadFraude = "Alergología";
    let pacientesAfectados = [];
    let hospitalesInvolucrados = new Set();
    let idsUnicos = new Set ();


    for(let i = 0; i < clinicalRecordDB.length; i++){
        let registro = clinicalRecordDB[i];

        if(registro.doctor === doctorImpostor && registro.speciality === especialidadFraude){

            idsUnicos.add(registro.userId);
            hospitalesInvolucrados.add(registro.hospitalName);
        }
    }

    for(let j = 0; j < usersDB.length; j++){
        if(idsUnicos.has(usersDB[j].userId)){
            pacientesAfectados.push({
                  userId: usersDB[j].userId,
                nombre: usersDB[j].firstName + " " + usersDB[j].lastName,
                email: usersDB[j].email,
                telefono: usersDB[j].phone,
                ciudad: usersDB[j].city
            });
        }
    }

   let  informe = {
        doctorImpostor: doctorImpostor,
        especialidadFraudulenta: especialidadFraude,
        pacientes: pacientesAfectados,
        hospitalesInvolucrados: Array.from(hospitalesInvolucrados),
    };

    return informe;
}

console.log(identificandoPacientesHospitales("Dr. Alberto Martínez"))

