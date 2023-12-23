//Форма с данными пользователя

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
const customerDetailsLabelName = document.querySelector('.customer-details-label--name');
const customerDetailsLabelSurname = document.querySelector('.customer-details-label--surname');
const customerDetailsLabelEmail = document.querySelector('.customer-details-label--email');
const customerDetailsLabelPhone = document.querySelector('.customer-details-label--phone');
const customerDetailsLabelInn = document.querySelector('.customer-details-label--inn');

const customerDetailsEntryName = document.querySelector('.customer-details-entry--name');
const customerDetailsEntrySurame = document.querySelector('.customer-details-entry--surname');
const customerDetailsEntryEmail = document.querySelector('.customer-details-entry--email');
const customerDetailsEntryPhone = document.querySelector('.customer-details-entry--phone');
const customerDetailsEntryInn = document.querySelector('.customer-details-entry--inn');

const onFieldFocusOut = (evt) => {
    const targetField = evt.target;
    const isFieldEmpty = targetField.value === '';
    console.log(targetField.id);
    if (targetField.id === "customer-name") {
        if (!isFieldEmpty && !namesPattern.test(targetField.value)) {
            targetField.classList.add('error-field');
            targetField.setCustomValidity('Имя должно начинаться с заглавной буквы и не должно содержать латинских букв, цифр и знаков препинания');
            customerDetailsLabelName.style.display = 'block';
            customerDetailsEntryName.classList.remove('correct-detail');
            customerDetailsEntryName.classList.add('error-detail');
        } else {
            targetField.classList.remove('error-field');
            customerDetailsLabelName.style.display = 'none';
            customerDetailsEntryName.classList.remove('error-detail');
            customerDetailsEntryName.classList.add('correct-detail');
        }
    }

    if (targetField.id === "customer-surname") {
        if (!isFieldEmpty && !namesPattern.test(targetField.value)) {
            targetField.classList.add('error-field');
            targetField.setCustomValidity('Фамилия должна начинаться с заглавной буквы и не должна содержать латинских букв, цифр и знаков препинания');
            customerDetailsLabelSurname.style.display = 'block'
            customerDetailsEntrySurame.classList.add('error-detail');
            customerDetailsEntrySurame.classList.remove('correct-detail');
        } else {
            targetField.classList.remove('error-field');
            customerDetailsLabelSurname.style.display = 'none';
            customerDetailsEntrySurame.classList.remove('error-detail');
            customerDetailsEntrySurame.classList.add('correct-detail');
        }
    }

    if (targetField.id === "customer-email") {
        if (!isFieldEmpty && !emailPattern.test(targetField.value)) {
            targetField.classList.add('error-field');
            targetField.setCustomValidity('Введите верный электронный адрес в формате "name@domain.com"');
            customerDetailsLabelEmail.style.display = 'block'
            customerDetailsEntryEmail.classList.add('error-detail');
            customerDetailsEntryEmail.classList.remove('correct-detail');
        } else {
            targetField.classList.remove('error-field');
            customerDetailsLabelEmail.style.display = 'none'
            customerDetailsEntryEmail.classList.remove('error-detail');
            customerDetailsEntryEmail.classList.add('correct-detail');
        }
    }

    if (targetField.id === "customer-phone") {
        if (!isFieldEmpty && !phonePattern.test(targetField.value)) {
            targetField.classList.add('error-field');
            targetField.setCustomValidity('Введите верный номер телефона в формате "+7 ХХХ ХХХ-ХХ-ХХ"');
            customerDetailsEntryPhone.classList.add('error-detail');
            customerDetailsEntryPhone.classList.remove('correct-detail');
        } else {
            targetField.classList.remove('error-field');
            customerDetailsEntryPhone.classList.remove('error-detail');
            customerDetailsEntryPhone.classList.add('correct-detail');
        }
    }

    if (targetField.id === "customer-inn") {
        const isInnLength = targetField.value.length === 10 || targetField.value.length === 12;
        if (!isFieldEmpty && !isInnLength) {
            targetField.classList.add('error-field');
            targetField.setCustomValidity('Введите верный номер ИНН - 10 символов для юр.лица или 12 символов для физ.лица');
            customerDetailsEntryInn.classList.add('error-detail');
            customerDetailsEntryInn.classList.remove('correct-detail');
        } else {
            targetField.classList.remove('error-field');
            customerDetailsEntryInn.classList.remove('error-detail');
            customerDetailsEntryInn.classList.add('correct-detail');
        }
    }

    targetField.reportValidity();
};

