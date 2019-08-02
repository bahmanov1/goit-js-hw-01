'use strick'


let input;
let total = 0;

    while (true){
        let input = prompt ('Введите число: ');
        if (!input) break;
        total += input++;
    }
    alert ('Общая сумма чисел равна ' + total);
