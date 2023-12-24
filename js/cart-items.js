const cartItems = [
  {
    size: 56,
    photoSrc: 'images/photo-01.jpg',
    photoLargeSrc: 'images/photo-01@2x.jpg 2x',
    photoDescription: 'Фото моделей в белых футболках',
    priceWhole: '1051',
    discount: 55,
    priceDiscount: '522',
    title: 'Футболка UZcotton мужская',
    color: 'белый',
    storage: 'Коледино WB',
    seller: {
      sellerName: 'Вайлдберриз',
      ogrn: 1067746062449,
      address: '142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1'
    },
    remainingAmount: 2,
  },
  {
    size: '',
    photoSrc: 'images/photo-02.jpg',
    photoLargeSrc: 'images/photo-02@2x.jpg 2x',
    photoDescription: 'Фото телефона в прозрачном чехле',
    priceWhole: '2 300 047',
    discount: 55,
    priceDiscount: '2 100 047',
    title: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
    color: 'прозрачный',
    storage: 'Коледино WB',
    seller: {
      sellerName: 'Мегапрофстиль',
      ogrn: 5167746237148,
      address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
    },
    remainingAmount: '',
  },
  {
    size: '',
    photoSrc: 'images/photo-03.jpg',
    photoLargeSrc: 'images/photo-03@2x.jpg 2x',
    photoDescription: 'Фото упаковки разноцветных карандашей',
    priceWhole: '950',
    discount: 55,
    priceDiscount: '494',
    title: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    color: '',
    storage: 'Коледино WB',
    seller: {
      sellerName: 'Вайлдберриз',
      ogrn: 1067746062449,
      address: '142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1'
    },
    remainingAmount: 2,
  },
];

const renderCartItems = () => {
  cartItems.forEach((item) => {
    const { size, photoSrc, photoLargeSrc, photoDescription, priceDiscount, priceWhole, discount, title, color, storage, seller: { sellerName, ogrn, address }, remainingAmount } = item;
    document.querySelector(".cart-items-list").insertAdjacentHTML(
      "beforeend",
      `<li>
                <div class="item-card">
                  <div class="item-info">
                    <div class="item-photo-block">
                      <label class="item-photo-block-label">
                        <input type="checkbox" class="item-photo-checkbox visually-hidden" />
                      </label>
                      ${size ? `<span class="item-size-beige">${size}</span>` : ''}
                      <picture>
                        <img
                          class="item-photo"
                          src=${photoSrc}
                          srcset=${photoLargeSrc}
                          width="80"
                          alt=${photoDescription}
                        />
                      </picture>
                    </div>
                    <div>
                      <div class="item-price-block">
                        <p class="item-price">${priceDiscount} сом</p>
                        <p class="item-price discount">${priceWhole} сом</p>
                        <div class="item-price-discount-summary">
                          <div class="item-price-discount-block">
                            <p class="item-price-discount-name">Скидка ${discount}%</p>
                            <p class="item-price-discount-amount">- 300 сом</p>
                          </div>
                          <div class="item-price-discount-block">
                            <p class="item-price-discount-name">Скидка покупателя 10%</p>
                            <p class="item-price-discount-amount">- 30 сом</p>
                          </div>
                        </div>
                      </div>
                      <div class="item-description-block">
                        <p class="item-title">${title}</p>
                        ${color ?
        `
                        <div class="item-color-size-block">
                            <p class="item-color">Цвет: ${color}</p>
                            ${size ? `<p class="item-size">Размер: ${size}</p>` : ''}
                        </div>
                        ` : ''}
                        <p class="item-storage">${storage}</p>
                        <div class="item-seller-block">
                          <p class="item-seller">ООО ${sellerName}</p>
                          <img src="images/icon-details.svg" class="seller-details-icon" />
                          <div class="seller-details-block">
                            <h3>OOO «${sellerName}»</h3>
                            <p>ОГРН: ${ogrn}</p>
                            <p>${address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-buttons-block">
                    <div class="item-quantity">
                      <button type="button" class="decrease-button"></button>
                      <p class="item-amount">1</p>
                      <button type="button" class="increase-button"></button>
                    </div>
                    ${remainingAmount ? `<p class="item-remaining">Осталось ${remainingAmount} шт.</p>` : ''}
                    <div class="item-misc-buttons">
                      <button class="item-button-favorite"></button>
                      <button class="item-button-delete"></button>
                    </div>
                  </div>
                </div>
              </li>
      `
    );
  });
};

const renderMissingItems = () => {
  cartItems.forEach((item) => {
    const { size, photoSrc, photoLargeSrc, photoDescription, title, color } = item;
    document.querySelector(".cart-items--missing").insertAdjacentHTML(
      "beforeend",
      `
      <li class="item item-missed">
      <div class="item-photo-block item-photo-block-missed">
        <picture>
          <img
            class="item-photo"
            src=${photoSrc}
            srcset=${photoLargeSrc}
            width="80"
            alt=${photoDescription}
          />
        </picture>
        ${size ? `<span class="item-size-beige">${size}</span>` : ''}
      </div>
      <div class="item-description-block item-description-block--missed">
        <p class="item-title item-title--missing">${title}</p>
        ${color ?
        `
        <div class="item-color-size-block">
            <p class="item-color">Цвет: ${color}</p>
            ${size ? `<p class="item-size">Размер: ${size}</p>` : ''}
        </div>
        ` : ''}
      </div>
      <div class="item-buttons-block item-buttons-block--missing">
        <div class="item-misc-buttons item-misc-buttons--missing">
          <button class="item-button-favorite item-button-favorite--missing"></button>
          <button class="item-button-delete item-button-delete--missing"></button>
        </div>
      </div>
    </li>
    `
    );
  });
};

export { renderCartItems, renderMissingItems };
