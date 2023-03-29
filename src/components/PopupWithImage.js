import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._cardImage = this._popup.querySelector('.popup__image');
        this._cardName = this._popup.querySelector('.popup__name');
    }

    open(data) {
        super.open();
        this._title = data.name;
        this._link = data.link;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._title;
        this._cardName.textContent = this._title;
    }
}
