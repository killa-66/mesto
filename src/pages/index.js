import { initialCards, profile, popupEditProfile, popupName, popupProfession,
    buttonOpenEditProfilePopup, buttonOpenPopupAddCard, popupAddCard,
    popupSubmitCard, formEditProfile} from '../constants/constants.js';
import Card from '../components/Card.js'
import { FormValidator, validationConfig } from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

const validatorEditProfile = new FormValidator(validationConfig, formEditProfile);
const validatorAddCard = new FormValidator(validationConfig, popupSubmitCard);
const popupEdit = new PopupWithForm('#popupEditProfile', submitFormProfile);
const popupAdd = new PopupWithForm('#popupAddCard', handleSubmitNewCard);
const popupImage = new PopupWithImage('#popupPhotoCard');
const userInfo = new UserInfo({ selectorUserName: '.profile__name', selectorUserJob: '.profile__profession' });

const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const cardItem = createCard(item, '#grid-template',
            (evt) => {
                popupImage.open(evt);
            }
        )
        cardList.addItem(cardItem)
    }
}, '.grid')

function createCard(data, cardSelector, cb) {
    const card = new Card(data, cardSelector, cb);
    return card.generateCard();
}

// Сохранение данных из заполненного попап'а профиля
function submitFormProfile() {
    userInfo.setUserInfo({
        username: popupName.value,
        userjob: popupProfession.value
    })
    popupEdit.close();
}

function handleSubmitNewCard(prop) {
    cardList.prependItem(createCard(prop, '#grid-template', (evt) => { popupImage.open(evt) }))
}

// Слушатели событий на редактирование профиля
buttonOpenEditProfilePopup.addEventListener('click', () => {
    const {
        username,
        userjob
    } = userInfo.getUserInfo();
    popupName.value = username;
    popupProfession.value = userjob;
    popupEdit.open();
    validatorEditProfile.resetError();
});

// Слушатели событий на добавление новых карточек
buttonOpenPopupAddCard.addEventListener('click', () => {
    popupAdd.open();
    validatorAddCard.blockButtonOpened();
    validatorAddCard.resetError();
});

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupImage.setEventListeners();
cardList.renderItems();
validatorEditProfile.enableValidation();
validatorAddCard.enableValidation();