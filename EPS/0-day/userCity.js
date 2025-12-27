// 1.necesitamos obtener la ciudad de un usuario dado,
//  para esto crea una funcion llamada userCity que retorne el nombre de la ciudad del usuario.
//   la funcion puede recibir el id del usuario o el nombre completo del usuario,
//    si el usuario no existe en nuestros registros debe retornar "usuario no existe".
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
function userCity(parametro) {
  for (let i = 0; i < usersDB.length; i++) {
    let fullName = usersDB[i].firstName + " " + usersDB[i].lastName
    if (usersDB[i].userId === parametro || fullName.toLowerCase() === parametro.toLowerCase()) {
      return usersDB[i].city;
    }
  }
  return "Usuario no existe";
}

console.log(userCity("pedro cortes"));

console.log(userCity("usr_200"));


