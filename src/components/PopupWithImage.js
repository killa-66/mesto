import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._cardImage = this._popup.querySelector('.popup__image');
        this._cardName = this._popup.querySelector('.popup__name');
    }

    open(data) {
        super.open();
        const title = data.name;
        const link = data.link;
        this._cardImage.src = link;
        this._cardImage.alt = title;
        this._cardName.textContent = title;
    }
}
