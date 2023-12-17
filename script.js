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


const foldAllButtonPresented = document.querySelector('.fold-all-button--presented');
const foldAllImagePresented = document.querySelector('.fold-all-image--presented');
const cartItemsPresented = document.querySelector('.cart-items--presented');
const foldAllButtonMissing = document.querySelector('.fold-all-button--missing');
const foldAllImageMissing = document.querySelector('.fold-all-image--missing');
const cartItemsMissing = document.querySelector('.cart-items--missing')
const presentedItemsSummary = document.querySelector('.presented-items-summary-block');
const checkAllBlockCheckbox = document.querySelector('.check-all-block-checkbox');
const checkAllBlock = document.querySelector('.check-all-block');
const itemsListsSeparator = document.querySelector('.items-lists-separator');

foldAllButtonPresented.addEventListener('click', () => {
    cartItemsPresented.classList.toggle('visually-hidden');
    foldAllImagePresented.classList.toggle('rotated-image');
    presentedItemsSummary.classList.toggle('visually-hidden');
    checkAllBlockCheckbox.classList.toggle('visually-hidden');
    if (checkAllBlockCheckbox.classList.contains('visually-hidden')) {
        checkAllBlock.style.paddingLeft = 0;
        itemsListsSeparator.style.display = 'block';
    } else {
        checkAllBlock.style.paddingLeft = '33px';
        itemsListsSeparator.style.display = 'none';
    }
});

foldAllButtonMissing.addEventListener('click', () => {
    cartItemsMissing.classList.toggle('visually-hidden');
    foldAllImageMissing.classList.toggle('rotated-image');
});

const changeDeliveryButtons = document.querySelectorAll('.change-delivery-button');
const deliveryModal = document.querySelector('.delivery-modal');
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
            // closeDeliveryModalButton.removeEventListener('click', () => {
            //     deliveryModal.classList.add('visually-hidden');
            // });
        }
    });
}

changeDeliveryButtons.forEach((button) => button.addEventListener('click', openDeliveryModal));

const changePaymentButtons = document.querySelectorAll('.change-payment-button');
const paymentModal = document.querySelector('.payment-modal');
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
            // closePaymentModalButton.removeEventListener('click', () => {
            //     paymentModal.classList.add('visually-hidden');
            // });
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
