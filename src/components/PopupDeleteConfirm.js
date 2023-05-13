import Popup from "./Popup.js";

export default class PopupDeleteConfirm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  _submitCallbackHandler = (evt) => {
    this._submitCallback(evt, { cardId: this._cardId, card: this._card });
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._submitCallbackHandler);
  }

  open(cardId, card) {
    super.open();
    this._cardId = cardId;
    this._card = card;
  }
}