export class Card {
  constructor(
    { name, link, likes, _id, owner },
    template,
    handleCardClick,
    userId,
    handleDelete,
    handleLike
  ) {
    this._name = name;
    this._link = link;
    this._cardTemplate = template;
    this._image = null;
    this._cardId = _id;
    this._onOpenPopup = handleCardClick;
    this._likesCounter = likes.length;
    this._isLiked = likes.some((like) => userId === like._id);
    this._isUserCard = owner._id === userId;
    this._handleDelete = handleDelete;
    this._handleLike = handleLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content.querySelector('.elements__item')
      .cloneNode(true);
    return cardElement;
  }

  getCardInfo() {
    return { cardId: this._cardId, isLiked: this._isLiked };
  }

  _openCard = () => {
    this._onOpenPopup({ name: this._name, link: this._link });
  };

  _deleteCard = () => {
    this._handleDelete(this._cardId, this._card);
  };

  processLikes(data) {
    if (this._isLiked) {
      this._dislikeCard(data);
    } else {
      this._likeCard(data);
    }
  }

  _likeCard(data) {
    this._like.classList.add('elements__like_active');
    this._likeCount.textContent = data.likes.length;
    this._isLiked = true;
  }

  _dislikeCard(data) {
    this._like.classList.remove('elements__like_active');
    this._likeCount.textContent = data.likes.length;
    this._isLiked = false;
  }

  _setEventListeners() {
    this._card
      .querySelector('.elements__like')
      .addEventListener('click', () => this._handleLike(this));

    if (this._isUserCard) {
      this._deleteButton.addEventListener('click', this._deleteCard);
    } else {
      this._deleteButton.remove();
    }

    this._image.addEventListener('click', this._openCard);
  }

  generateCard() {
    this._card = this._getTemplate();
    this._card.querySelector('.elements__title').textContent = this._name;
    this._like = this._card.querySelector('.elements__like');
    this._likeCount = this._card.querySelector('.elements__like-counter');
    this._likeCount.textContent = this._likesCounter;

    this._deleteButton = this._card.querySelector('.elements__delete');

    if (this._isLiked) {
      this._card
        .querySelector('.elements__like')
        .classList.add('elements__like_active');
    }

    this._image = this._card.querySelector('.elements__image');
    this._image.src = this._link;
    this._image.alt = this._name;

    this._setEventListeners();

    return this._card;
  }
}