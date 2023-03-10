// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const dataInput = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input-error',
  errorClass: 'form__input-error_active'
};

// функция показа ошибки
const showInputError = (formElement, inputElement, errMessage, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errMessage;
  errorElement.classList.add(errorClass);
};

// функция скрытия ошибки
const hideInputError = (formElement, inputElement, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = ' ';
};

// проверка на валидность 
const checkInputValidity = (formElement, inputElement, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, errorClass);
  } else {
    hideInputError(formElement, inputElement, errorClass);
  }
};

// добавление коллекции слушателей на поля формы
const setEventListeners = (formElement, inputSelector, submitButtonSelector,
   inactiveButtonClass, errorClass) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

// обработка валидации формы
const enableValidation = (dataInput) => {
  const formList = Array.from(document.querySelectorAll(dataInput.formSelector));
  formList.forEach((formElement) => {
    window.buttonElement = formElement.querySelector(dataInput.submitButtonSelector);
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, dataInput.inputSelector, dataInput.submitButtonSelector, 
      dataInput.inactiveButtonClass, dataInput.errorClass);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((elem) => {
    return !elem.validity.valid;
  });
}

// изменение статуса активности кнопки "сохранить" и удаление дизэйбла
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    blockButtonOpened(buttonElement, inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

// блокировка кнопки открытого попапа 
const blockButtonOpened = (buttonElement, inactiveButtonClass) => {
  buttonElement.setAttribute('disabled', true); 
  buttonElement.classList.add(inactiveButtonClass);
}

enableValidation(dataInput);