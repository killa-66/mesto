import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._cardImage = this._popup.querySelector('.popup__image');
        this._cardName = this._popup.querySelector('.popup__name');
    }

    open(evt) {
        super.open();
        this._cardImage.src = evt.target.src;
        this._cardImage.alt = evt.target.alt;
        this._cardName.textContent = evt.target.alt;
        
    }
}
