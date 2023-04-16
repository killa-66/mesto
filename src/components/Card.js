export default class Card {
    constructor(data, myId, cardSelector, { handleCardClick, handleDeleteCard, handleAddLike, handleRemoveLike }) {
        this._data = data
        this._title = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
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
        this.gridCardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.grid__card')
            .cloneNode(true);
        this._cardImage = this.gridCardElement.querySelector('.grid__image');
        this._likeElement =  this.gridCardElement.querySelector('.grid__like')
        this.likeCounter = this.gridCardElement.querySelector('.grid__like_count')
        return this.gridCardElement;
    }

    deleteCard() {
        this.gridCardElement.remove();
    }
    generateCard() {
        this._getTemplate()
        this._data.owner._id !== this._myID ? this.gridCardElement.querySelector('.grid__trash').style.display = 'none' : ''
        this._setEventListeners();
        this._cardImage.src = this._link;
        this._cardImage.alt = this._title;
        this.gridCardElement.querySelector('.grid__name').textContent = this._title;
        this._initialLike();
        this.gridCardElement.cardInstance = this;
        return this.gridCardElement;
    }
    getCardId() {
        return this._cardId
    }

    handleToggleLike(res) {
        this._likeElement.classList.toggle('grid__like_active');
        this.likeCounter.textContent = res.likes.length;
    }
    toggleLike() {
        !this._likeElement.classList.contains('grid__like_active') ? this._handleAddLike(this) : this._handleRemoveLike(this)
    }

    _initialLike() {
        this.likeCounter.textContent = this.likes.length;
        const cardHasLike = this.likes.some((like) => {
            return like._id === this._myID
        })
        if(cardHasLike) {
            this._likeElement.classList.add('grid__like_active')
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
        this._likeElement.addEventListener('click', () => {
            // this._addLikeButton(this)
            this.toggleLike(this)
        });

        if(this._myID === this._ownerId) {
            this.gridCardElement.querySelector('.grid__trash').addEventListener('click', () => {
                this._handleDeleteCard(this.gridCardElement, this._cardId);
            });
        }

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._title, this._link);
        });
    }

    // генерация карточки

}