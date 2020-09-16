//adicionando itens ao início e ao fim da lista
var list = document.getElementsByTagName('ul')[0]; //salvando o elemento <ul> dentro da variável

//adicionando novos itens ao final da lista
var newItemLast = document.createElement('li');    //criando um elemento
var newTextLast = document.createTextNode('açaí'); //criando texto do elemento
newItemLast.appendChild(newTextLast);              //adicionado o texto ao elemento criado
list.appendChild(newItemLast);                     //adiconando o elemento ao fim da lista

var segundoItem = document.getElementById('three');

//adicionando novo item no início da lista
var newItemFirst = document.createElement('li');   //criando elemento
var newTextFirst = document.createTextNode('pasta de amendoim'); //criando texto para o elemento
newItemFirst.appendChild(newTextFirst);            //adicionando o texto criado ao elemento
list.insertBefore(newItemFirst, list.firstChild);  //adicionando elementos à lista

var listItems = document.querySelectorAll('li');   //selecionando todos os elementos <li>

//adicionando uma classe 'cool' para todos os itens da lista
var i;
for(i = 0; i < listItems.length; i++){
    listItems[i].className = 'cool';
}

//adicionando o número de itens no cabeçalho
var heading = document.querySelector('h2');        
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading =  headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;