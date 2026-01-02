const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
// Necesitamos obtener cual es el doctor preferido (mas visitado) de un usuario dado,
//para esto crea una funcion llamada userPreferredDoctor que reciba como parametro el nombre de un usuario y
// retorne el nombre del doctor de preferencia.

function userPreferredDoctor(userName) {
  let nameUser = userName.toLowerCase().split(" ");
  let idUsuario = "";
  let doctores = {};
  for (let i = 0; i < usersDataBase.length; i++) {
    if (
      nameUser[0] === usersDataBase[i].firstName.toLowerCase() &&
      nameUser[1] === usersDataBase[i].lastName.toLowerCase()
    ) {
      idUsuario = usersDataBase[i].userId;
    }
  }
  for (let j = 0; j < medicalHistoryBD.length; j++) {
    if (idUsuario === medicalHistoryBD[j].userId) {
      if (!doctores[medicalHistoryBD[j].doctor]) {
        doctores[medicalHistoryBD[j].doctor] = 1;
      } else {
        doctores[medicalHistoryBD[j].doctor] += 1;
      }
    }
  }
  let name = "";
  let count = 0;
  for (const key in doctores) {
    if (doctores[key] > count) name = key;
    count = doctores[key];
  }
  return name;
}
console.log(userPreferredDoctor("Andrés Gómez"));