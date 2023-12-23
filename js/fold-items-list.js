// Свернуть списки товаров

const foldAllButtonPresented = document.querySelector('.fold-all-button--presented');
const foldAllImagePresented = document.querySelector('.fold-all-image--presented');
const cartItemsPresented = document.querySelector('.cart-items--presented');
const foldAllButtonMissing = document.querySelector('.fold-all-button--missing');
const foldAllImageMissing = document.querySelector('.fold-all-image--missing');
const cartItemsMissing = document.querySelector('.missing-items')
const presentedItemsSummary = document.querySelector('.presented-items-summary-block');
const checkAllBlockCheckbox = document.querySelector('.check-all-block-checkbox');
const checkAllBlock = document.querySelector('.check-all-block');
const itemsListsSeparator = document.querySelector('.items-lists-separator');

foldAllButtonPresented.addEventListener('click', () => {
    cartItemsPresented.classList.toggle('visually-hidden');
    console.log(cartItemsPresented);
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
    console.log(cartItemsMissing);
    cartItemsMissing.classList.toggle('visually-hidden');
    foldAllImageMissing.classList.toggle('rotated-image');
});
