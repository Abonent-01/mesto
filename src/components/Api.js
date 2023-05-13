export default class Api {
  constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }  

getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkStatus);
  }

updateUserProfile({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkStatus);
  }

  updateUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      body: JSON.stringify({
        avatar,
      }),
      headers: this._headers,
    }).then(this._checkStatus);
  }


    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
      }).then(this._checkStatus);
    }

    postCard({ title, link }) {
      return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: title,
          link: link,
        }),
      }).then(this._checkStatus);
    }

    deleteCard(id) {
      return fetch(`${this._baseUrl}/cards/${id}`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkStatus);
    }

    _plusLike(id) {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: "PUT",
        headers: this._headers,
      }).then(this._checkStatus);
    }

    _minusLike(id) {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkStatus);
    }

    likeCard({ cardId, isLiked }) {
      return isLiked ? this._minusLike(cardId) : this._plusLike(cardId);
    }
}