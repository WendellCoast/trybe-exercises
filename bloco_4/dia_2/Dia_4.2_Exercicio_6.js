//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpar = 0;

for (var index = 0; index < numbers.length; index += 1) {
   if (numbers[index] % 2 != 0) {
      numerosImpar += 1;
   } 
}

if(numerosImpar === 0) {
   console.log('nenhum valor ímpar encontrado');
} else {
   console.log('numeros ímpar: ' +  numerosImpar);
}