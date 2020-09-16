var primeiroItem = document.getElementById('one'); //pegando o primeiro item
primeiroItem.className = 'complete';               //alterando a classe

var quartoItem = document.getElementsByTagName('li').item(3);//pegando o quarto item
quartoItem.setAttribute('class', 'cool');                           //adicionando um atributo a ele

//removendo o atributo classe do primeiro item
if(primeiroItem.hasAttribute('class')){
    primeiroItem.removeAttribute('class');
}