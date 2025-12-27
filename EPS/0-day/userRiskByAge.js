// 2.necesitamos saber si un usuario es de alto riesgo,
//  para esto podemos usar la edad como un factor.
//  Crea una funcion llamada userRiskByAge que reciba como parametro el nombre de un usuario y retorne "alto" si el usuario tiene mas de 60 años,
//   "medio" si el usuario tiene entre 40 y 60 años y "bajo" si el usuario tiene menos de 40 años.
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
function userRiskByAge(nombre) {
  for (let i = 0; i < usersDB.length; i++) {
    let fullName = usersDB[i].firstName + " " + usersDB[i].lastName;
    if (fullName.toLowerCase() === nombre.toLowerCase()) {
      let edadUsuario = usersDB[i].age;
      if (edadUsuario > 60) {
        return "Alto";
      } else if (edadUsuario >= 40 && edadUsuario <= 60) {
        return "Medio";
      } else if (edadUsuario < 40) {
        return "Bajo";
      }
    }
  }
  return "Usuario no encontrado";
}
console.log(userRiskByAge("Julián Zúñiga"));