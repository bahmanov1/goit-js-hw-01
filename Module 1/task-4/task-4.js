'use strick';

let credits = Number(23580);
let pricePerDroid = Number(3000);
let totalPrice; 
let message = prompt('Какое количество дроидов Вы хотите купить?');


    if (message === null) {
    console.log('Отменено пользователем');
}   else if (totalPrice = ((pricePerDroid * message) >= credits )) {
    console.log('Недостаточно средств на счету!')
}   else if (totalPrice = pricePerDroid * message) { 
    console.log('Вы купили', totalPrice , 'дроидов, на счету осталось', credits - totalPrice , 'кредитов');
}