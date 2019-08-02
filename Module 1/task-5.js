'use strick';

const china = Number(100);
const chile = Number(250)
const australia = Number(170);
const india = Number(80);
const jamaica = Number(120);;
let country = prompt ('Введите страну, куда нужно доставить товар');
let citys = country.toLowerCase();

switch (citys) {
    case 'china':
        console.log('Стоимость доставки в China будет стоить' , china , 'кредитов');
        break;
    case 'chile':
        console.log('Стоимость доставки в Chile будет стоить' , chile , 'кредитов');
        break;
    case 'australia':
        console.log('Стоимость доставки в Australia будет стоить' , australia , 'кредитов');
        break;
    case 'india':
        console.log('Стоимость доставки в India будет стоить' , india , 'кредитов');
        break;
    case 'jamaica':
        console.log('Стоимость доставки в Jamaica будет стоить' , jamaica , 'кредитов');
        break;
    default:
        alert('В вашей стране доставка не доступна');
        break;
}