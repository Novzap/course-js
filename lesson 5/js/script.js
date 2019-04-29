// Восстановить порядок в меню, добавить пятый пункт
let menu =  document.querySelector('.menu');
let menuItem =  document.querySelectorAll('.menu .menu-item')[1];
let menuItem2 =  document.querySelectorAll('.menu .menu-item')[3];
let newItem = document.createElement('li');
newItem.classList.add('menu-item');
newItem.textContent = 'Пятый пункт';
menu.removeChild(menuItem);
menu.insertBefore(menuItem, menuItem2);
menu.appendChild(newItem);

// Заменить картинку заднего фона на другую из папки img

let bg = document.querySelector('body');
bg.style.backgroundImage = 'url("img/apple_true.jpg")';

// Поменять заголовок

let title = document.querySelector('.title');
title.innerText = 'Мы продаём только подлинную технику Apple';

// Удалить рекламу

document.querySelector('.adv').remove();

// Спросить отношение к технике

let answerUser = prompt("Ваше отношение к технике Apple? ", "");
let answer = document.querySelector('#prompt');
let p = document.createElement('p');
p.textContent = answerUser;
answer.appendChild(p);
