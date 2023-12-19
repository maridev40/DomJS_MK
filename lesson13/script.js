let data = JSON.parse(dataInfo);
let fetured = document.querySelector('.fetured_items');

data.forEach(element => {
    console.log(element);

    let curEls = document.querySelector('.fetured_item_for_clone').cloneNode(true);
    curEls.classList.add('item');
    curEls.classList.remove('fetured_item_for_clone');
    curEls.querySelector('.img').src = element.src;
    curEls.querySelector('.title').innerText = element.title;
    curEls.querySelector('.text').innerText = element.text;
    curEls.querySelector('.price').innerText = element.price;
    btnEl = curEls.querySelector('.add_to_cart');

    fetured.appendChild(curEls);

    btnEl.addEventListener('click', function (e) {
        let cartEls = document.querySelector('.cart_items');
        cartEls.style.display = "block";

        let cartItmEls = document.querySelector('.cart_item_for_clone').cloneNode(true);
        cartItmEls.classList.add('item');
        cartItmEls.classList.remove('cart_item_for_clone');
        cartItmEls.querySelector('.img').src = element.src;
        cartItmEls.querySelector('.title').innerText = element.title;
        cartItmEls.querySelector('.text').innerText = element.text;
        cartItmEls.querySelector('.price').innerText = element.price;
        let btnDelEl = cartItmEls.querySelector('.delete_from_cart');

        cartEls.appendChild(cartItmEls);

        btnDelEl.addEventListener('click', function (e) {
            cartEls.removeChild(cartItmEls);

            if (cartEls.querySelectorAll('.item').length === 0) {
                cartEls.style.display = "none";
            };
        });

    });

});