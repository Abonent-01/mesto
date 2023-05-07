class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__button-close');
  };

  _handleEscClose = (evt) => {
    evt.key === "Escape" && this.close();
  };

  _handleCloseByOverlay = (evt) => {
    evt.target.classList.contains('popup') && this.close();
  };

  setEventListeners() {
    this._popup.addEventListener('click', this._handleCloseByOverlay);
    this._popupCloseButton.addEventListener('click', this.close);
  };

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close = () => {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };
};

export default Popup;