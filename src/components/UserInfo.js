export default class UserInfo {
    constructor({ selectorUserName, selectorUserJob, selectorUserAvatar }) {
        this._username = document.querySelector(selectorUserName);
        this._userjob = document.querySelector(selectorUserJob);
        this._useravatar = document.querySelector(selectorUserAvatar);
    }

    getUserInfo() {
        return {
            name: this._username.textContent,
            about: this._userjob.textContent
        }
    }

    getUserId(id){
        this.myId = id;
    }

    setUserInfo({ name, about }) {
        this._username.textContent = name;
        this._userjob.textContent = about;
    }

    setUserAvatar({ avatar }) {
        this._useravatar.src = avatar;
    }
}