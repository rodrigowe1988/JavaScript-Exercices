function area(heigth, width) {
    return `A área do retângulo é de ${heigth * width}m².`;
}

function contagem(num) {
    for(x = 0; x < num; x++){
        console.log(x);
    }
}

function parOuImpar(x){
    if(x % 2 === 0){
        return "É número par"
    } else {
        return "É número ímpar"
    }
}

function diaDaSemana(dia){
    switch(dia) {
        case 1 : return 'Domingo';
        break;
        case 2 : return 'Segunda-feira';
        break;
        case 3 : return 'Terça-feira';
        break;
        case 4 : return 'Quarta-feira';
        break;
        case 5 : return 'Quinta-feira';
        break;
        case 6 : return 'Sexta- feira';
        break;
        case 7 : return 'Sábado';
    }
}

function ateDez(n) {
    while (n < 3) {
        console.log(n);
        n++;
    }
}

console.log(area(10,5));
contagem(5);
console.log(parOuImpar(2));
console.log(diaDaSemana(4));
ateDez(1);

