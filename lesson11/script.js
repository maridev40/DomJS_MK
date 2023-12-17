let data = JSON.parse(dataInfo);
let container = document.querySelector('.container');
let itemEls = document.createElement('div');
itemEls.classList.add('fetured_items');
container.appendChild(itemEls);
console.log(container);

data.forEach(element => {
    console.log(element);
    
    let curEls = document.querySelector('.item').cloneNode(true);
    curEls.querySelector('.img').src = element.src;
    curEls.querySelector('.title').innerText = element.title;
    curEls.querySelector('.text').innerText = element.text;
    curEls.querySelector('.price').innerText = element.price;
    
    container.appendChild(curEls);
});