import './index.css'
import {
    profile, popupEditProfile, popupName, popupProfession,
    buttonOpenEditProfilePopup, buttonOpenPopupAddCard, popupAddCard,
    popupSubmitCard, formEditProfile, validationConfig, buttonAvatarEdit,
    formEditAvatar
} from '../constants/constants.js'
import Card from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import { api } from '../components/Api';
import PopupDeleteCard from "../components/PopupDeleteCard";

const validatorEditProfile = new FormValidator(validationConfig, formEditProfile);
const validatorAddCard = new FormValidator(validationConfig, popupSubmitCard);
const popupEdit = new PopupWithForm('#popupEditProfile', submitFormProfile);
const popupAdd = new PopupWithForm('#popupAddCard', handleSubmitNewCard);
const popupAvatar = new PopupWithForm('#popupEditAvatar', submitNewAvatar)
const validatorEditAvatar = new FormValidator(validationConfig, formEditAvatar);
const popupImage = new PopupWithImage('#popupPhotoCard');
const userInfo = new UserInfo({ selectorUserName: '.profile__name', selectorUserJob: '.profile__profession', selectorUserAvatar: '.profile__avatar' });
const popupDeleteCard = new PopupDeleteCard('#popupDeleteCard', handleSubmitDeleteCard);

api.getUserInfo()
    .then((res) => {
        userInfo.setUserInfo(res)
        userInfo.setUserAvatar(res)
        userInfo.getUserId(res._id)
    })

const cardList = new Section(
    (item) => {
            const cardItem = createCard(item,
                '.grid-template',
                userInfo.myID);
            cardList.addItem(cardItem)
        }, '.grid')
    
api.getInitialCards()
    .then((data) => {
        cardList.renderItems(data);
    })
    .catch((error) => {
        console.log("Ошибка:", error);
    });

function createCard(data, cardSelector, myID) {
    const card = new Card(data, userInfo.myId, cardSelector, {
        handleCardClick: () => {
            popupImage.open({name: data.name, link: data.link})
        },
        handleDeleteCard: () => {
            popupDeleteCard.open(card);
            api.setId(data._id)
            popupDeleteCard.setCardDeletionCallback(() => card.deleteItem());
        },
        handleAddLike: (cardId) => {
            api.putLike(cardId)
                .then(() => {
                    card.setLikeButton()
                    card._likes.push("")
                    card.setCountLike(card._likes.length)
                })

        },
        handleRemoveLike: (cardId) => {
            api.deleteLike(cardId)
                .then(() => {
                    card.deleteLikeButton()
                    card._likes.pop("")
                    card.setCountLike(card._likes.length)
                })
        }
    });
    return card.generateCard();
}

function handleSubmitDeleteCard() {
    isLoading(true);
    api.deleteCard()
        .then(() => {
            popupDeleteCard._card.deleteItem()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            isLoading(false, 'Сохранить')
            popupDeleteCard.close();
        })
}
// Сохранение данных из заполненного попап'а профиля
function submitFormProfile(propUserInfo) {
    isLoading(true)
    api.patchUserInfo(propUserInfo)
        .then(res => {
        })
        .finally(() => {
            userInfo.setUserInfo(propUserInfo)
            isLoading(false, 'Сохранить')
            popupEdit.close();
        })
}

function submitNewAvatar(propUserInfo) {
    isLoading(true)
    api.patchAvatarInfo(propUserInfo)
        .then(res => {
            userInfo.setUserAvatar(propUserInfo)
        })
        .finally(() => {
            isLoading(false, 'Сохранить')
            popupAvatar.close()
        })
}

function handleSubmitNewCard(propsCardInfo ) {
    isLoading(true)
    api.postNewCard(propsCardInfo)
        .then(data => {
            const cardAddElement = createCard(data, ".grid-template", userInfo.myId);
            cardList.prependItem(cardAddElement);
            popupAdd.close();
        })
        .finally(() => {
            isLoading(false, 'Создать')
        })

}

function isLoading(loading, text) {
    const activePopup = document.querySelector(".popup_opened");
    const activeButton = activePopup.querySelector(".form__save");
    if (loading) {
        activeButton.textContent = "Сохранение...";
        activeButton.disabled = true;
    }
    else {
        activeButton.disabled = false;
        activeButton.textContent = text;
    }
}

// Слушатели событий на редактирование профиля
buttonOpenEditProfilePopup.addEventListener('click', () => {
    const {
        name,
        about
    } = userInfo.getUserInfo();
    popupName.value = name;
    popupProfession.value = about;
    popupEdit.open();
    validatorEditProfile.resetErrors();
});

// Слушатели событий на добавление новых карточек
buttonOpenPopupAddCard.addEventListener('click', () => {
    popupAdd.open();
    validatorAddCard.blockButtonOpened();
    validatorAddCard.resetErrors();
});

buttonAvatarEdit.addEventListener('click', () => {
    popupAvatar.open()
    validatorEditAvatar.blockButtonOpened();
    validatorEditAvatar.resetErrors();
})

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupImage.setEventListeners();
popupAvatar.setEventListeners();
validatorEditProfile.enableValidation();
validatorAddCard.enableValidation();
validatorEditAvatar.enableValidation();
popupDeleteCard.setEventListeners();