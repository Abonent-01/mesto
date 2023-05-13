(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__item_type_error",errorClass:"popup__item_type_error_visible"},e=document.querySelector(".popup_type_profile"),r=document.querySelector(".popup_type_card"),n=document.querySelector(".profile"),o=n.querySelector(".profile__button-edit"),i=n.querySelector(".profile__button-add"),u=document.querySelector(".elements__list"),a=n.querySelector(".profile__avatar"),c=document.querySelector(".popup_type_avatar");function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function f(t,e,r){return(e=p(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var y=function(){function t(e,r,n,o,i,u){var a=this,c=e.name,l=e.link,s=e.likes,p=e._id,y=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_openCard",(function(){a._onOpenPopup({name:a._name,link:a._link})})),f(this,"_deleteCard",(function(){a._handleDelete(a._cardId,a._card)})),this._name=c,this._link=l,this._cardTemplate=r,this._image=null,this._cardId=p,this._onOpenPopup=n,this._likesCounter=s.length,this._isLiked=s.some((function(t){return o===t._id})),this._isUserCard=y._id===o,this._handleDelete=i,this._handleLike=u}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".elements__item").cloneNode(!0)}},{key:"getCardInfo",value:function(){return{cardId:this._cardId,isLiked:this._isLiked}}},{key:"processLikes",value:function(t){this._isLiked?this._dislikeCard(t):this._likeCard(t)}},{key:"_likeCard",value:function(t){this._like.classList.add("elements__like_active"),this._likeCount.textContent=t.likes.length,this._isLiked=!0}},{key:"_dislikeCard",value:function(t){this._like.classList.remove("elements__like_active"),this._likeCount.textContent=t.likes.length,this._isLiked=!1}},{key:"_setEventListeners",value:function(){var t=this;this._card,this._like.addEventListener("click",(function(){return t._handleLike(t)})),this._isUserCard?this._deleteButton.addEventListener("click",this._deleteCard):this._deleteButton.remove(),this._image.addEventListener("click",this._openCard)}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._card.querySelector(".elements__title").textContent=this._name,this._like=this._card.querySelector(".elements__like"),this._likeCount=this._card.querySelector(".elements__like-counter"),this._likeCount.textContent=this._likesCounter,this._deleteButton=this._card.querySelector(".elements__delete"),this._isLiked&&(this._card,this._like.classList.add("elements__like_active")),this._image=this._card.querySelector(".elements__image"),this._image.src=this._link,this._image.alt=this._name,this._setEventListeners(),this._card}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_(n.key),n)}}function b(t,e,r){return(e=_(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===h(e)?e:String(e)}var m=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"_checkInputValidity",(function(t){t.validity.valid?n._hideInputError(t):n._showInputError(t,t.validationMessage)})),b(this,"_toggleButton",(function(){n._hasInvalidInputs()?(n._submitButton.classList.add(n._inactiveButtonClass),n._submitButton.disabled=!0):(n._submitButton.classList.remove(n._inactiveButtonClass),n._submitButton.disabled=!1)})),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,r=[{key:"enableValidation",value:function(){this._addInputListeners()}},{key:"_showInputError",value:function(t,e){var r=this._form.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),r.classList.add(this._errorClass),r.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_hasInvalidInputs",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_addInputListeners",value:function(){var t=this;this._inputList.forEach((function(e){return e.addEventListener("input",(function(){t._toggleButton(),t._checkInputValidity(e)}))}))}},{key:"resetValidationForm",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._inputList.forEach((function(r){t._hideInputError(r),e&&(r.value="")})),this._toggleButton()}}],r&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,k(n.key),n)}}function S(t,e,r){return(e=k(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function k(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}const w=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,"_handleEscClose",(function(t){"Escape"===t.key&&r.close()})),S(this,"_handleCloseByOverlay",(function(t){t.target.classList.contains("popup")&&r.close()})),S(this,"close",(function(){r._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",r._handleEscClose)})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__button-close")}var e,r;return e=t,(r=[{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleCloseByOverlay),this._popupCloseButton.addEventListener("click",this.close)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}const L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(n);if(o){var r=E(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__img"),e._subtitle=e._popup.querySelector(".popup__title-image"),e}return e=u,(r=[{key:"open",value:function(t){var e=t.name,r=t.link;C(E(u.prototype),"open",this).call(this),this._subtitle.textContent=e,this._image.src=r,this._image.alt=e}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,x(n.key),n)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},B.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function U(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}function x(t){var e=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===I(e)?e:String(e)}const A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(n);if(o){var r=R(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return U(t)}(this,t)});function u(t,e){var r,n,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),n=U(r=i.call(this,t)),a=function(t){r._submitCallback(t,r._getInputValues())},(o=x(o="_submitCallbackHandler"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r._submitCallback=e,r._popupForm=r._popup.querySelector(".popup__form"),r._submitButton=r._popupForm.querySelector(".popup__button-submit"),r._inputList=Array.from(r._popupForm.querySelectorAll(".popup__item")),r}return e=u,r=[{key:"_getInputValues",value:function(){return this._inputList.reduce((function(t,e){return t[e.name]=e.value,t}),{})}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.disabled=t,this._submitButton.textContent=e}},{key:"setEventListeners",value:function(){B(R(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._submitCallbackHandler)}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]||""}))}},{key:"close",value:function(){this._popupForm.reset(),B(R(u.prototype),"close",this).call(this)}}],r&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function V(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,M(n.key),n)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},F.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}function M(t){var e=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===D(e)?e:String(e)}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(n);if(o){var r=J(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return H(t)}(this,t)});function u(t,e){var r,n,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),n=H(r=i.call(this,t)),a=function(t){r._submitCallback(t,{cardId:r._cardId,card:r._card})},(o=M(o="_submitCallbackHandler"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r._submitCallback=e,r._popupForm=r._popup.querySelector(".popup__form"),r}return e=u,(r=[{key:"setEventListeners",value:function(){F(J(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._submitCallbackHandler)}},{key:"open",value:function(t,e){F(J(u.prototype),"open",this).call(this),this._cardId=t,this._card=e}}])&&V(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===$(o)?o:String(o)),n)}var o}const K=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=r}var e,r;return e=t,(r=[{key:"addItem",value:function(t){var e=this._renderer(t);this._container.prepend(e)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e.addItem(t)}))}}])&&G(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===Q(o)?o:String(o)),n)}var o}const X=function(){function t(e){var r=e.nameProfileSelector,n=e.infoProfileSelector,o=e.avatarProfileSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(r),this._userInfo=document.querySelector(n),this._avatar=document.querySelector(o),this._userId=""}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userInfo.textContent,userId:this._userId}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar,o=t._id;this._userName.textContent=e,this._userInfo.textContent=r,this._avatar.src=n,this._userId=o}}])&&W(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Y(t){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}function Z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==Y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===Y(o)?o:String(o)),n)}var o}function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var et=new(function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=r,this._headers=n}var e,r;return e=t,(r=[{key:"_checkStatus",value:function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkStatus)}},{key:"updateUserProfile",value:function(t){var e=t.name,r=t.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:r})}).then(this._checkStatus)}},{key:"updateUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:t}),headers:this._headers}).then(this._checkStatus)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkStatus)}},{key:"postCard",value:function(t){var e=t.title,r=t.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:r})}).then(this._checkStatus)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}},{key:"_plusLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkStatus)}},{key:"_minusLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}},{key:"likeCard",value:function(t){var e=t.cardId;return t.isLiked?this._minusLike(e):this._plusLike(e)}}])&&Z(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"502445fb-b5c0-4bb8-954f-20c41125ff94","Content-Type":"application/json"}}),rt=new X({nameProfileSelector:".profile__title",infoProfileSelector:".profile__subtitle",avatarProfileSelector:".profile__image"}),nt=new A(".popup_type_profile",(function(t,e){t.preventDefault(),nt.renderLoading(!0),et.updateUserProfile(e).then((function(t){rt.setUserInfo(t),nt.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){nt.renderLoading(!1,"Сохранить")}))})),ot=new A(".popup_type_card",(function(t,e){t.preventDefault(),ot.renderLoading(!0),et.postCard(e).then((function(t){ft.addItem(t),ot.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){ot.renderLoading(!1,"Создать")}))})),it=new A(".popup_type_avatar",(function(t,e){var r=e.link;t.preventDefault(),it.renderLoading(!0),et.updateUserAvatar(r).then((function(t){rt.setUserInfo(t),it.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){it.renderLoading(!1,"Сохранить")}))})),ut=new z(".popup_type_delete",(function(t,e){var r=e.cardId,n=e.card;t.preventDefault(),et.deleteCard(r).then((function(){n.remove(),ut.close()})).catch((function(t){console.log("Ошибка: ".concat(t))}))})),at=new L(".popup_type_image");nt.setEventListeners(),ot.setEventListeners(),it.setEventListeners(),at.setEventListeners(),ut.setEventListeners();var ct=new m(t,r),lt=new m(t,e),st=new m(t,c);ct.enableValidation(),lt.enableValidation(),st.enableValidation();var ft=new K({renderer:function(t){return new y(t,".template-card",(function(){return at.open(t)}),rt.getUserInfo().userId,(function(t,e){return ut.open(t,e)}),pt).generateCard()}},u);function pt(t){et.likeCard(t.getCardInfo()).then((function(e){return t.processLikes(e)})).catch((function(t){return console.log("Ошибка: ".concat(t))}))}Promise.all([et.getUserInfo(),et.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return tt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tt(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];rt.setUserInfo(o),ft.renderItems(i.reverse())})).catch((function(t){return console.log("Ошибка: ".concat(t))})),o.addEventListener("click",(function(){nt.open(),nt.setInputValues(rt.getUserInfo()),lt.resetValidationForm(!1)})),i.addEventListener("click",(function(){ot.open(),ct.resetValidationForm()})),a.addEventListener("click",(function(){it.open(),st.resetValidationForm()}))})();