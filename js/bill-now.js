// Свернуть списки товаров

const billNowCheckbox = document.querySelector('.bill-now-button');
let orderButtonText = document.querySelector('.summary-order-button');
const summaryCostAmount = document.querySelector('.summary-cost-amount');

billNowCheckbox.addEventListener('change', () => {
    if (billNowCheckbox.checked) {
        orderButtonText.textContent = `Оплатить ${summaryCostAmount.textContent}`;
    } else {
        orderButtonText.textContent = 'Заказать';
    }
});
