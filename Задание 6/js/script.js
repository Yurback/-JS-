'use strict';

let mainNav = document.getElementsByClassName('menu')[0],
    navs = document.getElementsByClassName('menu-item'),
    newNav = document.createElement('li'),
    title = document.getElementById('title'),
    proDiv =  document.getElementsByClassName('prompt')[0],
    adv = document.querySelector('.adv'),
    nav3 = navs[1],
    nav5 = navs[1].cloneNode(true);

mainNav.replaceChild(navs[2], navs[1]);
mainNav.insertBefore(nav3, navs[2]);

nav5.innerHTML = "Пятый пункт";
mainNav.appendChild(nav5);

document.body.style.background = "url(img/apple_true.jpg) center/cover no-repeat";

title.innerHTML = "Мы продаем только подлинную технику Apple";

adv.remove();

let request = 5;
console.log(request);
//  = prompt("Укажите ваше отношение к технике Apple", "");
if (request) {
proDiv.innerHTML = "Да переменная создана!";
}
/*Ответ на вопрос к 5 заданию
  мы получаем псевдоколлекцию элементов с указанными селекторами согласно правил СSS
*/

