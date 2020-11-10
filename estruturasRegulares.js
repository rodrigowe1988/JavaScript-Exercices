var regExp = /\(48\)9999-9999/;
var telefone = 'O telefone é:(48)9999-9999, tratar com João.';
console.log(regExp.test(telefone));
console.log(regExp.exec(telefone));

//iniciando a expressão e finalizando com determinado caractere
//^ - inicia com determinado caractere
//$ - finaliza com determinado caractere

var regExp2 = /^32$/;
var idade = 32;
var idadeString = 'Minha idade é de 32 anos.';
console.log(regExp2.test(idade));
console.log(regExp2.test(idadeString));

//utilizando quantificadores
var regExp3 = /ˆ\(\d{2}\)\s\d{5}-?\d{4}$/;
var telefone2 = "(51) 99512-9282";
console.log(regExp3.test(telefone2));