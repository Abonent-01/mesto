/*Profile*/

const popupProfile = document.querySelector('.popup_type_profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close_type_profile');
const getTitle = document.querySelector('.profile__title');
const getSubtitle = document.querySelector('.profile__subtitle');
const editForm = document.querySelector('.popup__form');

const nameInput = editForm.querySelector('.popup__item_type_name');
const aboutInput = editForm.querySelector('.popup__item_type_about');

function openPopupProfile () {
    popupProfile.classList.add ('popup_opened');
    nameInput.value = getTitle.textContent;
    aboutInput.value = getSubtitle.textContent;
}

function closePopupProfile () {
    popupProfile.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    getTitle.textContent = `${nameInput.value}`;
    getSubtitle.textContent = `${aboutInput.value}`;
    closePopupProfile ();
}

buttonEdit.addEventListener('click', openPopupProfile);
buttonClose.addEventListener('click', closePopupProfile);
editForm.addEventListener('submit', formSubmitHandler);

/*Cards*/

const popupCard = document.querySelector('.popup_type_card');
const buttonCardAdd = document.querySelector('.profile__button-add');
const buttonCardClose = document.querySelector('.popup__button-close_type_card');
const likeActive = document.querySelector('.elements__like');
const getCardTitle = document.querySelector('.elements__title');
const getCardLink = document.querySelector('.elements__image');
const editCardForm = document.querySelector('.popup__form_type_card');
const buttonCardSubmit = document.querySelector('.popup__button-submit');

const inputCardTitle = document.querySelector('.popup__item_type_title');
const inputCardLink = document.querySelector('.popup__item_type_link');

/*Просмотр cards*/

const popupImage = document.querySelector('.popup_type_image');
const popupImg = document.querySelector('.popup__img');
const popupTitle = document.querySelector('.popup__title_type_img');

function openZoom () {
    popupImage.classList.add('popup_opened');
}

/*Закрытие просмотра*/

const popupButtonClose = document.querySelector('.popup__button-close_type_image');

function closeZoom () {
    popupImage.classList.remove('popup_opened');
}

popupButtonClose.addEventListener('click', closeZoom);

function newPopupCard () {
    popupCard.classList.add('popup_opened');
    inputCardTitle.value = '';
    inputCardLink.value = '';
}

function closePopupcard () {
    popupCard.classList.remove ('popup_opened');
}





function cardFormSubmitHandler (evt) {
    evt.preventDefault();
    
    const card = {
        name: inputCardTitle.value,
        link: inputCardLink.value,
    };

    elementsList.prepend(newCard(card));

    
    closePopupcard ();
};

editCardForm.addEventListener('submit', cardFormSubmitHandler);


buttonCardAdd.addEventListener('click', newPopupCard);
buttonCardClose.addEventListener('click', closePopupcard);





const blackHeart = (likeActive) => {
    likeActive.addEventListener('click', (evt) => {
        evt.target.classList.toggle('elements__like_active');
    });
};

/*Delete Card Function*/
const deleteCard = (cardData) => {
    cardData.addEventListener('click', (evt) => {
        evt.target.closest('.elements__item').remove();
    });
};

const zoomImage = (zoomCard) => {
    zoomCard.addEventListener('click', (evt) => {
        openZoom(popupImage);

        popupImg.src = zoomCard.src;
        popupImg.alt = zoomCard.alt;
        popupTitle.textContent = evt.target.closest('.elements__item').textContent;
    });
};



/*AddCards*/
const elementsTemplate = document.querySelector('#elements-add').content;
const elementsList = document.querySelector('.elements__list');

function newCard(cardData) {
    const templateElements = elementsTemplate.cloneNode(true);
    const newImageCard = templateElements.querySelector('.elements__image');
    const newTitleCard = templateElements.querySelector('.elements__title');
    const newLikeCard = templateElements.querySelector('.elements__like');
    const newDeleteCard = templateElements.querySelector('.elements__delete');

    newImageCard.src = cardData.link;
    newImageCard.alt = cardData.alt;
    newTitleCard.textContent = cardData.name;

    blackHeart(newLikeCard);
    deleteCard(newDeleteCard);
    zoomImage(newImageCard);

    return templateElements;
};


initialCards.forEach((cardData) => {
    elementsList.append(newCard(cardData));
});






console.log(openZoom);
