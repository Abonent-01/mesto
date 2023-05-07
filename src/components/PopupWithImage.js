import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__img');
    this._title = this._popup.querySelector('.popup__title-image');
  }

  open({ title, link }) {
    super.open();
    this._title.textContent = title;
    this._image.src = link;
    this._image.alt = title;
  }
};

export default PopupWithImage;