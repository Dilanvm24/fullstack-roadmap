// Reglas:
// - El juego se juega entre 2 jugadores
// - El jugador 1 comienza sacando
// - Se cambia de saque cada 2 puntos
// - Gana el primero que llegue a 11 puntos
// Objetivo:
// Crear una función que reciba:
// - Nombre del jugador 1
// - Nombre del jugador 2
// - Puntos actuales del jugador 1
// - Puntos actuales del jugador 2
// La función debe retornar:
// - Quién debe sacar en este momento
// - Si el juego ha terminado y quién ganó

function pinPongServer(playerOne, playerTwo, pointsPlayerOne, pointsPlayerTwo){
   let totalPoints = pointsPlayerOne + pointsPlayerTwo;
   let whoTakesOut;
   let bloque = totalPoints / 2;
   if(pointsPlayerOne >= 11 || pointsPlayerTwo >= 11){
        if(pointsPlayerOne > pointsPlayerTwo){
            console.log("El ganador es " + playerOne);
        } else{
        console.log("El ganador es " + playerTwo);
    }
        
    }else{
   if(bloque % 2 === 0){
        whoTakesOut = playerOne;
        console.log("Saca el jugador " + playerOne);
   }else {
    whoTakesOut = playerTwo;
    console.log("Saca el jugador " + playerTwo);
   } 
 }
}
pinPongServer("dilan","Sebas" ,  9 , 9);


