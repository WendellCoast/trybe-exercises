//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 1, 35, 27];
let maiorNumero = numbers[0];

for (var index = 0; index < numbers.length; index++) {
   if (numbers[index] < maiorNumero) {
      maiorNumero = numbers[index];
   }
}

console.log(maiorNumero)