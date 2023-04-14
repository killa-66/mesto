(()=>{"use strict";var e=document.querySelector(".profile"),t=document.getElementById("popupEditProfile"),r=document.getElementById("name"),n=document.getElementById("job"),o=e.querySelector(".profile__open"),i=document.getElementById("popupAddCard"),u=document.querySelector(".profile__add"),a=i.querySelector(".form"),c=t.querySelector(".form"),l=document.querySelector("#popupEditAvatar"),s=document.querySelector(".profile__container"),f=l.querySelector(".form"),p={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save",inactiveButtonClass:"form__save_inactive",inputErrorClass:"form__input-error",errorClass:"form__input-error_active"};function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var h=function(){function e(t,r,n,o){var i=o.handleCardClick,u=o.handleDeleteCard,a=o.handleAddLike,c=o.handleRemoveLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._title=t.name,this._link=t.link,this._cardSelector=n,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".grid__image"),this._handleCardClick=i,this._cardId=t._id,this._myID=r,this._likes=t.likes,this._ownerId=t.owner?t.owner._id:null,this._handleDeleteCard=u,this._handleAddLike=a,this._handleRemoveLike=c}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".grid__card").cloneNode(!0)}},{key:"clickLike",value:function(){this._element.querySelector(".grid__like").classList.toggle("grid__like_active")}},{key:"deleteItem",value:function(){this._element.remove(),this._element=null}},{key:"setLikeButton",value:function(){this._element.querySelector(".grid__like").classList.add("grid__like_active")}},{key:"deleteLikeButton",value:function(){this._element.querySelector(".grid__like").classList.remove("grid__like_active")}},{key:"setCountLike",value:function(e){this._element.querySelector(".grid__like_count").textContent=e}},{key:"_addLikeButton",value:function(e){e.target.classList.contains("grid__like_active")?this._handleRemoveLike(this._cardId):this._handleAddLike(this._cardId)}},{key:"_initialLike",value:function(){var e=this;this._likes.some((function(t){return t._id===e._myID}))&&this.setLikeButton()}},{key:"_addNewCard",value:function(){var e=this._getTemplate().cloneNode(!0),t=this._cardImage;e.querySelector(".grid__name").textContent=this._title,t.src=this._link,t.alt=this._title}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".grid__like").addEventListener("click",(function(t){e._addLikeButton(t)})),this._myID===this._ownerId&&this._element.querySelector(".grid__trash").addEventListener("click",(function(){e._handleDeleteCard()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._title,e._link)}))}},{key:"generateCard",value:function(){return this._data.owner._id!==this._myID&&(this._element.querySelector(".grid__trash").style.display="none"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._title,this.setCountLike(this._likes.length),this._element.querySelector(".grid__name").textContent=this._title,this._initialLike(),this._element}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}var b=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=r,this._submitButton=this._form.closest(this._formSelector).querySelector(this._submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var t,r;return t=e,(r=[{key:"_showInputError",value:function(){var e=this._form.closest(this._formSelector).querySelector(".".concat(this._inputElement.id,"-error"));e.textContent=this._inputElement.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(){var e=this._form.closest(this._formSelector).querySelector(".".concat(this._inputElement.id,"-error"));e.classList.remove(this._errorClass),e.textContent=" "}},{key:"_checkInputValidity",value:function(){this._inputElement.validity.valid?this._hideInputError():this._showInputError()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"blockButtonOpened",value:function(){this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveButtonClass)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.blockButtonOpened():(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._inputElement=t,e._checkInputValidity(),e._toggleButtonState()}))}))}},{key:"resetErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._inputElement=t,e._hideInputError()}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}var g=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,E(n.key),n)}}function E(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===S(t)?t:String(t)}var j=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.close()},(n=E(n="_handlerEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close")}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handlerEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handlerEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},C.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(n);if(o){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._cardImage=t._popup.querySelector(".popup__image"),t._cardName=t._popup.querySelector(".popup__name"),t}return t=u,(r=[{key:"open",value:function(e){C(I(u.prototype),"open",this).call(this),this._title=e.name,this._link=e.link,this._cardImage.src=this._link,this._cardImage.alt=this._title,this._cardName.textContent=this._title}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(j);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},U.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(n);if(o){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._callback=t,r._inputList=r._popup.querySelectorAll(".form__input"),r._submitButtom=r._popup.querySelector(".form__save"),r._form=r._popup.querySelector(".form"),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;U(D(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callback(e._getInputValues())}))}},{key:"close",value:function(){U(D(u.prototype),"close",this).call(this),this._form.reset()}}])&&T(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(j);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===x(o)?o:String(o)),n)}var o}var V=function(){function e(t){var r=t.selectorUserName,n=t.selectorUserJob,o=t.selectorUserAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._username=document.querySelector(r),this._userjob=document.querySelector(n),this._useravatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._username.textContent,about:this._userjob.textContent}}},{key:"getUserId",value:function(e){this.myId=e}},{key:"setUserInfo",value:function(e){var t=e.name,r=e.about;this._username.textContent=t,this._userjob.textContent=r}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._useravatar.src=t}}])&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==J(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===J(o)?o:String(o)),n)}var o}var H=new(function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=r,this.headers=n}var t,r;return t=e,(r=[{key:"setId",value:function(e){this.id=e}},{key:"getInitialCards",value:function(){return fetch(this.baseUrl+"/cards",{method:"GET",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch(this.baseUrl+"/users/me",{method:"GET",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}))}},{key:"postNewCard",value:function(e){var t=e.name,r=e.link;return fetch(this.baseUrl+"/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:t,link:r})}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}))}},{key:"deleteCard",value:function(){return fetch("".concat(this.baseUrl,"/cards/").concat(this.id),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}))}},{key:"patchUserInfo",value:function(e){var t=e.name,r=e.about;return fetch(this.baseUrl+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t,about:r})}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}))}},{key:"patchAvatarInfo",value:function(e){var t=e.avatar;return fetch(this.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}))}},{key:"putLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this.headers})}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this.headers})}}])&&G(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"5a422b60-2df4-4871-b609-57e249cc283e","Content-Type":"application/json"}});function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==z(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===z(o)?o:String(o)),n)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},F.apply(this,arguments)}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(n);if(o){var r=Q(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._deleteButtom=r._popup.querySelector(".form__save"),r._callback=t,r}return t=u,(r=[{key:"setEventListeners",value:function(){F(Q(u.prototype),"setEventListeners",this).call(this),this._deleteButtom.addEventListener("mousedown",this._callback)}},{key:"setCardDeletionCallback",value:function(e){this._cardDeletionCallback=e}},{key:"open",value:function(e){this._card=e,F(Q(u.prototype),"open",this).call(this)}}])&&M(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(j),X=new b(p,c),Y=new b(p,a),Z=new A("#popupEditProfile",(function(e){ae(!0),H.patchUserInfo(e).then((function(e){})).finally((function(){ne.setUserInfo(e),ae(!1,"Сохранить"),Z.close()}))})),$=new A("#popupAddCard",(function(e){ae(!0),H.postNewCard(e).then((function(e){var t=ue(e,".grid-template",ne.myId);ie.prependItem(t)})).finally((function(){ae(!1,"Создать"),$.close()}))})),ee=new A("#popupEditAvatar",(function(e){ae(!0),H.patchAvatarInfo(e).then((function(t){ne.setUserAvatar(e)})).finally((function(){ae(!1,"Сохранить"),ee.close()}))})),te=new b(p,f),re=new B("#popupPhotoCard"),ne=new V({selectorUserName:".profile__name",selectorUserJob:".profile__profession",selectorUserAvatar:".profile__avatar"}),oe=new W("#popupDeleteCard",(function(){ae(!0),H.deleteCard().then((function(){oe._card.deleteItem()})).catch((function(e){console.log(e)})).finally((function(){ae(!1,"Сохранить"),oe.close()}))}));H.getUserInfo().then((function(e){ne.setUserInfo(e),ne.setUserAvatar(e),ne.getUserId(e._id)}));var ie=new g((function(e){var t=ue(e,".grid-template",ne.myID);ie.addItem(t)}),".grid");function ue(e,t,r){var n=new h(e,ne.myId,t,{handleCardClick:function(){re.open({name:e.name,link:e.link})},handleDeleteCard:function(){oe.open(n),H.setId(e._id),oe.setCardDeletionCallback((function(){return n.deleteItem()}))},handleAddLike:function(e){H.putLike(e).then((function(){n.setLikeButton(),n._likes.push(""),n.setCountLike(n._likes.length)}))},handleRemoveLike:function(e){H.deleteLike(e).then((function(){n.deleteLikeButton(),n._likes.pop(""),n.setCountLike(n._likes.length)}))}});return n.generateCard()}function ae(e,t){var r=document.querySelector(".popup_opened").querySelector(".form__save");e?(r.textContent="Сохранение...",r.disabled=!0):(r.disabled=!1,r.textContent=t)}H.getInitialCards().then((function(e){ie.renderItems(e)})).catch((function(e){console.log("Ошибка:",e)})),o.addEventListener("click",(function(){var e=ne.getUserInfo(),t=e.name,o=e.about;r.value=t,n.value=o,Z.open(),X.resetErrors()})),u.addEventListener("click",(function(){$.open(),Y.blockButtonOpened(),Y.resetErrors()})),s.addEventListener("click",(function(){ee.open(),te.blockButtonOpened(),te.resetErrors()})),$.setEventListeners(),Z.setEventListeners(),re.setEventListeners(),ee.setEventListeners(),X.enableValidation(),Y.enableValidation(),te.enableValidation(),oe.setEventListeners()})();