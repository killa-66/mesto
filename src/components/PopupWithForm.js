import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormCB) {
        super(popupSelector);
        this._callback = submitFormCB;
        this._inputList = this._popup.querySelectorAll('.form__input')
        this._submitButtom = this._popup.querySelector('.form__save');
        this._form = this._popup.querySelector('.form');
        this._submitButtomText = this._submitButtom.textContent
    }

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach((input) =>{ 
            formValues[input.name] = input.value; 
          }); 
        return formValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callback(this._getInputValues());
        });
    };

     isLoading(loading, text = 'Сохранение...') {
        if (loading) {
            this._submitButtom.textContent = text;
        }
        else {
            this._submitButtom.disabled = false;
            this._submitButtom.textContent = this._submitButtomText;
        }
    }
    close() {
        super.close();
        this._form.reset();
    }
}