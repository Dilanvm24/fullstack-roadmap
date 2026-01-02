const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
// 2.necesitamos un resumen sobre los servicios que a usado un paciente, para esto crea una funcion llamada userServicesResume,
//  que reciba como parametro el nombre de un usuario de nuestra base de datos.
// la funcion debe retornar el siguiente informe:

// { userId: "", firstName: "", lastName: "", totalMedicalAppointments: 1302, }
function userServicesResume(nombreUsuario) {
  let resumen = {
    userId: "",
    firstName: "",
    lastName: "",
    totalMedicalAppointments: 0,
  };

  let idPersona = "";
  let totalMedicalAppointments = 0;
  
  
  for (let i = 0; i < usersDB.length; i++) {
    let fullName = usersDB[i].firstName + " " + usersDB[i].lastName;
    
    if (fullName.toLowerCase() === nombreUsuario.toLowerCase()) {
      idPersona = usersDB[i].userId;
      resumen.userId = usersDB[i].userId;
      resumen.firstName = usersDB[i].firstName;
      resumen.lastName = usersDB[i].lastName;
    }
  }
  
  for (let j = 0; j < clinicalRecordDB.length; j++) {
    if (idPersona === clinicalRecordDB[j].userId) {
      totalMedicalAppointments++;
    }
  }
  resumen.totalMedicalAppointments = totalMedicalAppointments;
  return resumen;
}
console.log(userServicesResume("carolina rueda"));