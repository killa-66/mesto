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
const profile = document.querySelector('.profile');
const popupEditProfile = document.getElementById('popupEditProfile');
const popupName = document.getElementById('name');
const popupProfession = document.getElementById('job');
const buttonOpenEditProfilePopup = profile.querySelector('.profile__open');
const popupAddCard = document.getElementById('popupAddCard');
const buttonOpenPopupAddCard = document.querySelector('.profile__add');
const popupSubmitCard = popupAddCard.querySelector('.form');
const formEditProfile = popupEditProfile.querySelector('.form');

export { initialCards, profile, popupEditProfile, popupName, popupProfession,
        buttonOpenEditProfilePopup, buttonOpenPopupAddCard, popupAddCard,
        popupSubmitCard, formEditProfile
    }
