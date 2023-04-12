import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";


/*Переменные для Profile*/

const profilePopup = document.querySelector('.popup_type_profile');                       //popup редактирования профиля
const profileEditButton = document.querySelector('.profile__button-edit');                //кнопка редактирования профиля
/*const profileCloseButton = document.querySelector('.popup__button-close_type_profile');*/   //кнопка закрытия профиля
const profileName = document.querySelector('.profile__title');                            //строка с именем
const profileTitle = document.querySelector('.profile__subtitle');                        //строка с должностью
const profileEditForm = document.querySelector('.popup__form_type_profile');              //Форма изменения профиля

const profileInputName = profileEditForm.querySelector('.popup__item_type_name');         //поле ввода имени
const profileInputTitle = profileEditForm.querySelector('.popup__item_type_about');       //поле ввода должности


/*Переменные для Cards*/

const popupCard = document.querySelector('.popup_type_card');                             //popup редактирования карточек
const cardAddButton = document.querySelector('.profile__button-add');                     //кнопка добавления карточки
/*const cardCloseButton = document.querySelector('.popup__button-close_type_card');*/         //кнопка закрытия формы добавления карточки
const cardLikeButton = document.querySelector('.elements__like');                             //кнопка "Лайк"
const getCardTitle = document.querySelector('.elements__title');                          //строка с названием места
const getCardLink = document.querySelector('.elements__image');                           //строка с ссылкой на изображение
const cardEditForm = document.querySelector('.popup__form_type_card');                    //форма добавления карточки
const buttonCardSubmit = document.querySelector('.popup__button-submit');              //кнопка сохранения карточки
/*const buttonCardSubmitDisabled = document.querySelector('popup__button_disabled');*/
const buttonDisabled = document.querySelector('.popup__button-submit_type_card');
const inputCardTitle = document.querySelector('.popup__item_type_title');                 //поле ввода названия карточки
const inputCardLink = document.querySelector('.popup__item_type_link');                   //поле ввода ссылки на картинку

/*Просмотр карточек*/

const popupImage = document.querySelector('.popup_type_image');                           //popup просмотра увеличенного изображения
const popupImg = document.querySelector('.popup__img');                                   //переменная для изображения просматриваемой карточки
const popupTitle = document.querySelector('.popup__title-image');                         //перемпеременная для названия просматриваемой карточки



/*Переменная для всех кнопок закрытия*/

const closeButtons = document.querySelectorAll('.popup__button-close');

const popupList = document.querySelectorAll('.popup');                                  //перемпеременная для закрытия popup окон на оверлей

/*Общая функция обработки нажатия на кнопки закрытия*/

closeButtons.forEach((button) => { 
    const popup = button.closest('.popup');                       // находим 1 раз ближайший к крестику попап
    button.addEventListener('click', () => closePopup(popup));    // устанавливаем обработчик закрытия на крестик
});


/*Общая функция открытия Popup*/

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClosePopup);

}

/*Общая функция закрытия Popup*/

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClosePopup);
}


/*Функция закрытия Popup при нажатии Esc*/

const handleEscClosePopup = (evt) => {
    if (evt.key === 'Escape') {
        const closePopupEsc = document.querySelector('.popup_opened');
        closePopup(closePopupEsc);
    };
};

/*Функция закрытия Popup при нажатии на оверлей*/

popupList.forEach((item) => {
    item.addEventListener('mousedown', (evt) => {
        if (evt.target === evt.currentTarget) {
            closePopup(item);
        };
    });
});


/*Открытие Popup профиля c указанными данными*/

profileEditButton.addEventListener('click', () => {
    openPopup(profilePopup);
    
    profileInputName.value = profileName.textContent;
    profileInputTitle.value = profileTitle.textContent;
});


/*Сохранение внесенных изменений в ProfilePopup*/

profileEditForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    profileName.textContent = profileInputName.value
    profileTitle.textContent = profileInputTitle.value

   
    closePopup(profilePopup);
});


/*Открытие формы добавления карточки*/

cardAddButton.addEventListener('click', () => {
    
    openPopup(popupCard);
    buttonDisabled.classList.add('popup__button_disabled');
    buttonDisabled.disabled = true;
});

//Функция сохранения новой карточки

function handleCardFormSubmit (evt) {
    evt.preventDefault();
    
    const card = {
        name: inputCardTitle.value,
        link: inputCardLink.value,
    };

    elementsList.prepend(createCard(card));

    evt.target.reset();
    buttonDisabled.classList.add('popup__button_disabled');
    buttonDisabled.disabled = true;
    closePopup (popupCard);
    
};




cardEditForm.addEventListener('submit', handleCardFormSubmit);

/*Функция лайк*/

const setLikeHandler = (cardLikeButton) => {
    cardLikeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle('elements__like_active');
    });
};

/*Функция удаления карточки*/

const setDeleteHandler = (cardData) => {
    cardData.addEventListener('click', (evt) => {
        evt.target.closest('.elements__item').remove();
    });
};

/*Функция просмотора карточки*/

/*const setImageClickHandler = (zoomCard) => {
    zoomCard.addEventListener('click', (evt) => {
        openPopup(popupImage);

        popupImg.src = zoomCard.src;
        popupImg.alt = zoomCard.alt;
        popupTitle.textContent = evt.target.closest('.elements__item').textContent;
    });
};*/

const setImageClickHandler = (zoomCard) => {
    openPopup(popupImage);

    popupImg.src = zoomCard.link;
    popupImg.alt = zoomCard.name;
    popupTitle.textContent = zoomCard.name;
}



/*Функция добавления карточки*/
/*const elementsTemplate = document.querySelector('#elements-add').content;*/
const elementsList = document.querySelector('.elements__list');

/*

function createCard(cardData) {
    const templateElements = elementsTemplate.cloneNode(true);
    const newImageCard = templateElements.querySelector('.elements__image');
    const newTitleCard = templateElements.querySelector('.elements__title');
    const newLikeCard = templateElements.querySelector('.elements__like');
    const newDeleteCard = templateElements.querySelector('.elements__delete');

    newImageCard.src = cardData.link;
    newImageCard.alt = cardData.alt;
    newTitleCard.textContent = cardData.name;

    setLikeHandler(newLikeCard);
    setDeleteHandler(newDeleteCard);
    setImageClickHandler(newImageCard);

    return templateElements;
};

*/

const createCard = (cardData) => {
    const card = new Card(cardData, '.template-card', setImageClickHandler);

    return card.generateCard();
};

/*Загрузка карточек из массива*/

initialCards.forEach((cardData) => {
    elementsList.append(createCard(cardData));
});




/*Возврат события*/

const addCloseSet = (evt) => {
    return evt.target.closest('.popup');
}

const  formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__item_type_error_visible'
}

const validationFormProfile = new FormValidator(formValidationConfig, profilePopup);
validationFormProfile.enableValidation();

const validationFormCard = new FormValidator(formValidationConfig, cardEditForm);
validationFormCard.enableValidation();