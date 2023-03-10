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

const gridTemplate = document.querySelector('#grid-template').content;

// Инициализация карточек
initialCards.forEach(function (item) {
    appendCard(gridSection, addNewCard(item.name, item.link));
});

// Функция добавления новых картинок в грид-секцию
function appendCard(gridSectionLocal, cardName) {
    gridSectionLocal.append(cardName);
}

// Функция создания новой карточки  
function addNewCard(cardName, cardImg) {
    const gridCard = gridTemplate.querySelector('.grid__card').cloneNode(true);
    const gridImage = gridCard.querySelector('.grid__image');
    gridCard.querySelector('.grid__name').textContent = cardName;
    gridImage.src = cardImg;
    gridImage.alt = cardName;
    gridCard.querySelector('.grid__like').addEventListener('click', сlickLike); //Добавление слушателя на кнопку лайка 
    gridCard.querySelector('.grid__trash').addEventListener('click', deleteCard); //Добавление слушателя на кнопку удаления
    gridImage.addEventListener('click', function () {
        openPhotoPopup(cardName, cardImg);
        openPopup(cardPhoto);
    }); //Добавление слушателя на картинку
    return gridCard
}

// Функция открытия попап'а
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
        // document.removeEventListener('click', handlerClosePopupByClick);
    }
};

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
    gridSection.prepend(addNewCard(popupNameCard.value, popupImageCard.value));
    closePopup(popupAddCard);
    popupSubmitCard.reset();
    blockButtonOpened(window.buttonElement, dataInput.inactiveButtonClass);
}

//Функция добавления лайка
function сlickLike(evt) {
    evt.target.classList.toggle('grid__like_active');
};

function deleteCard(evt) {
    const btn = evt.target.closest('.grid__trash');
    btn.closest('.grid__card').remove();
}

// Функция открытия попапа и передача значений в него 
function openPhotoPopup(cardName, cardImg) {
    poupCardImage.src = cardImg;
    poupCardName.textContent = cardName;
    poupCardImage.alt = cardName;
}

// Слушатели событий на редактирование профиля
buttonOpenEditProfilePopup.addEventListener('click', () => {
    openPopup(popupEditProfile)
    popupName.value = profileName.textContent;
    popupProfession.value = profileProfession.textContent;
});
buttonCloseEditProfilePopup.addEventListener('click', () => {
    closePopup(popupEditProfile)
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