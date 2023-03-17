import { Card } from './Card.js'
import { closePopup, openPopup, openPhotoPopup } from './func.js'
import {  FormValidator, dataInput } from './FormValidator.js'

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
    poupCardImage = cardPhoto.querySelector('.popup__image'),
    poupCardName = cardPhoto.querySelector('.popup__name'),

    profileName = profile.querySelector('.profile__name'),
    profileProfession = profile.querySelector('.profile__profession'),
    formEditProfile = popupEditProfile.querySelector('.form'),
    buttonCloseEditProfilePopup = popupEditProfile.querySelector('.popup__close'),
    buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close');


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// const formArr = Array.from(document.querySelectorAll(dataInput.formSelector));
const formProfile = new FormValidator(dataInput, formEditProfile);
const formCards = new FormValidator(dataInput, popupSubmitCard);

// const gridTemplate = document.querySelector('#grid-template').content;

function createCard(data, cardSelector) {
    const card = new Card(data, cardSelector);
    formCards.blockButtonOpened();
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
    // formCards.blockButtonOpened();
}

// Слушатели событий на редактирование профиля
buttonOpenEditProfilePopup.addEventListener('click', () => {
    openPopup(popupEditProfile)
    popupName.value = profileName.textContent;
    popupProfession.value = profileProfession.textContent;
    formProfile.resetError();
});
buttonCloseEditProfilePopup.addEventListener('click', () => {
    closePopup(popupEditProfile);
});
formEditProfile.addEventListener('submit', submitFormProfile);

// Слушатели событий на добавление новых карточек
buttonOpenPopupAddCard.addEventListener('click', () => {
    openPopup(popupAddCard);
});
buttonClosePopupAddCard.addEventListener('click', () => {
    closePopup(popupAddCard)
});
popupSubmitCard.addEventListener('submit', submitNewCard);

// Слушатели событий на фото-карточку
popupButtonClosePhoto.addEventListener('click', () => {
    closePopup(popupPhotoCard)
});

renderElements();
formProfile.enableValidation();
formCards.enableValidation();