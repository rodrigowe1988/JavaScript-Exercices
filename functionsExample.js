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

function areaOfSquare(side){
    return `The area of the square is ${side*side}m²`;
}

function getSize(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    let sizes = [area, volume];
    return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];

console.log(area(10,5));
contagem(5);
console.log(parOuImpar(2));
console.log(diaDaSemana(4));
ateDez(1);
console.log(areaOfSquare(2));
console.log(`The area of rectangle is ${areaOne}m².`);
console.log(`The volume of rectangle is ${volumeOne}m³.`);

