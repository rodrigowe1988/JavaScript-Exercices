
function regraDeTres(turmaCheia, turmaRestante){
    var res = parseFloat(turmaRestante / turmaCheia).toPrecision(4);
    return res * 100 + "%";
}

console.log(regraDeTres(420,135));
