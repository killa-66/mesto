const cardPhoto = document.querySelector('.popup_shadow'),
popupPhotoCard = document.getElementById('popupPhotoCard'),
poupCardImage = cardPhoto.querySelector('.popup__image'),
poupCardName = cardPhoto.querySelector('.popup__name');


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handlerClosePopupByEsc);
    document.addEventListener('mousedown', handlerClosePopupByClick);
}

// Функция закрытия попап'а данных профиля
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handlerClosePopupByEsc);
    document.removeEventListener('mousedown', handlerClosePopupByClick);
}

// Функция открытия попапа и передача значений в него 
function openPhotoPopup(cardName, cardImg) {
    poupCardImage.src = cardImg;
    poupCardName.textContent = cardName;
    poupCardImage.alt = cardName;
}

// Функция закрытия попапов на клавишу Esc
function handlerClosePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup)
    }
};


// Функция закрытия попапов по клику оверлей
function handlerClosePopupByClick(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
};

export { openPopup, closePopup, openPhotoPopup }