'use strict';

let
  menuItem = document.getElementsByClassName('menu-item'),
  menu = document.querySelector('.menu'),
  title = document.getElementById('title'),
  adv = document.getElementsByClassName('adv')[0],
  prmpt = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

let li = document.createElement('li');

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

prmpt.textContent = 'q';

let q = prompt('Как вы относитесь к технике Apple');

prmpt.textContent = q;