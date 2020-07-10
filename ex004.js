function fatorial(number){
    var numberFat = 1;
    for(i = 2; i <= number; i++){
        numberFat *= i;
    }
    return numberFat;
}
console.log(fatorial(6));