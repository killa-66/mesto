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
const validatorEditAvatar = new FormValidator(validationConfig, formEditAvatar);

const popupEdit = new PopupWithForm('#popupEditProfile', submitFormProfile);
const popupAdd = new PopupWithForm('#popupAddCard', handleSubmitNewCard);
const popupAvatar = new PopupWithForm('#popupEditAvatar', submitNewAvatar)
const popupImage = new PopupWithImage('#popupPhotoCard');
const userInfo = new UserInfo({ selectorUserName: '.profile__name', selectorUserJob: '.profile__profession', selectorUserAvatar: '.profile__avatar' });
const popupDeleteCard = new PopupDeleteCard('#popupDeleteCard', handleSubmitDeleteCard);

const cardList = new Section(
    (item) => { cardList.addItem(createCard(item))}, '.grid')
Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([res, data]) => {
        userInfo.setUserInfo(res)
        cardList.renderItems(data)
    })
    .catch((err) => {
        console.log(err)
    })

function createCard(res) {
    const card = new Card(res, userInfo.userId, ".grid-template", {
        handleCardClick: () => {
            popupImage.open({name: res.name, link: res.link})
        },
        handleDeleteCard: (card, cardId) => {
            popupDeleteCard.open(card, cardId);
        },
        handleAddLike: (cardId, counter) => {
            api.putLike(cardId)

                .then(() => {
                    counter.length = counter.length + 1
                    card.setLikeButton()
                    card.setCountLike(card.likes.length)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        handleRemoveLike: (cardId, counter) => {
            api.deleteLike(cardId)
                .then((data) => {
                    counter.length = counter.length - 1
                    card.deleteLikeButton()
                    card.setCountLike(card.likes.length)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    });
    return card.generateCard();
}

function handleSubmitDeleteCard() {
    isLoading(true);
    api.deleteCard(popupDeleteCard.cardId)
        .then(() => {
            popupDeleteCard.card.remove()
            isLoading(false, 'Сохранить')
            popupDeleteCard.close();
        })
        .catch((err) => {
            console.log(err)
        })
        }
// Сохранение данных из заполненного попап'а профиля
function submitFormProfile(propUserInfo) {
    isLoading(true)
    api.patchUserInfo(propUserInfo)
        .then(res => {
            userInfo.setUserInfo(res)
            isLoading(false, 'Сохранить')
            popupEdit.close();
        })
        .catch((err) => {
            console.log(err)
        })
}

function submitNewAvatar(propUserInfo) {
    isLoading(true)
    api.patchAvatarInfo(propUserInfo)
        .then((res) => {
            userInfo.setUserInfo(res)
            isLoading(false, 'Сохранить')
            popupAvatar.close()
        })
        .catch((err) => {
            console.log(err)
        })
}
function handleSubmitNewCard(propsCardInfo) {
    isLoading(true)
    api.postNewCard(propsCardInfo)
        .then(data => {
            cardList.prependItem(createCard(data))
            isLoading(false, 'Создать')
            popupAdd.close();
        })
        .catch((err) => {
            console.log(err)
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