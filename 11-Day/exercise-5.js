function capitalLetter(String) {
    if (String.length === 0) return "";

    let words = String.split(""); 
    let letterConvertedToUppercase = words.map((word, index) => {
        if (index === 0) {
            return word.toUpperCase(); 
        }
        return word; 
    });

    return letterConvertedToUppercase.join("");
}