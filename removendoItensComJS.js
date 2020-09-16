//salvando na variável o elemento a ser removido
var removeEl = document.getElementsByTagName('li')[3];

//o conteúdo do elemento que será removido
var containerEl = removeEl.parentNode;

//removendo o elemento(finalmente)
containerEl.removeChild(removeEl);