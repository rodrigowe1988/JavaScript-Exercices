for(let i = 0; i < 3; i++) {
  console.log(1)
};

//função para calcular calorias exponencialmente
function caloriasDeTrote(numeroDeVoltas) {
  let totalDeCalorias = 0;
  let calorias = 5;
  
  for(let i = 0; i <= numeroDeVoltas; i++) {
    totalDeCalorias += calorias * i;
  }
  console.log(totalDeCalorias);
}

caloriasDeTrote(3);

//manipulação de arrays 
let carros = ["palio", "gol", "celta"];
console.log(carros.length);
console.log(carros.indexOf("palio"));
const carroRetirado = carros.pop();
console.log(carroRetirado);
carros.push("fusca");
console.log(carros);
//devolvendo o último elemento do array
console.log(carros[carros.length -1]);
//alterando um dos elementos do array
carros[1] = "uno";
console.log(carros);
//atribuir elementos do array a variáveis
let numbers = [1, 2, 3, 4, 5];
let a = numbers[0];
let b = numbers[1];
let c = numbers[2];
console.log(a, b, c)


//trabalhando com propriedades e métodos de objetos
let myObject1 = {
  length: 15,
  color: 'yellow',
  write: function(something) {
    console.log(something);
  }
}
myObject1.write("Meu nome é Rodrigo");
myObject1.color = "blue";
myObject1.number = 6;
console.log(myObject1);

let myObject2 = {
  d: 5, 
  e: 6, 
  f: 7
}
let d = myObject2.d;
let e = myObject2.e;
let f = myObject2.f;
console.log(d, e, f);

//Operador Spread(...)
const sum = (n1, n2) => n1 + n2;
let myArray1 = [5, 17, 20, 33];
console.log(sum(myArray1[0], myArray1[1]));
//ou
console.log(sum(...myArray1));
//concatenando dois arrays
let myArray2 = [35, 40, 45];
//cria um array com os dois arrays em seu interior
let myArray3 = [myArray1, myArray2];
console.log(myArray3);
console.log(myArray3[1][2]);
//cria um novo array com os elementos 
let myArray4 = [...myArray1, ...myArray2];
console.log(myArray4)