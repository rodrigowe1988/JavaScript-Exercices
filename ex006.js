function parOuImparTurbo(number){
    if(number % 2 == 0){
        return number * 2;
    } else {
        return number * 3;
    }
}
console.log(parOuImparTurbo(5));


function arrowFunction(s)
{
    return s => s % 2 === 0 ? s * 2: s * 3;
}

console.log(arrowFunction);