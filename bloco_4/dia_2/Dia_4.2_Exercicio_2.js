//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaDosNumeros = 0;

for(index = 0; index < numbers.length; index++) {
    somaDosNumeros = somaDosNumeros + numbers[index];
}

console.log(somaDosNumeros);