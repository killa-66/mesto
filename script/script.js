const profile = document.querySelector('.profile'),
    popup = document.querySelector('.popup'),
    gridCard = document.querySelector('.grid__card'),
    popupOpen = profile.querySelector('.profile__open'),
    profileName = profile.querySelector('.profile__name'),
    profileProfession = profile.querySelector('.profile__profession'),
    popupForm = popup.querySelector('.form'),
    popupName = document.getElementById('name'),
    popupProfession = document.getElementById('job'),
    popupClose = popup.querySelector('.popup__close');

console.log(popupForm);

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


// document.addEventListener('DOMContentLoaded', () => {
//     function initializationCards(initialCards) {
//         const gridCard = document.querySelector('.grid__card');
//         const gridTemplate = document.querySelector('#grid-template').content;
//         const gridElement = gridTemplate.querySelector('.grid__card').cloneNode(true);
    
//         for (let i = 0; i < initialCards.length; i++) {
//             gridElement.querySelector('.grid__name').textContent = initialCards[i].name;
//             gridElement.querySelector('.grid__image').src = initialCards[i].link;
    
    
//         }
//         gridCard.append(gridElement);
//     }
//     initializationCards(initialCards);
// })



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