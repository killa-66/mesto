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
        handleAddLike: (card) => {
            api.putLike(card.getCardId())
                .then((res) => {
                    card.handleToggleLike(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        handleRemoveLike: (card) => {
            api.deleteLike(card.getCardId())
                .then((res) => {
                    card.handleToggleLike(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    });
    return card.generateCard();
}

function handleSubmitDeleteCard() {
    popupDeleteCard.isLoading(true);
    api.deleteCard(popupDeleteCard.cardId)
        .then(() => {
            popupDeleteCard.card.cardInstance.deleteCard()
            popupDeleteCard.close();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupDeleteCard.isLoading(false)
        })
}
// Сохранение данных из заполненного попап'а профиля
function submitFormProfile(propUserInfo) {
    popupEdit.isLoading(true)
    api.patchUserInfo(propUserInfo)
        .then(res => {
            userInfo.setUserInfo(res)
            popupEdit.close();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupEdit.isLoading(false)
        })
}

function submitNewAvatar(propUserInfo) {
    popupAvatar.isLoading(true)
    api.patchAvatarInfo(propUserInfo)
        .then((res) => {
            userInfo.setUserInfo(res)
            popupAvatar.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupAvatar.isLoading(false)

        })
}
function handleSubmitNewCard(propsCardInfo) {
    popupAdd.isLoading(true)
    api.postNewCard(propsCardInfo)
        .then(data => {
            cardList.prependItem(createCard(data))
            popupAdd.close();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupAdd.isLoading(false)
        })
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