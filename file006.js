function imcCalculator(altura, peso) {
    var imc = peso / (altura * altura);
    console.log(imc.toFixed(2));
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso");
    } else if (imc >= 30 && imc <= 34.9) {
        console.log("obesidade grau 1");
    } else if (imc >= 35 && imc <= 39.9) {
        console.log("Obesidade grau 2");
    } else {
        console.log("Obesidade grau 3");
    }
    return imc;
}

imcCalculator(1.74, 72);