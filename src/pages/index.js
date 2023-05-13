import './index.css';

import {
  validationConfig,
  profilePopup,
  popupCard,
  popupAvatar,
  profileEditButton,
  cardAddButton,
  elementsList,
  profileAvatar,
} from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteConfirm from '../components/PopupDeleteConfirm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: '502445fb-b5c0-4bb8-954f-20c41125ff94',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({
  nameProfileSelector: '.profile__title',
  infoProfileSelector: '.profile__subtitle',
  avatarProfileSelector: '.profile__image',
});

const profilePopupClass = new PopupWithForm('.popup_type_profile', editFormSubmit);
const popupCardClass = new PopupWithForm('.popup_type_card', addFormSubmit);
const popupAvatarClass = new PopupWithForm('.popup_type_avatar', avatarFormSubmit);
const popupConfirmDeleteClass = new PopupDeleteConfirm('.popup_type_delete', deleteCard);
const popupImageClass = new PopupWithImage('.popup_type_image');

profilePopupClass.setEventListeners();
popupCardClass.setEventListeners();
popupAvatarClass.setEventListeners();
popupImageClass.setEventListeners();
popupConfirmDeleteClass.setEventListeners();



const popupCardValidation = new FormValidator(validationConfig, popupCard);
const profilePopupValidation = new FormValidator(validationConfig, profilePopup);
const popupAvatarValidation = new FormValidator(validationConfig, popupAvatar);
popupCardValidation.enableValidation();
profilePopupValidation.enableValidation();
popupAvatarValidation.enableValidation();

const cardSection = new Section(
  { renderer: (place) => getCardElement(place) },
  elementsList
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cardSection.renderItems(cards.reverse());
  })
  .catch((err) =>
    console.log(`Ошибка: ${err}`)
  );

function getCardElement(place) {
  const cardElement = new Card(place,
    '.template-card',
    () => popupImageClass.open(place),
    userInfo.getUserInfo().userId,
    (cardId, card) => popupConfirmDeleteClass.open(cardId, card),
    handleLike
  );
  return cardElement.generateCard();
}

function handleLike(card) {
  api
    .likeCard(card.getCardInfo())
    .then((res) => card.processLikes(res))
    .catch((err) => console.log(`Ошибка: ${err}`));
}

function editFormSubmit(evt, inputItems) {
  evt.preventDefault();
  profilePopupClass.renderLoading(true);
  api
    .updateUserProfile(inputItems)
    .then((data) => {
      userInfo.setUserInfo(data);
      profilePopupClass.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => {
      profilePopupClass.renderLoading(false, 'Сохранить');
    });
}

function addFormSubmit(evt, inputItems) {
  evt.preventDefault();
  popupCardClass.renderLoading(true);
  api
    .postCard(inputItems)
    .then((data) => {
      cardSection.addItem(data);
      popupCardClass.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => {
      popupCardClass.renderLoading(false, 'Создать');
    });
}

function deleteCard(evt, { cardId, card }) {
  evt.preventDefault();
  api
    .deleteCard(cardId)
    .then(() => {
      card.remove();
      popupConfirmDeleteClass.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}

function avatarFormSubmit(evt, { link }) {
  evt.preventDefault();
  popupAvatarClass.renderLoading(true);
  api
    .updateUserAvatar(link)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupAvatarClass.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => {
      popupAvatarClass.renderLoading(false, 'Сохранить');
    });
}

profileEditButton.addEventListener('click', () => {
  profilePopupClass.open();
  profilePopupClass.setInputValues(userInfo.getUserInfo());
  profilePopupValidation.resetValidationForm(false);
});

cardAddButton.addEventListener('click', () => {
  popupCardClass.open();
  popupCardValidation.resetValidationForm();
});

profileAvatar.addEventListener('click', () => {
  popupAvatarClass.open();
  popupAvatarValidation.resetValidationForm();
});