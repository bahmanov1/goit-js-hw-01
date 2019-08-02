'use strick';

const ADMIN_PASSWORD = '12345';
let messege = prompt ('Введите пароль');


if (messege == null) {
    messege = console.log('Отменено пользователем')
} else if (messege === ADMIN_PASSWORD) {
    messege = console.log('Добро пожаловать!')
} else if (messege != ADMIN_PASSWORD) 
    messege = console.log('Доступ запрещен, неверный пароль!');






