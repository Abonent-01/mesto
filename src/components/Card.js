export class Card {
  constructor(place, template, handleCardClick) {
    this._name = place.name;
    this._link = place.link;
    this._cardTemplate = template;
    this._image = null;
    this._onOpenPopup = handleCardClick;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content.querySelector('.elements__item')
      .cloneNode(true);
    return cardElement;
  };

  _openCard = () => {
    this._onOpenPopup({ name: this._name, link: this._link });
  };

  _deleteCard = () => {
    this._card.remove();
    this. _card = null
  };

  _likeCard = () => {
    this._like.classList.toggle('elements__like_active');
  };

  _setEventListeners() {
    this._like = this._card.querySelector('.elements__like');
    this._like.addEventListener('click', this._likeCard);

    this._card
      .querySelector('.elements__delete')
      .addEventListener('click', this._deleteCard);

    this._image.addEventListener('click', this._openCard);
  };

  generateCard() {
    this._card = this._getTemplate();
    this._card.querySelector('.elements__title').textContent = this._name;
    this._image = this._card.querySelector('.elements__image');
    this._image.src = this._link;
    this._image.alt = this._link;

    this. _setEventListeners();

    return this._card;
  };
};