function deleteLetter(word, letter){
    let wordArrary = word.split("");
    let arrayFinal = [];
    for (let i = 0; i < wordArrary.length; i++) {
        if(letter !== wordArrary[i]){
             arrayFinal.push(wordArrary[i]);
        }
        
    }
    return wordArrary = arrayFinal.join("");
}