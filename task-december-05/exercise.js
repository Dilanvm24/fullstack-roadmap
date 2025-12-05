

function multiplicarArrays(array){
    let resultadoParcial = 0;
    let total = 0;
    let arrayUno = [];
    let arrayDos = "";


     for(let i = 0; i < array.length; i++){
            if(typeof array[i] === 'number'){
        arrayUno.push(array[i]);
          
      }else{
          arrayDos = array[i]
          console.log(arrayDos);
         
      }
 }
     console.log(arrayUno);
      console.log(arrayDos);
      for(let i = 0; i < arrayUno.length; i++){
          for(let j = 0; j < arrayDos.length-1; j++){
            resultadoParcial = arrayUno[i]*arrayDos[j] ; 
            total = resultadoParcial * arrayDos[j+1];
          }
          
           console.log("Numero: " + total );
      }


}
(multiplicarArrays([5, 2, 1, 4, 3, [2, 3] ,2]));

