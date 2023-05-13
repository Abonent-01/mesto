import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._submitButton = this._popupForm.querySelector('.popup__button-submit');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__item'));
  }

  _getInputValues() {
    return this._inputList.reduce((obj, input) => {
      obj[input.name] = input.value;
      return obj;
    }, {});
  }

  _submitCallbackHandler = (evt) => {
    this._submitCallback(evt, this._getInputValues());
  };

  renderLoading(isLoading, buttonText = 'Сохранение...') {
    this._submitButton.disabled = isLoading;
    this._submitButton.textContent = buttonText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._submitCallbackHandler);
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name] || "";
    });
  };

  close() {
    this._popupForm.reset();
    super.close();
  }
}

export default PopupWithForm;