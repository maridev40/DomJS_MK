"use strict";


//1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const super_linkEl = document.getElementById('super_link');
console.log(super_linkEl);

//2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const card_linkEl = document.getElementsByClassName('card-link');
for (let index = 0; index < card_linkEl.length; index++) {
    card_linkEl[index].innerHTML = 'ссылка';
}

//3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const card_bodyEl = document.getElementsByClassName('card-body');
console.log(card_bodyEl[0].getElementsByClassName('card-link'));

//4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
 const attrEl = document.querySelector('[data-number="50"]');
 console.log(attrEl);

//5. Выведите содержимое тега title в консоль.
const titlEl = document.getElementsByTagName('title');
console.log(titlEl[0].textContent);

//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const card_titleEl = document.getElementsByClassName('card-title');
console.log(card_titleEl[0].parentNode);

//7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const paragraphEl = document.createElement('p')
paragraphEl.textContent = 'Привет';
const cardEl = document.getElementsByClassName('card');
cardEl[0].prepend(paragraphEl);

//8. Удалите тег h6 на странице.
const h6El = document.getElementsByTagName('h6');
h6El[0].remove();