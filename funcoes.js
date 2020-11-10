var produto1 = {
    nome: 'Sapato',
    preco: 150
};

var produto2 = {
    nome: 'camiseta',
    preco: 99
};

var formulaImpostoA = function (preco) {
    return preco * 0.1;
};

var formulaImpostoB = function (preco) {
    return preco * 0.2;
}

var calcularPreco = function (produto, formulaImposto) {
    return produto.preco + formulaImposto(produto.preco)
}
console.log(calcularPreco(produto1, formulaImpostoA));
console.log(calcularPreco(produto2, formulaImpostoB));

//função que retorna outra função
var helloWorld = function () {
    return function () {
        return "Hello World";
    };
};
console.log(helloWorld()());

//atribuindo um método a um objeto pessoa e fazendo-o devolver a idade
var pessoa = {
    nome: 'Rodrigo',
    idade: 32,
    retornaIdade: function(){
        return this.idade;
    }    
};
console.log(typeof(pessoa));
console.log(pessoa);
console.log(pessoa.retornaIdade());


var getAge = function(){
    return this.age;
}

var person = {
    name: "John",
    age: 25,
    getAge: getAge
};
console.log(person.getAge());
console.log(getAge());
console.log(getAge.call(person));

//Funções de fábrica
var criaPessoa = function(nome, idade){
    return {
        nome: nome,
        idade: idade
    };
};
console.log(criaPessoa('Paty', 30));

//Funções Construtoras
var Pessoa = function(nome, idade){
    this.nome = nome,
    this.idade = idade
};
console.log(new Pessoa('Pedro', 20));
console.log(new Pessoa('Maria', 30));

var helloWorld2 = function() {
    var message = 'Hello World!';
    return function(){
        return message;
    };
};
console.log(helloWorld2()());