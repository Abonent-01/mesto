class Card {
    constructor(card, templateSelector, setImageClickHandler) {
        this._name = card.name;
        this._link = card.link;
        this._templateSelector = templateSelector;
        this._setImageClickHandler = setImageClickHandler;
    };

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.elements__item')
        .cloneNode(true);

        return cardElement;
    };

    generateCard() {
        this._cardElement = this._getTemplate();
        this._cardElementTitle = this._cardElement.querySelector('.elements__title');
        this._cardElementImage = this._cardElement.querySelector('.elements__image');
        this._cardElementLike = this._cardElement.querySelector('.elements__like');
        this._cardElementDelete = this._cardElement.querySelector('.elements__delete');

        this._cardElementTitle.textContent = this._name;
        this._cardElementImage.src = this._link;
        this._cardElementImage.alt = this._name;

        this._setEventListeners();

        return this._cardElement;
    };

    _likeCard() {
        this._cardElementLike.classList.toggle('elements__like_active');
    };

    _deleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    };

    _setEventListeners() {
        this._cardElementLike.addEventListener('click', () => this._likeCard());
        this._cardElementDelete.addEventListener('click', () => this._deleteCard());
        this._cardElementImage.addEventListener('click', () => 
            this._setImageClickHandler({
                link: this._link,
                name: this._name,
            }));
    };

};

export { Card };