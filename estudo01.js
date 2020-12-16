//nome do aluno - nota 1 - nota 2 - média - aprovado ou reprovado
const nomes = ["Rodrigo", "Rogério", "Patrícia", "Cláudio"];
const notasA = [8, 9, 10, 6];
const notasB = [9.5, 8.5, 9, 5];
const mediaArray = [];

const media = (n1, n2) => (n1 + n2) / 2;

function passouOuNao(media) {
  if(media >= 7){
    return "Aprovado";
  }else {
    return "Reprovado";
  }
}

for(let index in nomes) {
  console.log(`${nomes[index]}: ${notasA[index]} - ${notasB[index]}, média das notas: ${media(notasA[index],notasB[index])} => ${passouOuNao(notasA[index], notasB[index])}`); 
}

//Objetos construtores
const calcMedia = function() {
  return (this.nota1 + this.nota2) / 2;
}

const turma = [
  {
    nome: "Rodrigo",
    nota1: 10,
    nota2: 8,
    media: calcMedia
  },
  {
    nome: "Rogério",
    nota1: 9,
    nota2: 8.5,
    media: calcMedia
  },
  {
    nome: "Patrícia",
    nota1: 10,
    nota2: 7.5,
    media: calcMedia
  }  
];

function varrerTurma(){
  for(let i = 0; i < turma.length; i++){
    console.log(turma[i].media());
  }
}
varrerTurma();
