const profile = document.querySelector('.profile');
const popupEditProfile = document.getElementById('popupEditProfile');
const popupName = document.getElementById('name');
const popupProfession = document.getElementById('job');
const buttonOpenEditProfilePopup = profile.querySelector('.profile__open');
const popupAddCard = document.getElementById('popupAddCard');
const buttonOpenPopupAddCard = document.querySelector('.profile__add');
const popupSubmitCard = popupAddCard.querySelector('.form');
const formEditProfile = popupEditProfile.querySelector('.form');

const popupEditAvatar = document.querySelector('#popupEditAvatar');
const buttonAvatarEdit = document.querySelector('.profile__container');
const formEditAvatar = popupEditAvatar.querySelector('.form');
const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_inactive',
    inputErrorClass: 'form__input-error',
    errorClass: 'form__input-error_active'
  };

export { profile, popupEditProfile, popupName, popupProfession,
        buttonOpenEditProfilePopup, buttonOpenPopupAddCard, popupAddCard,
        popupSubmitCard, formEditProfile, validationConfig, buttonAvatarEdit,
        formEditAvatar
    }
