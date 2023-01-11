let profile = document.querySelector('.profile'),
    popup = document.querySelector('.popup'),
    popupOpened = document.querySelector('.popup__opened'),
    popupOpen = profile.querySelector('.profile__open'),
    profileName = profile.querySelector('.profile__name'),
    profileProfession = profile.querySelector('.profile__profession'),
    popupContainer = popup.querySelector('.popup__container'),
    popupTitle = popupContainer.querySelector('.popup__title'),
    popupName = popupContainer.querySelector('.popup__name'),
    popupProfession = popupContainer.querySelector('.popup__profession'),
    popupSave = popupContainer.querySelector('.popup__save'),
    Popupform = popupContainer.querySelector('.form');
    popupClose = popup.querySelector('.popup__close');

function openPoup() {
    popup.classList.add('popup__opened');
}

function closePopup() {
    popup.classList.remove('popup__opened');
}

document.addEventListener("DOMContentLoaded", function () { 
    function inputValue () {
        popupName.value = profileName.innerHTML;
        popupProfession.value = profileProfession.innerHTML;
    }
    inputValue();
  });

function handleFormSubmit (event) {
    event.preventDefault();
    profileName.innerHTML = popupName.value;
    profileProfession.innerHTML = popupProfession.value;
    closePopup();
}


popupOpen.addEventListener('click', openPoup);
popupClose.addEventListener('click', closePopup);
Popupform.addEventListener('submit', handleFormSubmit);