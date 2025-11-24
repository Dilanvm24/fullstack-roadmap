function isPalindromo(word){
    const normalWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedWord = normalWord.split("").reverse().join("");

    return normalWord === reversedWord;
}