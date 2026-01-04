const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
// 1. Un proveedor internacional de medicamentos nos acaba de informar que hubo un error con un lote de pregabalina que suministramos en nuestros centros medicos,
// de nuestro sistema de informacion de inventario nos informan que ese lote fue consumido en su totalidad durante el 2024,
// teniendo esta informacion crea un script que permita identificar que pacientes fueron medicados con pregabalina durante el 2024,
// rapidooo necesitamos contactar a estos usuarios (en el resultado debe estar el correo de los usuarios para poder contactarlos)

function pacientesConPregabalina(medical_history){
    let usuariosAfectados = [];
    let idsUnicos = new Set ();

    for(let i = 0; i < clinicalRecordDB.length; i++){
        let registro = clinicalRecordDB[i]


        let año = new Date(registro.date).getFullYear();


        if(año === 2024){
            for(let j = 0; j < registro.medicationsUsed.length; j++ ){
                let medicamento = registro.medicationsUsed[j];

                if(medicamento === "Pregabalina" ){
                    idsUnicos.add(registro.userId);
                    break;
                }
            }
        }
    }
        for(let k = 0; k < usersDB.length; k++){
        if(idsUnicos.has(usersDB[k].userId)){
            usuariosAfectados.push({
                userId: usersDB[k].userId,
                nombre: usersDB[k].firstName + " " + usersDB[k].lastName,
                email: usersDB[k].email,
                telefono: usersDB[k].phone
            });
        }
    }
    return usuariosAfectados;
   
   
}

console.log(pacientesConPregabalina(clinicalRecordDB));