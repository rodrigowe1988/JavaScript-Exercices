//Criando um novo elemento e salvando em uma variável
var newEl = document.createElement('li');


//criando um texto e salvando-o em uma variável
var newText = document.createTextNode('coconut oil');

//"acoplando" esse texto ao novo elemento criado acima
newEl.appendChild(newText);

//setando a posição que o novo elemento deve ficar posicionado na página
var position = document.getElementsByTagName('ul')[0];

position.appendChild(newEl);
