class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl
        this.headers = headers;
    }

    // setId(id) {
    //     this.id = id;
    // }
    getInitialCards() {
        return fetch(this.baseUrl + '/cards', {
            method: 'GET',
            headers: this.headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } 
            return Promise.reject(`Error ${res.status}`)
        })
    }

    getUserInfo() {
        return fetch(this.baseUrl + '/users/me', {
            method: 'GET',
            headers: this.headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } 
            return Promise.reject(`Error ${res.status}`)
        })
    }

    postNewCard({ name, link }) {
        return fetch(this.baseUrl + '/cards', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Error ${res.status}`)
            })
    }

    deleteCard(cardId){
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error ${res.status}`)
            })
            .catch((error) => {
                console.log("Network error:", error);
                return Promise.reject("Failed to fetch");
            });
    }

    patchUserInfo({ name, about }) {
        return fetch(this.baseUrl + '/users/me', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Error ${res.status}`)
            })
    }

    patchAvatarInfo({avatar}) {
        return fetch(this.baseUrl + '/users/me/avatar', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: avatar
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Error ${res.status}`)
            })
    }

    putLike(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this.headers
        })
        .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Error ${res.status}`)
            })
    }

    deleteLike(cardId) {
        return fetch((`${this.baseUrl}/cards/${cardId}/likes`), {
            method: "DELETE",
            headers: this.headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Error ${res.status}`)
            })
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
        authorization: '5a422b60-2df4-4871-b609-57e249cc283e',
        'Content-Type': 'application/json'
    }
})