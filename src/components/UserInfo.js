export default class UserInfo {
    constructor({ selectorUserName, selectorUserJob }) {
        this._username = document.querySelector(selectorUserName);
        this._userjob = document.querySelector(selectorUserJob);
    }

    getUserInfo() {
        return {
            username: this._username.textContent,
            userjob: this._userjob.textContent
        }
    }

    setUserInfo(inputValues) {
        this._username.textContent = inputValues.username;
        this._userjob.textContent = inputValues.userjob;
    }
}