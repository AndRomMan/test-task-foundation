/* eslint-disable no-console */
'use strict';

let submitButton = document.querySelector('.form__button');

const CHECKBOX = 'checkbox-block__input';
const ZERO_LEVEL_ID = '0';
const ALL_ID = 'all-';

function initFormSubmitButton() {
  if (submitButton) {
    submitButton.addEventListener('click', submitButtonClickHandler);
  }
}

function submitButtonClickHandler(evt) {
  evt.preventDefault();
  // находим все checked input
  let checkedInputArray = getCheckedInputArray();
  // FIXME убрать console.log
  console.log(checkedInputArray);
  let parentArray = findParentElement(checkedInputArray);
  // FIXME убрать console.log
  console.log(parentArray);

  // получаем массив id родителей (списки) и детей (input)
  let idArray = getJoinedIdArray(checkedInputArray, parentArray);

  // FIXME восстановить сброс формы
  // делаем сброс отмеченных input
  // clearForm(checkedInputArray);

  // отправляем данные на сервер
  sendToServer(idArray);
}

function getCheckedInputArray() {
  let checkBoxClass = `.${CHECKBOX}`;
  let checkedInputs = document.querySelectorAll(`${checkBoxClass}:checked`);
  return Array.from(checkedInputs);
}

function findParentElement(elementArray) {
  let parentArray = [];
  elementArray.forEach((element) => {
    parentArray.push(element.closest('ul'));
  });
  return parentArray;
}

function getJoinedIdArray(childrenArray, parentArray) {
  let childrenIdArray = getIdArray(childrenArray);
  let parentIdArray = getIdArray(parentArray);
  let joinedArray = [...childrenIdArray, ...parentIdArray];
  let uniqueJoinedSet = new Set(joinedArray);
  // убираем лишние id
  let filteredArray = getFilteredArray(uniqueJoinedSet);

  // let joinedArray = parentIdArray.concat(childrenIdArray);

  return filteredArray;
}

function getIdArray(elementArray) {
  let outIdArray = [];
  elementArray.forEach((element) => {
    outIdArray.push(element.id);
  });
  return outIdArray;
}

function getFilteredArray(inputSet) {
  inputSet.delete(ZERO_LEVEL_ID);
  inputSet.forEach((value) => {
    console.log(value);
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

initFormSubmitButton();
// export {};

// глубокое клонирование
// const cloned = ele.cloneNode(true);
