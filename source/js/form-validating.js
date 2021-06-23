/* eslint-disable no-console */
'use strict';

import {FORM_BUTTON, ALL_ID, CHECKBOX, ROOT_LIST, ZERO_LEVEL_ID} from './main.min.js';

let submitButton = document.querySelector(`.${FORM_BUTTON}`);

initFormSubmitButton();

function initFormSubmitButton() {
  if (submitButton) {
    submitButton.addEventListener('click', submitButtonClickHandler);
  }
}

function submitButtonClickHandler(evt) {
  evt.preventDefault();
  // находим все checked input
  let checkedInputArray = getCheckedInputArray();
  let parentArray = getParentArray(checkedInputArray);

  // получаем массив id родителей (списки) и детей (input)
  let idArray = getJoinedIdArray(checkedInputArray, parentArray);

  // делаем сброс отмеченных input
  clearForm(checkedInputArray);

  // отправляем данные на сервер
  sendToServer(idArray);
}

function getCheckedInputArray() {
  let checkBoxClass = `.${CHECKBOX}`;
  let checkedInputs = document.querySelectorAll(`${checkBoxClass}:checked`);
  return Array.from(checkedInputs);
}

function getParentArray(elementArray) {
  let parentArray = [];

  elementArray.forEach((element) => {
    getClosestParents(element, parentArray);
  });

  return parentArray;
}

function getClosestParents(element, parentArray) {
  let closestParent = element.closest(ROOT_LIST);
  parentArray.push(closestParent);

  if (closestParent.id !== '0') {
    let upToParentOfParent = closestParent.parentElement;
    getClosestParents(upToParentOfParent, parentArray);
  }
}

function getIdArray(elementArray) {
  let idArray = [];
  elementArray.forEach((element) => {
    idArray.push(element.id);
  });
  return idArray;
}

function getJoinedIdArray(childrenArray, parentArray) {
  let childrenIdArray = getIdArray(childrenArray);
  let parentIdArray = getIdArray(parentArray);
  let joinedArray = [...childrenIdArray, ...parentIdArray];
  let uniqueJoinedSet = new Set(joinedArray);
  // убираем лишние id: '0' и начинающиеся с 'all-'
  let filteredArray = getFilteredNumberArray(uniqueJoinedSet);
  return filteredArray;
}

function getFilteredNumberArray(inputSet) {
  inputSet.delete(ZERO_LEVEL_ID);

  inputSet.forEach((value) => {
    if (value.startsWith(ALL_ID)) {
      inputSet.delete(value);
    }
  });

  return Array.from(inputSet).map((elem) => Number(elem));
}

function clearForm(inputArray) {
  setTimeout(() => {
    inputArray.forEach((element) => {
      element.checked = false;
    });
  }, 1000);
}

function sendToServer(data) {
  if (data.length === 0) {
    console.log('Нет данных для отправки на сервер');
  } else {
    console.log(data);
  }
}
