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
        checkAllBlock.style.paddingLeft = '29px';
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



//CUSTOMER FORM

const summaryOrderButton = document.querySelector('.summary-order-button');
const customerDetailsFields = document.querySelectorAll('.customer-details-entry');
const customerNameField = document.querySelector('#customer-name');
const customerSurnameField = document.querySelector('#customer-surname');
const customerPhoneField = document.querySelector('#customer-phone');
const customerEmailField = document.querySelector('#customer-email');
const customerInnField = document.querySelector('#customer-inn');
const namesPattern = /^([А-ЯЁ][а-яё]{0,19})$/;
const emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
const phonePattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const onFieldFocusOut = (evt) => {
    const targetField = evt.target;
    const isFieldEmpty = targetField.value === '';
    console.log(targetField.id);
    if (targetField.id === "customer-name" || targetField.id === "customer-surname") {
        if (!isFieldEmpty && !namesPattern.test(targetField.value)) {
            targetField.classList.add('error-field');
            targetField.setCustomValidity('Имя должно начинаться с заглавной буквы и не должно содержать латинских, букв, цифр и знаков препинания');
        } else {
            targetField.classList.remove('error-field');
        }
    }

    if (targetField.id === "customer-email") {
        if (!isFieldEmpty && !emailPattern.test(targetField.value)) {
            targetField.classList.add('error-field');
            targetField.setCustomValidity('Введите верный электронный адрес в формате "name@domain.com"');
        } else {
            targetField.classList.remove('error-field');
        }
    }

    if (targetField.id === "customer-phone") {
        if (!isFieldEmpty && !phonePattern.test(targetField.value)) {
            targetField.classList.add('error-field');
            targetField.setCustomValidity('Введите верный номер телефона в формате "+7 ХХХ ХХХ-ХХ-ХХ"');
        } else {
            targetField.classList.remove('error-field');
        }
    }

    if (targetField.id === "customer-inn") {
        const isInnLength = targetField.value.length === 10 || targetField.value.length === 12;
        if (!isFieldEmpty && !isInnLength) {
            targetField.classList.add('error-field');
            targetField.setCustomValidity('Введите верный номер ИНН - 10 символов для юр.лица или 12 символов для физ.лица');
        } else {
            targetField.classList.remove('error-field');
        }
    }

    targetField.reportValidity();
};

const onFieldInput = (evt) => {
    const targetField = evt.target;

    if (targetField.id === "customer-name" || targetField.id === "customer-surname") {
        if (namesPattern.test(targetField.value)) {
            targetField.classList.remove('error-field');
            targetField.setCustomValidity("");
        } else {
            targetField.setCustomValidity("");
        }
    }

    if (targetField.id === "customer-email") {
        if (emailPattern.test(targetField.value)) {
            targetField.classList.remove('error-field');
            targetField.setCustomValidity("");
        } else {
            targetField.setCustomValidity("");
        }
    }

    if (targetField.id === "customer-phone") {
        if (phonePattern.test(targetField.value)) {
            targetField.classList.remove('error-field');
            targetField.setCustomValidity("");
        } else {
            targetField.setCustomValidity("");
        }
    }


    if (targetField.id === "customer-inn") {
        const isInnLength = targetField.value.length === 10 || targetField.value.length === 12;
        if (isInnLength) {
            targetField.classList.remove('error-field');
            targetField.setCustomValidity("");
        } else {
            targetField.setCustomValidity("");
        }
    }

    targetField.reportValidity();
};

customerNameField.addEventListener('focusout', onFieldFocusOut);
customerNameField.addEventListener('input', onFieldInput);
customerSurnameField.addEventListener('focusout', onFieldFocusOut);
customerSurnameField.addEventListener('input', onFieldInput);
customerEmailField.addEventListener('focusout', onFieldFocusOut);
customerEmailField.addEventListener('input', onFieldInput);
customerPhoneField.addEventListener('focusout', onFieldFocusOut);
customerPhoneField.addEventListener('input', onFieldInput);
customerInnField.addEventListener('focusout', onFieldFocusOut);
customerInnField.addEventListener('input', onFieldInput);

summaryOrderButton.addEventListener('click', () => {
    customerDetailsFields.forEach((field) => {
        if (field.value === '') {
            if (field.id === "customer-name") {
                field.setCustomValidity('Укажите имя');
            } else if (field.id === "customer-surname") {
                field.setCustomValidity('Укажите фамилию')
            } else if (field.id === "customer-email") {
                field.setCustomValidity('Укажите электронную почту')
            } else if (field.id === "customer-phone") {
                field.setCustomValidity('Укажите телефон')
            } else if (field.id === "customer-inn") {
                field.setCustomValidity('Укажите ИНН')
            }
        }

        field.classList.add('error-field');
        field.scrollIntoView()
        field.reportValidity();
    })
});