console.log(10 == '10');
console.log(null == undefined);
console.log(10 == new Number(10));
var novoArray = new Array(10);
console.log(novoArray);

//comparar objetos 
x = {};
y = {};
console.log(x == y);
y = x;
console.log(x == y);
console.log(0 || 2); //retorna 2 pois o 0 seria false
console.log(1 || 2); //retorna 1 pois qualquer número que não seja 0 é true 

if(!null){
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}

var randomNum = Math.random();
console.log(randomNum);
console.log(typeof 10); 

//instance of e in
var Pessoa = function(nome, idade, profissao){
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
};
var pessoa1 = new Pessoa("Rodigo", 32, 'Programador');
console.log(pessoa1);
console.log(pessoa1 instanceof Pessoa);
console.log(pessoa1 instanceof Date);
console.log('nome' in pessoa1);
console.log('peso' in pessoa1);