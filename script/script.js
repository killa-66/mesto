let profile = document.querySelector('.profile'),
    popup = document.querySelector('.popup'),
    popupOpen = profile.querySelector('.profile__open'),
    profileName = profile.querySelector('.profile__name'),
    profileProfession = profile.querySelector('.profile__profession'),
    popupForm = popup.querySelector('.form'),
    popupName = document.getElementById('name'),
    popupProfession = document.getElementById('job'),
    popupClose = popup.querySelector('.popup__close');

console.log(popupForm);

// Функция открытия попап'а, перед открытием данные из фромы подгружаем в попап (мало ли у кого-то очень слабый компьютер)
function openPoup() {
    inputValue();
    popup.classList.add('popup_opened');
}

// Функция закрытия попап'а
function closePopup() {
    popup.classList.remove('popup_opened');
}

// Передача данных из профиля в попап
function inputValue() {
    popupName.value = profileName.textContent;
    popupProfession.value = profileProfession.textContent;
}

// Сохранение данных из заполненного попап'а
function handleFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileProfession.textContent = popupProfession.value;
    closePopup();
}


popupOpen.addEventListener('click', openPoup);
popupClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);