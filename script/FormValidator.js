const dataInput = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_inactive',
    inputErrorClass: 'form__input-error',
    errorClass: 'form__input-error_active'
  };

  class FormValidator {
    constructor(dataInput, formInputSelector) {
        this._formSelector = dataInput.formSelector;
        this._inputSelector = dataInput.inputSelector;
        this._submitButtonSelector = dataInput.submitButtonSelector;
        this._inactiveButtonClass = dataInput.inactiveButtonClass;
        this._inputErrorClass = dataInput.inputErrorClass;
        this._errorClass = dataInput.errorClass;
        this._form = formInputSelector;
        this._submitButton = this._form.closest(this._formSelector).querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    }

    _showInputError() {
      const errorElement = this._form.closest(this._formSelector).querySelector(`.${this._inputElement.id}-error`);
      errorElement.textContent = this._inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
    }

    _hideInputError() {
      const errorElement = this._form.closest(this._formSelector).querySelector(`.${this._inputElement.id}-error`);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = ' ';
    }

    _checkInputValidity() {
      if (!this._inputElement.validity.valid) {
        this._showInputError();
      } else {
        this._hideInputError();
      }
    }

    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      })
    }

    blockButtonOpened() {
      this._submitButton.setAttribute('disabled', true); 
      this._submitButton.classList.add(this._inactiveButtonClass);
    }

    _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this.blockButtonOpened();
      } else {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.removeAttribute('disabled');
      }
    }

    _setEventListeners() {
      this._inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
          this._inputElement = inputElement;
          this._checkInputValidity();
          this._toggleButtonState();
        });
      });
    }

    resetError() {
      this._inputList.forEach((formInputElement) =>{
        this._inputElement = formInputElement; 
        this._hideInputError(); 
      }); 
    }

    enableValidation() {
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners();
    }
  }

  export {  FormValidator, dataInput }