// 4.Necesitamos obtener cual es el hospital de preferencia (mas usado) de un usuario dado,
//  para esto crea una funcion llamada userPreferredHospital que reciba como parametro el nombre de un usuario
//   y retorne el nombre del hospital de preferencia.
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
function userPreferredHospital(nombreUsuario){
    let fullName = "";
    let nombreHospitales = {};
    let userId = "";
    for(let i = 0; i < usersDB.length; i++){
        fullName = usersDB[i].firstName + " " + usersDB[i].lastName;
        if(fullName.toLowerCase() === nombreUsuario.toLowerCase()){
            userId = usersDB[i].userId;
        }
    }

    console.log(userId);
    let count = 0;
    for (const usuario of clinicalRecordDB) {
        if(userId === usuario.userId){
            if(!(usuario.hospitalName in nombreHospitales)){
                nombreHospitales[usuario.hospitalName] = 1;
            }else{
                nombreHospitales[usuario.hospitalName] += 1;
            }
            
        }
    }
    
    let maxHospital = "";
    let maxValueHospital = 0;
    for (const hospital in nombreHospitales) {
       // console.log( hospital,nombreHospitales[hospital]);
          //  console.log(maxHospital);
            //console.log(maxValueHospital)
            //console.log(nombreHospitales[hospital]);
        if(nombreHospitales[hospital] > maxValueHospital){
            maxHospital = hospital;
            
            maxValueHospital = nombreHospitales[hospital];
        }
    }

    const maxValue = Object.keys(nombreHospitales).reduce((keyToPlay, currentKey) => nombreHospitales[keyToPlay] > nombreHospitales[currentKey] ? keyToPlay : currentKey)
    //console.log(maxValue);
    console.log(maxHospital, maxValueHospital);
}

userPreferredHospital("Andrés gómez");