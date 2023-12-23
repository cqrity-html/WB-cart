// Модальные окна

const changeDeliveryButtons = document.querySelectorAll('.change-delivery-button');
const deliveryModal = document.querySelector('.delivery-modal-overlay');
const closeDeliveryModalButton = document.querySelector('.close-delivery-modal');

function openDeliveryModal(evt) {
    evt.preventDefault();
    deliveryModal.classList.remove('visually-hidden');
    closeDeliveryModalButton.addEventListener('click', () => {
        evt.preventDefault();
        deliveryModal.classList.add('visually-hidden');
    });

    window.addEventListener('keydown', (evt) => {
        if (evt.key === 'Esc' || evt.key === 'Escape') {
            evt.preventDefault();
            deliveryModal.classList.add('visually-hidden');
        }
    });
}

changeDeliveryButtons.forEach((button) => button.addEventListener('click', openDeliveryModal));

const changePaymentButtons = document.querySelectorAll('.change-payment-button');
const paymentModal = document.querySelector('.payment-modal-overlay');
const closePaymentModalButton = document.querySelector('.close-payment-modal');

function openPaymentModal(evt) {
    evt.preventDefault();
    paymentModal.classList.remove('visually-hidden');
    closePaymentModalButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        paymentModal.classList.add('visually-hidden');
    });

    window.addEventListener('keydown', (evt) => {
        if (evt.key === 'Esc' || evt.key === 'Escape') {
            evt.preventDefault();
            paymentModal.classList.add('visually-hidden');
        }
    });
}

changePaymentButtons.forEach((button) => button.addEventListener('click', openPaymentModal));

const deliveryModalButtons = document.querySelectorAll('.delivery-modal-button');
const modalLists = document.querySelectorAll('.modal-list');

deliveryModalButtons.forEach((button) => button.addEventListener('click', (evt) => {
    evt.preventDefault();
    deliveryModalButtons.forEach((button) => button.classList.remove('button--active'));
    evt.target.classList.add('button--active');
    modalLists.forEach((list) => list.classList.toggle('visually-hidden'));
}));
