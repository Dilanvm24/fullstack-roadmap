// 3.acabamos de ser demandados por la familia de un paciente que murio luego de una visita a uno de nuestros centros medicos,
// resulta que en la investigacion sobre su muerte encontraron que en uno de nuestros centros medicos le suministraron Warfarina y Meloxicam en una misma visita,
// esta combinacion puede ser mortal porque no se debe combinar anticoagulantes con antiinflamatorios no esteroides,
// no tenemos una lista de los medicamentos que usamos pero con la base de datos que tenemos podemos determinar cuales son los medicamentos que utilizamos luego de que tengas esa lista de medicamentos
// investiga cuales de ahi son antiinflamatorios no esteroides y luego de eso realiza un script que permita identificar a los doctores que suministraron Warfarina con alguno de esos antiinflamatorios no esteroides,
// los hospitales que permitieron esto tambien tienen responsabilidad por lo tanto tambien debemos obtener el nombre los hospitales donde sucedio esto y ademas el nombre de los usuarios para poder contactarlos y llegar a una conciliacion con ellos antes de que se sumen a esta demanda.
const usersDB = require("./user_database.json");
const clinicalRecordDB = require("./medical_history.json");
function investigarCombinacionesPeligrosas(clinicalRecordDB){
    let anticoagulante = "Warfarina";
    let antiinflamatorios = [
        "Ibuprofeno",
        "Meloxicam",
        "Naproxeno",
        "Diclofenaco",
        "Ketoprofeno",
        "Celecoxib",
        "Indometacina",
        "Piroxicam",
        "Ketorolaco"
    ];
    
    let casosPeligrosos = [];
    let doctoresInvolucrados = new Set();
    let hospitalesInvolucrados = new Set();
    let pacientesAfectados = new Set();
    
    for(let i = 0; i < clinicalRecordDB.length; i++){
        let registro = clinicalRecordDB[i];
        let medicamentos = registro.medicationsUsed;
        
        // ✅ Validar que medicamentos existe y es un array
        if(!medicamentos || !Array.isArray(medicamentos)){
            continue; // Saltar este registro
        }
        
        let tieneWarfarina = false;
        let aiinesEncontrados = [];
        
        for(let j = 0; j < medicamentos.length; j++){
            // ✅ Validar que el medicamento no sea null o undefined
            if(!medicamentos[j]){
                continue; // Saltar este medicamento
            }
            
            if(medicamentos[j].toLowerCase() === anticoagulante.toLowerCase()){
                tieneWarfarina = true;
            }
        }
        
        if(tieneWarfarina){
            for(let k = 0; k < medicamentos.length; k++){
                // ✅ Validar que el medicamento no sea null o undefined
                if(!medicamentos[k]){
                    continue;
                }
                
                for(let m = 0; m < antiinflamatorios.length; m++){
                    if(medicamentos[k].toLowerCase() === antiinflamatorios[m].toLowerCase()){
                        aiinesEncontrados.push(medicamentos[k]);
                    }
                }
            }
        }
        
        if(tieneWarfarina && aiinesEncontrados.length > 0){
            casosPeligrosos.push({
                fecha: registro.date,
                doctorName: registro.doctor,
                hospitalName: registro.hospitalName,
                userId: registro.userId,
                antiinflamatorios: aiinesEncontrados
            });
            
            doctoresInvolucrados.add(registro.doctor);
            hospitalesInvolucrados.add(registro.hospitalName);
            pacientesAfectados.add(registro.userId);
        }
    }
    
    let pacientesContacto = [];
    for(let i = 0; i < usersDB.length; i++){
        if(pacientesAfectados.has(usersDB[i].userId)){
            pacientesContacto.push({
                userId: usersDB[i].userId,
                nombre: usersDB[i].firstName + " " + usersDB[i].lastName,
                email: usersDB[i].email,
                ciudad: usersDB[i].city
            });
        }
    }
    
    return {
        totalCasosPeligrosos: casosPeligrosos.length,
        casosPeligrosos: casosPeligrosos,
        doctoresInvolucrados: Array.from(doctoresInvolucrados),
        hospitalesInvolucrados: Array.from(hospitalesInvolucrados),
        pacientesAfectados: pacientesContacto
    };
}
console.log(investigarCombinacionesPeligrosas(clinicalRecordDB));