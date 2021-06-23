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
