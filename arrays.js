carros = [
{
    marca: 'ford',
    modelo: 'ka',
    preco: 28800
},
{
    marca: 'chevrolet',
    modelo: 'corsa',
    preco: 34750
},
{
    marca: 'fiat',
    modelo: 'palio',
    preco: 32000
}];

var carrosFord = carros.filter(function(elemento){
    return elemento.marca === 'ford';
});
console.log(carrosFord);

//responsável por mapear o array
var marcaDeCarros = carros.map(function (elemento){
    return elemento.marca;
});
var modeloDeCarros = carros.map(function(elemento){
    return elemento.modelo;
});
console.log(marcaDeCarros[0], modeloDeCarros[1]);

//processando os elementos de um array
var total = carros.reduce(function(prev, cur){
    return prev + cur.preco;
}, 0);
console.log(total);

//fatia o array e pode pegar elementos isolados dele para manipulá-los
carros2 = ['ka', 'corsa', 'palio', 'gol'];
let fatiandoCarros = carros2.slice(2);
console.log(fatiandoCarros);