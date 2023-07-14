;(function () {
    const mainActionButton = document.getElementById('main-action-button');
    mainActionButton.onclick = function () {
        const products = document.getElementById('products');
        products.scrollIntoView({behavior: "smooth"});
    }

})();

;(function () {
    const links = document.querySelectorAll('.menu-item > a');
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: "smooth"});
        }
    }
})();

;(function () {
    const buttons = document.getElementsByClassName('products-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            document.getElementById('order').scrollIntoView({behavior: "smooth"});
        }
    }
})();

;(function () {

    const burger = document.getElementById('burger');
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const orderAction = document.getElementById('order-action');

    orderAction.onclick = function () {
        let hasError = false;
        [burger, name, phone].forEach(item => {
            if (!item.value) {
                item.parentElement.style.background = 'red';
                hasError = true;
            } else {
                item.parentElement.style.background = '';
            }
        });

        if (!hasError) {
            [burger, name, phone].forEach(item => {
                item.value = '';
            });
            alert('Спасибо за заказ Мы скоро свяжемся с Вами');
        }
    }
})();

;(function () {

    let prices = document.getElementsByClassName('products-item-price');
    document.getElementById('change-currency').onclick = function (e) {
        let currentCurrency = e.target.innerText;
        let newCurrency = '$';
        let coefficient = 1;
        if (currentCurrency === '$') {
            newCurrency = '₽';
            coefficient = 80;
        } else if (currentCurrency === '₽') {
            newCurrency = 'BYN';
            coefficient = 3;
        } else if (currentCurrency === 'BYN') {
            newCurrency = '€';
            coefficient = 0.9;
        } else if (currentCurrency === '€') {
            newCurrency = '¥';
            coefficient = 6.9;
        }

        e.target.innerText = newCurrency;

        for (let i = 0; i < prices.length; i++) {
            prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
        }
    }
})();