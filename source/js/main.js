/* eslint-disable no-console */
'use strict';

let body = document.body;
let authorButton = document.querySelector('.main-nav__button');
let closeButton = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');
let modalCard = document.querySelector('.modal__card');
let html = document.querySelector('html');

const SCROLL_PREVENTION = 'js-body-scroll-prevention';
const MODAL_OPENED = 'js-modal-opened';
const MODAL_CARD_OPENED = 'js-modal-card-opened';
const MODAL_CARD_FORWARD = 'modal__card--forward-move';
const MODAL_CARD_BACKWARD = 'modal__card--backward-move';

function initModal() {
  if (authorButton) {
    authorButton.addEventListener('click', authorButtonClickHandler);
  }
}

function authorButtonClickHandler() {
  openModal();
}

function openModal() {
  if (body) {
    body.classList.add(SCROLL_PREVENTION);
    html.classList.add(SCROLL_PREVENTION);
  }
  if (modal) {
    modal.classList.add(MODAL_OPENED);
  }
  if (modalCard) {
    modalCard.classList.add(MODAL_CARD_OPENED);
  }

  if (modalCard) {
    setTimeout(function () {
      modalCard.classList.add(MODAL_CARD_FORWARD);
    }, 300);
  }
  // подключаем обработчик нажатия на кнопку close (X)
  closeButton.addEventListener('click', closeHandler);
  // подключаем обработчик 'escape'
  window.addEventListener('keydown', escapeHandler);
  // подключаем обработчик клика по overlay
  document.addEventListener('click', overlayClickHandler);
}

function closeModal() {
  if (modalCard) {
    modalCard.classList.add(MODAL_CARD_BACKWARD);
  }

  setTimeout(function () {
    if (body.classList.contains(SCROLL_PREVENTION)) {
      body.classList.remove(SCROLL_PREVENTION);
      html.classList.remove(SCROLL_PREVENTION);
    }
    if (modal.classList.contains(MODAL_OPENED)) {
      modal.classList.remove(MODAL_OPENED);
    }

    if (modalCard.classList.contains(MODAL_CARD_OPENED)) {
      modalCard.classList.remove(MODAL_CARD_OPENED);
    }

    if (modalCard.classList.contains(MODAL_CARD_FORWARD)) {
      modalCard.classList.remove(MODAL_CARD_FORWARD);
    }

    if (modalCard.classList.contains(MODAL_CARD_BACKWARD)) {
      modalCard.classList.remove(MODAL_CARD_BACKWARD);
    }
  }, 350);

  // отключаем обработчик нажатия на кнопку close (X)
  closeButton.removeEventListener('click', closeHandler);

  // отключаем обработчик клика по overlay
  document.removeEventListener('click', overlayClickHandler);

  // отключаем обработчик 'escape'
  window.removeEventListener('keydown', escapeHandler);
}

// обработчики close (X)
function closeHandler() {
  closeModal();
}

// обработчики escape
function escapeHandler(evt) {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

// обработчик клика по overlay-области
function overlayClickHandler(evt) {
  const isModalWin = evt.target;
  if (isModalWin === modal) {
    closeModal();
  }
}

initModal();
