class FormValidator {
  constructor(validationConfig, formInputSelector) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
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

  resetErrors() {
    this._inputList.forEach((formInputElement) => {
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

export { FormValidator }