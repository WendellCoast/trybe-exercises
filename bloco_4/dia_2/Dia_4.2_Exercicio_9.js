//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array = [];
let divisao = [];

for (index = 1; index <= 25; index += 1) {
    array.push(index);
}

for (index = 1; index <= 25; index += 1) {
    divisao.push(index / 2);
}

console.log(divisao);