export const  validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__item_type_error_visible'
};

export const profilePopup = document.querySelector('.popup_type_profile');
export const popupCard = document.querySelector('.popup_type_card');
export const profile = document.querySelector('.profile');
export const profileEditButton = profile.querySelector('.profile__button-edit');
export const cardAddButton = profile.querySelector('.profile__button-add');
export const elementsList = document.querySelector('.elements__list');
export const profileAvatar = profile.querySelector('.profile__avatar');
export const popupAvatar = document.querySelector('.popup_type_avatar');


/*
Токен: 502445fb-b5c0-4bb8-954f-20c41125ff94
Идентификатор группы: cohort-65
*/

/*Адрес сервера проекта Mesto: https://mesto.nomoreparties.co

    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  */