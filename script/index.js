import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";


/*Переменные для Profile*/

const profilePopup = document.querySelector('.popup_type_profile');                       //popup редактирования профиля
const profileEditButton = document.querySelector('.profile__button-edit');                //кнопка редактирования профиля
const profileName = document.querySelector('.profile__title');                            //строка с именем
const profileTitle = document.querySelector('.profile__subtitle');                        //строка с должностью
const profileEditForm = document.querySelector('.popup__form_type_profile');              //Форма изменения профиля

const profileInputName = profileEditForm.querySelector('.popup__item_type_name');         //поле ввода имени
const profileInputTitle = profileEditForm.querySelector('.popup__item_type_about');       //поле ввода должности


/*Переменные для Cards*/

const popupCard = document.querySelector('.popup_type_card');                             //popup редактирования карточек
const cardAddButton = document.querySelector('.profile__button-add');                     //кнопка добавления карточки
const cardEditForm = document.querySelector('.popup__form_type_card');                    //форма добавления карточки
const inputCardTitle = document.querySelector('.popup__item_type_title');                 //поле ввода названия карточки
const inputCardLink = document.querySelector('.popup__item_type_link');                   //поле ввода ссылки на картинку

/*Просмотр карточек*/

const popupImage = document.querySelector('.popup_type_image');                           //popup просмотра увеличенного изображения
const popupImg = document.querySelector('.popup__img');                                   //переменная для изображения просматриваемой карточки
const popupTitle = document.querySelector('.popup__title-image');                         //перемпеременная для названия просматриваемой карточки

const elementsList = document.querySelector('.elements__list');                           //перемпеременная раздела для карточек

/*Переменная для всех кнопок закрытия*/

const closeButtons = document.querySelectorAll('.popup__button-close');

const popupList = document.querySelectorAll('.popup');                                  //перемпеременная для закрытия popup окон на оверлей







/*Создание карточки */
const createCard = (cardData) => {
    const card = new Card(cardData, '.template-card', setImageClickHandler);
    return card.generateCard();
};

/*Просмотр карточки */
const setImageClickHandler = (zoomCard) => {
    openPopup(popupImage);

    popupImg.src = zoomCard.link;
    popupImg.alt = zoomCard.name;
    popupTitle.textContent = zoomCard.name;
}

/*Загрузка карточек из массива*/

initialCards.forEach((cardData) => {
    elementsList.append(createCard(cardData));
});

/*Общая функция открытия Popup*/
const openPopup = (popup) => {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', handleEscClosePopup);
}

/*Общая функция закрытия Popup*/
const closePopup = (popup) => {
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

/*Общая функция обработки нажатия на кнопки закрытия*/

closeButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        const closeButton = addCloseSet(evt);
        closePopup(closeButton);
    });
});

/*Функция закрытия Popup при нажатии на оверлей*/
popupList.forEach((item) => {
    item.addEventListener('mousedown', (evt) => {
        if (evt.target === evt.currentTarget) {
            closePopup(item);
        };
    });
});

/*Открытие Popup профиля c указанными данными*/
function openEditProfile() {
    openPopup(profilePopup);
    profileInputName.value = profileName.textContent;
    profileInputTitle.value = profileTitle.textContent;
    validationFormProfile.resetValidationForm();
};

profileEditButton.addEventListener('click', openEditProfile);

/*Сохранение внесенных изменений в ProfilePopup*/
function profileEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileInputName.value
    profileTitle.textContent = profileInputTitle.value
    closePopup(profilePopup);
};

profileEditForm.addEventListener('submit', profileEditFormSubmit);



/*Открытие формы добавления карточки*/
function openAddCard() {
    openPopup(popupCard);
    inputCardTitle.value = '',
    inputCardLink.value = '',
    validationFormCard.resetValidationForm();
};
cardAddButton.addEventListener('click', openAddCard);

//Функция сохранения новой карточки
function addCardSubmit(evt) {
    evt.preventDefault();
    renderCard({
        name: inputCardTitle.value,
        link: inputCardLink.value,
    });
    evt.target.reset();
    closePopup(popupCard);
};

cardEditForm.addEventListener('submit', addCardSubmit);

const renderCard = (card) => {
    elementsList.prepend(createCard(card));
};



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

const validationFormProfile = new FormValidator(formValidationConfig, profileEditForm);
validationFormProfile.enableValidation();

const validationFormCard = new FormValidator(formValidationConfig, cardEditForm);
validationFormCard.enableValidation();