function fatorial(number) {
    var rval = 1;
    for (var i = 2; i <= number; i++){
        rval = rval * i;
        
    }
    return rval;
}
console.log(fatorial(5));