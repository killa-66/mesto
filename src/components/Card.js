export default class Card {
    constructor(data, cardSelector, handlerCardClick) {
        this._title = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.grid__image');
        this._handleClick = handlerCardClick;
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

    // метод изменения кнопки лайка
    _clickLike() {
        this._element.querySelector('.grid__like').classList.toggle('grid__like_active');
    }

    // метод для удаления карточки 
    _deleteCard() {
        this._element.remove()
    }

    // метод для добавления новой карточки
    _addNewCard() {
        const gridCard = this._getTemplate().cloneNode(true);
        const gridImage = gridCard.querySelector('.grid__image');
        gridCard.querySelector('.grid__name').textContent = this._title;
        gridImage.src = this._link;
        gridImage.alt = this._title;
    }

    // метод добавления слушателей 
    _setEventListeners() {
        this._element.querySelector('.grid__like').addEventListener('click', this._clickLike.bind(this));

        this._element.querySelector('.grid__trash').addEventListener('click', this._deleteCard.bind(this));

        this._element.querySelector('.grid__image').addEventListener('click', (evt) => {
            this._handleClick(evt);
        });
    }

    // генерация карточки
    generateCard() {
        this._setEventListeners();
        this._cardImage.src = this._link;
        this._cardImage.alt = this._title;
        this._element.querySelector('.grid__name').textContent = this._title;
        return this._element;
    }
}