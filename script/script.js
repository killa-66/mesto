const profile = document.querySelector('.profile'),

    popupEditProfile = document.getElementById('popupEditProfile'),
    popupName = document.getElementById('name'),
    popupProfession = document.getElementById('job'),
    popupProfileOpen = profile.querySelector('.profile__open'),

    popupAddCard = document.getElementById('popupAddCard'),
    popupNameCard = document.getElementById('nameCard'),
    popupImageCard = document.getElementById('imageCard'),
    popupOpenProfileAdd = document.querySelector('.profile__add'),
    popupSubmitCard = popupAddCard.querySelector('.form'),

    gridSection = document.querySelector('.grid'),
    
    popupPhotoCard = document.getElementById('popupPhotoCard'),
    popupClosePhoto = popupPhotoCard.querySelector('.popup__close'),

    profileName = profile.querySelector('.profile__name'),
    profileProfession = profile.querySelector('.profile__profession'),
    popupForm = popupEditProfile.querySelector('.form'),
    popupCloseEdit = popupEditProfile.querySelector('.popup__close'),
    popupCloseAdd = popupAddCard.querySelector('.popup__close');


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
    gridCard.querySelector('.grid__name').textContent = cardName;
    gridCard.querySelector('.grid__image').src = cardImg;
    gridCard.querySelector('.grid__like').addEventListener('click', handleClickLike); //Добавление слушателя на кнопку лайка 
    gridCard.querySelector('.grid__trash').addEventListener('click', handleClickDelete); //Добавление слушателя на кнопку удаления
    gridCard.querySelector('.grid__image').addEventListener('click', function() {
        OpenPhotoPopup(cardName, cardImg);
        openPoup(cardPhoto);
    }); //Добавление слушателя на картинку
    return gridCard
}

// Функция открытия попап'а
function openPoup(popupOpen) {
    popupOpen.classList.add('popup_opened');
}

// Функция закрытия попап'а данных профиля
function closePopup(popupClose) {
    popupClose.classList.remove('popup_opened');
}

// Сохранение данных из заполненного попап'а профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileProfession.textContent = popupProfession.value;
    closePopup(popupEditProfile);
}

// Сохранение данных из попапа создания новой карточки
function handleSubmitNewCard(evt) {
    evt.preventDefault();
    gridSection.prepend(addNewCard(popupNameCard.value, popupImageCard.value));
    closePopup(popupAddCard);
    popupNameCard.value = '';
    popupImageCard.value = '';
}

//Функция добавления лайка
function handleClickLike(evt) {
    evt.target.classList.toggle('grid__like_active');
};

function handleClickDelete(evt) {
    const btn = evt.target.closest('.grid__trash');
    if (!btn) {
        return
    }
    btn.closest('.grid__card').remove();
}

// Функция открытия попапа и передача значений в него 
function OpenPhotoPopup(cardName, cardImg) {
    cardPhoto = document.querySelector('.popup_shadow');
    cardPhoto.querySelector('.popup__image').src = cardImg;
    cardPhoto.querySelector('.popup__name').textContent = cardName;
    
}

// Слушатели событий на редактирование профиля
popupProfileOpen.addEventListener('click', () => {
    openPoup(popupEditProfile)
    popupName.value = profileName.textContent;
    popupProfession.value = profileProfession.textContent;
});
popupCloseEdit.addEventListener('click', () => {
    closePopup(popupEditProfile)
});
popupForm.addEventListener('submit', handleFormSubmit);

// Слушатели событий на добавление новых карточек
popupOpenProfileAdd.addEventListener('click', () => {
    openPoup(popupAddCard)
});
popupCloseAdd.addEventListener('click', () => {
    closePopup(popupAddCard)
});
popupSubmitCard.addEventListener('submit', handleSubmitNewCard);

// Слушатели событий на фото-карточку
popupClosePhoto.addEventListener('click', () => {
    closePopup(popupPhotoCard)
});