const onFieldInput = (evt) => {
    const targetField = evt.target;

    if (targetField.id === "customer-name") {
        if (namesPattern.test(targetField.value)) {
            targetField.classList.remove('error-field');
            targetField.setCustomValidity("");
            customerDetailsLabelName.style.display = 'none';
            customerDetailsEntryName.classList.add('correct-detail');
            customerDetailsEntryName.classList.remove('error-detail');
        } else {
            targetField.setCustomValidity("");
        }
    }

    if (targetField.id === "customer-surname") {
        if (namesPattern.test(targetField.value)) {
            targetField.classList.remove('error-field');
            targetField.setCustomValidity("");
            customerDetailsLabelSurname.style.display = 'none';
            customerDetailsEntrySurame.classList.remove('error-detail');
            customerDetailsEntrySurame.classList.add('correct-detail');
        } else {
            targetField.setCustomValidity("");
        }
    }

    if (targetField.id === "customer-email") {
        if (emailPattern.test(targetField.value)) {
            targetField.classList.remove('error-field');
            targetField.setCustomValidity("");
            customerDetailsLabelEmail.style.display = 'none';
            customerDetailsEntryEmail.classList.remove('error-detail');
            customerDetailsEntryEmail.classList.add('correct-detail');
        } else {
            targetField.setCustomValidity("");
        }
    }

    if (targetField.id === "customer-phone") {
        if (phonePattern.test(targetField.value)) {
            targetField.classList.remove('error-field');
            targetField.setCustomValidity("");
            customerDetailsLabelPhone.textContent = 'Телефон';
            customerDetailsLabelPhone.style.color = '#9797AF';
            customerDetailsLabelPhone.style.top = '-120%';
            customerDetailsEntryPhone.classList.remove('error-detail');
            customerDetailsEntryPhone.classList.add('correct-detail');
        } else {
            targetField.setCustomValidity("");
        }
    }


    if (targetField.id === "customer-inn") {
        const isInnLength = targetField.value.length === 10 || targetField.value.length === 12;
        if (isInnLength) {
            targetField.classList.remove('error-field');
            targetField.setCustomValidity("");
            customerDetailsLabelInn.textContent = 'Для таможенного оформления';
            customerDetailsLabelInn.style.color = '#9797AF';
            customerDetailsEntryInn.classList.remove('error-detail');
            customerDetailsEntryInn.classList.add('correct-detail');
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
            field.classList.add('error-field');
            field.scrollIntoView();

            if (field.id === "customer-name") {
                customerDetailsLabelName.style.display = 'block';
                customerDetailsEntryName.classList.remove('correct-detail');
                customerDetailsEntryName.classList.add('error-detail');
            } else if (field.id === "customer-surname") {
                customerDetailsLabelSurname.style.display = 'block';
                customerDetailsEntrySurame.classList.remove('correct-detail');
                customerDetailsEntrySurame.classList.add('error-detail');
            } else if (field.id === "customer-email") {
                customerDetailsLabelEmail.style.display = 'block';
                customerDetailsEntryEmail.classList.remove('correct-detail');
                customerDetailsEntryEmail.classList.add('error-detail');
            } else if (field.id === "customer-phone") {
                customerDetailsLabelPhone.textContent = 'Укажите телефон';
                customerDetailsLabelPhone.style.top = '24px';
                customerDetailsLabelPhone.style.color = '#F55123';
                customerDetailsEntryPhone.classList.remove('correct-detail');
                customerDetailsEntryPhone.classList.add('error-detail');
            } else if (field.id === "customer-inn") {
                customerDetailsLabelInn.textContent = 'Укажите ИНН';
                customerDetailsLabelInn.style.color = '#F55123';
                customerDetailsEntryInn.classList.remove('correct-detail');
                customerDetailsEntryInn.classList.add('error-detail');
            }
        } else {
            if (field.id === "customer-phone") {
                customerDetailsLabelPhone.textContent = 'Телефон';
                customerDetailsLabelPhone.style.top = '-120%';
                customerDetailsLabelPhone.style.color = '#9797AF';
                customerDetailsEntryPhone.classList.add('correct-detail');
                customerDetailsEntryPhone.classList.remove('error-detail');
            } else if (field.id === "customer-inn") {
                customerDetailsLabelInn.textContent = 'Для таможенного оформления';
                customerDetailsLabelInn.style.color = '#9797AF';
                customerDetailsEntryInn.classList.add('correct-detail');
                customerDetailsEntryInn.classList.remove('error-detail');
            }
        }
    })
});
