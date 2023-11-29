"use strict";


// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownItemEl = document.querySelectorAll('.dropdown-item');
dropdownItemEl.forEach(element => {
    element.classList.add('super-dropdown');
    console.log(element);
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btnEl = document.querySelector('.btn');
const btnSecEl = document.querySelector('.btn-secondary');
if (btnEl === btnSecEl) {
    btnEl.classList.remove('btn-secondary');
} else {
    btnEl.classList.add('btn-secondary');
}
console.log(btnEl);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menuEl = document.querySelector('.menu');
const dropdownMenuEl = document.querySelector('.dropdown-menu');
if (menuEl === dropdownMenuEl) {
    menuEl.classList.remove('dropdown-menu');
}
console.log(menuEl);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const divDropDown = document.querySelector('div.dropdown');
const divA = document.createElement('a');
divA.setAttribute('href', '#');
divA.innerHTML = "link";
divDropDown.prepend(divA);
console.log(divDropDown);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const btnID = document.getElementById('dropdownMenuButton');
btnID.setAttribute('id', 'superDropdown');
console.log(btnID);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const ariaLab = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
ariaLab.dataset.dd = 3;
console.log(ariaLab);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const btnDropDown = document.querySelector('.dropdown-toggle');
btnDropDown.removeAttribute('type');
console.log(btnDropDown);