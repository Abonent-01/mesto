class UserInfo {
  constructor({ nameProfileSelector, infoProfileSelector }) {
    this._userName = document.querySelector(nameProfileSelector);
    this._userInfo = document.querySelector(infoProfileSelector);
  }

  getUserInfo() {
    return {
      inputname: this._userName.textContent,
      inputabout: this._userInfo.textContent,
    };
  }

  setUserInfo({ inputname, inputabout }) {
    this._userName.textContent = inputname;
    this._userInfo.textContent = inputabout;
  }
};

export default UserInfo;
