import "./index.css";

import {
  validationConfig,
  initialCards,
  profilePopup,
  popupCard,
  profileEditButton,
  cardAddButton,
  elementsList,
} from "../utils/constants.js";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

const profilePopupClass = new PopupWithForm(".popup_type_profile", editFormSubmit);
const popupCardClass = new PopupWithForm(".popup_type_card", addFormSubmit);
const popupImageClass = new PopupWithImage(".popup_type_image");
profilePopupClass.setEventListeners();
popupCardClass.setEventListeners();
popupImageClass.setEventListeners();

const userInfo = new UserInfo({
  nameProfileSelector: ".profile__title",
  infoProfileSelector: ".profile__subtitle",
});

const popupCardValidation = new FormValidator(validationConfig, popupCard);
const profilePopupValidation = new FormValidator(validationConfig, profilePopup);
popupCardValidation.enableValidation();
profilePopupValidation.enableValidation();

const сardSection = new Section(
  {
    items: initialCards,
    renderer: (place) => {
      const card = getCardElement(place);
      сardSection.addItem(card);
    },
  },
  elementsList
);
сardSection.renderItems();

function getCardElement(place) {
  const cardElement = new Card(place, ".template-card", () =>
    popupImageClass.open(place)
  );
  return cardElement.generateCard();
}

function editFormSubmit(evt, inputItems) {
  evt.preventDefault();
  userInfo.setUserInfo(inputItems);
  profilePopupClass.close();
}

function addFormSubmit(evt, inputItems) {
  evt.preventDefault();
  const card = getCardElement(inputItems);
  сardSection.addItem(card);
  popupCardClass.close();
};

profileEditButton.addEventListener("click", () => {
  profilePopupClass.open(userInfo.getUserInfo());
  profilePopupClass.setInputValues(userInfo.getUserInfo());
  profilePopupValidation.resetValidationForm();
});

cardAddButton.addEventListener("click", () => {
  popupCardClass.open();
  popupCardValidation.resetValidationForm();
});