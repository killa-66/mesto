export default class Card {
    constructor(data, myId, cardSelector, { handleCardClick, handleDeleteCard, handleAddLike, handleRemoveLike }) {
        this._data = data
        this._title = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.grid__image');
        this._handleCardClick = handleCardClick;
        this._cardId = data._id;
        this._myID = myId;
        this.likes = data.likes
        this._ownerId = data.owner ? data.owner._id : null;
        this._handleDeleteCard = handleDeleteCard;
        this._handleAddLike = handleAddLike;
        this._handleRemoveLike = handleRemoveLike;
    }
    // поиск нужного элемента в DOM
    _getTemplate() {
        const gridCardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.grid__card')
            .cloneNode(true);
        return gridCardElement;

    }
    setLikeButton() {
        this._element.querySelector('.grid__like').classList.add('grid__like_active');
    }

    deleteLikeButton() {
        this._element.querySelector('.grid__like').classList.remove('grid__like_active');
    }

    setCountLike(count) {
        this._element.querySelector('.grid__like_count').textContent = count;
    }


    _addLikeButton(evt) {
        if(evt.target.classList.contains('grid__like_active')) {
            this._handleRemoveLike(this._cardId, this.likes);
        } else {
            this._handleAddLike(this._cardId, this.likes)
        }
    }

    _initialLike() {
        const cardHasLike = this.likes.some((like) => {
            return like._id === this._myID
        })
        if(cardHasLike) {
            this.setLikeButton()
        }
    }
    // метод для добавления новой карточки
    _addNewCard() {
        const gridCard = this._getTemplate().cloneNode(true);
        const gridImage = this._cardImage;
        gridCard.querySelector('.grid__name').textContent = this._title;
        gridImage.src = this._link;
        gridImage.alt = this._title;
    }

    // метод добавления слушателей 
    _setEventListeners() {
        this._element.querySelector('.grid__like').addEventListener('click', (evt) => {
            this._addLikeButton(evt)
        });

        if(this._myID === this._ownerId) {
            this._element.querySelector('.grid__trash').addEventListener('click', () => {
                this._handleDeleteCard(this._element, this._cardId);
            });
        }

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._title, this._link);
        });
    }

    // генерация карточки
    generateCard() {
        this._data.owner._id !== this._myID ? this._element.querySelector('.grid__trash').style.display = 'none' : ''
        this._setEventListeners();
        this._cardImage.src = this._link;
        this._cardImage.alt = this._title;
        this.setCountLike(this.likes.length);
        this._element.querySelector('.grid__name').textContent = this._title;
        this._initialLike();
        return this._element;
    }
}