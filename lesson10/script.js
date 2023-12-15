let images = JSON.parse(dataInfo);
let cont = document.querySelector('.container');
console.log(cont);

images.map(function (value) {
    let divEl = document.createElement('div');
    let pEl = document.createElement('p');
    pEl.innerText = value.title;
    divEl.appendChild(pEl);

    let img = document.createElement('img');
    img.id = value.id;
    img.src = value.src;
    img.width = value.width;
    img.height = value.height;
    

    divEl.appendChild(img);
    cont.appendChild(divEl);
    console.log(value);
}); 