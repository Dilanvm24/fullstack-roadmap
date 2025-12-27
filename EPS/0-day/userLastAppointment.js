
// 3.necesitamos obtener informacion de la ultima cita que el paciente tuvo con nosotros,
//  para esto crea una funcion llamada userLastAppointment que reciba como parametro el nombre completo del usuario o su id,
//   la funcion debe retornar la siguiente informacion.
//{ userId: "", fullName: "", serviceId: "" speciality: "", hospitalName: "", medicalNotes: "", medicationsUsed: "", date: "" }
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
function userName(parametro) {
  let fullName = "";

  for (let i = 0; i < usersDB.length; i++) {
    fullName = usersDB[i].firstName + " " + usersDB[i].lastName;

    if (usersDB[i].userId === parametro || fullName.toLowerCase() === parametro.toLowerCase()){
      return fullName;
    }
  }
  return "Usuario no existe";
}
function userLastAppointment(userId) {
  let ultimaCitaMedica = ""
  const nombreCompleto = userName(userId);

  let ultimaCita = {
    userId: "",
    fullName: "",
    serviceId: "",
    speciality: "",
    hospitalName: "",
    medicaNotes: "",
    medicationsUsed: "",
    date: "",
  };
  for (let i = 0; i < clinicalRecordDB.length; i++) {
    if (clinicalRecordDB[i].userId === userId) {
      let fechaActual = new Date(clinicalRecordDB[i].date)
      if(ultimaCitaMedica === "" || fechaActual > ultimaCitaMedica ){
        ultimaCitaMedica = fechaActual;
      }
      ultimaCita = {
        userId: clinicalRecordDB[i].userId,
        fullName: nombreCompleto,
        serviceId: clinicalRecordDB[i].serviceId,
        speciality: clinicalRecordDB[i].speciality,
        medicaNotes: clinicalRecordDB[i].medicalNotes,
        medicationsUsed: clinicalRecordDB[i].medicationsUsed,
        date: ultimaCitaMedica
      };
    }
  }
  return ultimaCita;
}

console.log(userLastAppointment("usr_112"));
