import { initialCards } from './constants.js';
import { Card } from './Card.js'
import { closePopup, openPopup, openPhotoPopup } from './utils.js'
import {  FormValidator, validationConfig } from './FormValidator.js'

const profile = document.querySelector('.profile'),

    popupEditProfile = document.getElementById('popupEditProfile'),
    popupName = document.getElementById('name'),
    popupProfession = document.getElementById('job'),
    buttonOpenEditProfilePopup = profile.querySelector('.profile__open'),

    popupAddCard = document.getElementById('popupAddCard'),
    popupNameCard = document.getElementById('nameCard'),
    popupImageCard = document.getElementById('imageCard'),
    buttonOpenPopupAddCard = document.querySelector('.profile__add'),
    popupSubmitCard = popupAddCard.querySelector('.form'),

    gridSection = document.querySelector('.grid'),


    cardPhoto = document.querySelector('.popup_shadow'),
    popupPhotoCard = document.getElementById('popupPhotoCard'),
    popupButtonClosePhoto = popupPhotoCard.querySelector('.popup__close'),

    profileName = profile.querySelector('.profile__name'),
    profileProfession = profile.querySelector('.profile__profession'),
    formEditProfile = popupEditProfile.querySelector('.form'),
    buttonCloseEditProfilePopup = popupEditProfile.querySelector('.popup__close'),
    buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close');

const validatorEditProfile = new FormValidator(validationConfig, formEditProfile);
const validatorAddCard = new FormValidator(validationConfig, popupSubmitCard);

function createCard(data, cardSelector) {
    const card = new Card(data, cardSelector);
    validatorAddCard.blockButtonOpened();
    return card.generateCard();
  }
// Инициализация карточек
function renderElements() {
    initialCards.forEach((item) => { 
      const cardElement = createCard(item, '#grid-template'); 
      gridSection.append(cardElement); 
    }); 
  } 

// Сохранение данных из заполненного попап'а профиля
function submitFormProfile(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileProfession.textContent = popupProfession.value;
    closePopup(popupEditProfile);
}

// Сохранение данных из попапа создания новой карточки
function submitNewCard(evt) {
    evt.preventDefault();
    const dataAdd = {
        name: popupNameCard.value,
        link: popupImageCard.value
    }
    gridSection.prepend(createCard(dataAdd, '#grid-template'));
    closePopup(popupAddCard);
    popupSubmitCard.reset();
}

// Слушатели событий на редактирование профиля
buttonOpenEditProfilePopup.addEventListener('click', () => {
    openPopup(popupEditProfile)
    popupName.value = profileName.textContent;
    popupProfession.value = profileProfession.textContent;
    validatorEditProfile.resetError();
});

buttonCloseEditProfilePopup.addEventListener('click', () => {
    closePopup(popupEditProfile);
});

formEditProfile.addEventListener('submit', submitFormProfile);

// Слушатели событий на добавление новых карточек
buttonOpenPopupAddCard.addEventListener('click', () => {
    openPopup(popupAddCard);
    validatorAddCard.resetError();
});

buttonClosePopupAddCard.addEventListener('click', () => {
    closePopup(popupAddCard);
    popupSubmitCard.reset();
});

popupSubmitCard.addEventListener('submit', submitNewCard);

// Слушатели событий на фото-карточку
popupButtonClosePhoto.addEventListener('click', () => {
    closePopup(popupPhotoCard);
});

renderElements();
validatorEditProfile.enableValidation();
validatorAddCard.enableValidation();