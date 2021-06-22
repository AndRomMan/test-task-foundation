/* eslint-disable no-console */
'use strict';

const CHECKBOX = 'checkbox-block__input';
const ZERO_LEVEL_ID = '0';
const ALL_ID = 'all-';
const ROOT_LIST = 'ul';

let submitButton = document.querySelector('.form__button');

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
  let parentArray = getParentElement(checkedInputArray);

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

function getParentElement(elementArray) {
  let parentArray = [];
  elementArray.forEach((element) => {
    parentArray.push(element.closest(ROOT_LIST));
  });
  return parentArray;
}

function getIdArray(elementArray) {
  let outIdArray = [];
  elementArray.forEach((element) => {
    outIdArray.push(element.id);
  });
  return outIdArray;
}

function getJoinedIdArray(childrenArray, parentArray) {
  let childrenIdArray = getIdArray(childrenArray);
  let parentIdArray = getIdArray(parentArray);
  let joinedArray = [...childrenIdArray, ...parentIdArray];
  let uniqueJoinedSet = new Set(joinedArray);
  // убираем лишние id: '0' и начинающиеся с 'all-'
  let filteredArray = getFilteredArray(uniqueJoinedSet);
  return filteredArray;
}

function getFilteredArray(inputSet) {
  inputSet.delete(ZERO_LEVEL_ID);
  inputSet.forEach((value) => {
    if (value.startsWith(ALL_ID)) inputSet.delete(value);
  });

  return Array.from(inputSet);
}

function clearForm(inputArray) {
  setTimeout(() => {
    inputArray.forEach((element) => {
      element.checked = false;
    });
  }, 1000);
}

function sendToServer(data) {
  console.log(data);
}
