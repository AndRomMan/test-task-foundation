/* eslint-disable no-console */
'use strict';

import {ALL_ID, CHECKBOX, CHECKBOX_INPUT, ROOT_LIST} from './main.min.js';

let cheboxForAllInputsList = document.querySelectorAll(`.${CHECKBOX_INPUT}[id^=${ALL_ID}]`);

initCheckboxesForAll();

function initCheckboxesForAll() {
  if (cheboxForAllInputsList) {
    cheboxForAllInputsList.forEach((element) => {
      element.addEventListener('change', checkBoxChangeHandler);
    });
  }
}

function checkBoxChangeHandler(evt) {
  let targetCheckbox = evt.target;
  if (targetCheckbox.checked) {
    setChildrenCheckboxes(targetCheckbox);
  } else if (!targetCheckbox.checked) {
    unsetChildrenCheckboxes(targetCheckbox);
  }
}

function setChildrenCheckboxes(inputChild) {
  let parentList = getParentList(inputChild);
  let listItems = getChildren(parentList);
  setCheckboxes(listItems);
}

function unsetChildrenCheckboxes(inputChild) {
  let parentList = getParentList(inputChild);
  let listItems = getChildren(parentList);
  unsetCheckboxes(listItems);
}

function getParentList(child) {
  return child.closest(ROOT_LIST);
}

function getChildren(parent) {
  return parent.querySelectorAll(`.${CHECKBOX}`);
}

function setCheckboxes(items) {
  items.forEach((element) => {
    element.checked = true;
  });
}

function unsetCheckboxes(items) {
  items.forEach((element) => {
    element.checked = false;
  });
}
