/*Переменные для Profile*/

const profileForm = document.querySelector('.popup_type_profile');                       //popup редактирования профиля
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
const buttonCardSubmit = document.querySelector('.popup__button-submit');                 //кнопка сохранения карточки

const inputCardTitle = document.querySelector('.popup__item_type_title');                 //поле ввода названия карточки
const inputCardLink = document.querySelector('.popup__item_type_link');                   //поле ввода ссылки на картинку

/*Просмотр карточек*/

const popupImage = document.querySelector('.popup_type_image');                           //popup просмотра увеличенного изображения
const popupImg = document.querySelector('.popup__img');                                   //переменная для изображения просматриваемой карточки
const popupTitle = document.querySelector('.popup__title-image');                         //перемпеременная для названия просматриваемой карточки



/*Переменная для всех кнопок закрытия*/

const closeButtons = document.querySelectorAll('.popup__button-close');

/*Общая функция обработки нажатия на кнопки закрытия*/

closeButtons.forEach((button) => { 
    const popup = button.closest('.popup');                       // находим 1 раз ближайший к крестику попап
    button.addEventListener('click', () => closePopup(popup));    // устанавливаем обработчик закрытия на крестик
});


/*Общая функция открытия Popup*/

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

/*Общая функция закрытия Popup*/

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}


/*Открытие Popup профиля c указанными данными*/

profileEditButton.addEventListener('click', () => {
    openPopup(profileForm);
    
    profileInputName.value = profileName.textContent;
    profileInputTitle.value = profileTitle.textContent;
});


/*Сохранение внесенных изменений в ProfilePopup*/

profileEditForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    profileName.textContent = profileInputName.value
    profileTitle.textContent = profileInputTitle.value
  
    closePopup(profileForm);
});


/*Открытие формы добавления карточки*/

cardAddButton.addEventListener('click', () => {
    openPopup(popupCard);
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

const setImageClickHandler = (zoomCard) => {
    zoomCard.addEventListener('click', (evt) => {
        openPopup(popupImage);

        popupImg.src = zoomCard.src;
        popupImg.alt = zoomCard.alt;
        popupTitle.textContent = evt.target.closest('.elements__item').textContent;
    });
};



/*Функция добавления карточки*/
const elementsTemplate = document.querySelector('#elements-add').content;
const elementsList = document.querySelector('.elements__list');

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

/*Загрузка карточек из массива*/

initialCards.forEach((cardData) => {
    elementsList.append(createCard(cardData));
});
