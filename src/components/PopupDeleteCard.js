import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, deleteCardCB) {
        super(popupSelector);
        this._deleteButtom = this._popup.querySelector('.form__save');
        this._callback = deleteCardCB;
    }

    // setEventListeners() {
    //     super.setEventListeners();
    //     this._deleteButtom.addEventListener('mousedown', this._callback)
    // }

    open(card, cardId) {
        this.card = card;
        this.cardId = cardId;
        super.open();
        this._deleteButtom.addEventListener('mousedown', this._callback)
    }
    close() {
        super.close();
        this._deleteButtom.removeEventListener('mousedown', this._callback)
    }
}