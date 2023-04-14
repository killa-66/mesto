import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, deleteCardCB) {
        super(popupSelector);
        this._deleteButtom = this._popup.querySelector('.form__save');
        this._callback = deleteCardCB;
    }

    setEventListeners() {
        super.setEventListeners();
        this._deleteButtom.addEventListener('mousedown', this._callback)
    }

    setCardDeletionCallback(callback) {
        this._cardDeletionCallback = callback;
    }

    open(card) {
        this._card = card;
        super.open();
    }
}