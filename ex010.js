function lastLetters(word) {
    var separador = word.length-1;
    var arrayDeLetras = word.split(separador);
    var lastArrayLetters = arrayDeLetras.slice(arrayDeLetras.length - 2, arrayDeLetras.length - 1);
    console.log(lastArrayLetters);
}
lastLetters("Yoga");