// 3.El gobierno nacional nos acaba de informar sobre una irregularidad en nuestros centros de atencion,
//  resulta que por ley ningun doctor puede atender mas de 4 especialidades diferentes entonces el gobierno nos esta pidiendo un informe sobre los doctores que han atendido mas de 4 especialidades,
//   crea un script para encontrar una lista de esos doctores y las especialidades que han impartido.
//    (nota: debes crear una lista con objetos donde cada objeto tenga el nombre del doctor y una lista con las especialidades que ha dado).
const clinicalRecordDB = require("./medical_history.json");

function doctoresTotalEspecialidades() {
    let doctores = [];
    for (let i = 0; i < clinicalRecordDB.length; i++) {
        let doctorActual = clinicalRecordDB[i].doctor;
        let especialidadActual = clinicalRecordDB[i].speciality;

        let doctorEncontrado = false;
        for (let j = 0; j < doctores.length; j++) {
            if (doctores[j].doctor === doctorActual) {
                doctorEncontrado = true;

                let especialidadExiste = false;

                for (let k = 0; k < doctores[j].specialities.length; k++) {
                    if (doctores[j].specialities[k] === especialidadActual) {
                        especialidadExiste = true;
                    }
                }

                if (!especialidadExiste) {
                    doctores[j].specialities.push(especialidadActual);
                }
            }
        }
        if (!doctorEncontrado) {
            doctores.push({
                doctor: doctorActual,
                specialities: [especialidadActual]
            });
        }
    }
    let doctoresIrregulares = [];

    for (let i = 0; i < doctores.length; i++) {
        if (doctores[i].specialities.length > 4) {
            doctoresIrregulares.push(doctores[i]);
        }
    }

    return doctoresIrregulares;
}

console.log(doctoresTotalEspecialidades());
