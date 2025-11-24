function countVowels(inputString) {
    const vowels = /[aeiou]/gi;
    const matches = inputString.match(vowels);
    return matches ? matches.length : 0;
}
