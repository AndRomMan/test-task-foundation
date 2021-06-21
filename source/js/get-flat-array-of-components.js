/* eslint-disable no-console */
'use strict';

const MAIN_ROOT_LIST = 'ul[id="0"]';
const CHECKBOX = 'checkbox-block__input';
const ROOT_LIST = 'ul';
const ALL_ID = 'all-';

let mainRootList = document.querySelector(MAIN_ROOT_LIST);

let ComponentObject = function (parentId, id, name, children) {
  this.parentId = parentId;
  this.id = id;
  this.name = name;
  this.children = children;
};

let componentArray = getComponentArray(mainRootList);

function getComponentArray(root) {
  let parentElements = getParentElements(root);
  let childrenElements = getChildrenElements(root);
  let allElements = [...parentElements, ...childrenElements];

  return sortArray(allElements);
}

function getParentElements(root) {
  let outParentArray = [];

  let elements = root.querySelectorAll(ROOT_LIST);
  elements.forEach((element) => {
    let id = element.id;
    let parentId = getParentList(element).id;
    let name = getSummaryName(element);
    let children = true;
    let componentObject = new ComponentObject(parentId, id, name, children);
    outParentArray.push(componentObject);
  });

  return outParentArray;
}

function getChildrenElements(root) {
  let outParentArray = [];

  let elements = root.querySelectorAll(`.${CHECKBOX}`);
  elements.forEach((element) => {
    let id = element.id;
    if (id.startsWith(ALL_ID)) return;
    let parentId = element.closest(ROOT_LIST).id;
    let name = getLabelName(element);
    let children = false;
    let componentObject = new ComponentObject(parentId, id, name, children);
    outParentArray.push(componentObject);
  });

  return outParentArray;
}

function getLabelName(element) {
  return element.nextElementSibling.textContent.trim();
}

function getSummaryName(element) {
  return element.previousElementSibling.textContent.trim();
}

function getParentList(element) {
  return element.parentElement.closest(ROOT_LIST);
}

function sortArray(inputArray) {
  inputArray.sort(function (a, b) {
    return a.parentId - b.parentId;
  });
  return inputArray;
}
