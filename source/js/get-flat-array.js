/* eslint-disable no-console */
'use strict';

import {groups as groupsFromBackend} from './groups.min.js';

function getComponentFlatArray(incomingArray) {
  let componentFlatArray = [];
  // id коневого списка компонентов
  let parentId = 0;

  getFlatArray(incomingArray, parentId, componentFlatArray);
  // сортируем выходной массив по parentId
  sortedByParentIdArray(componentFlatArray);
  return componentFlatArray;
}

function getFlatArray(innerArray, parentId, targetArray) {
  innerArray.forEach((treeElement) => {
    let flatArrayElement = new Node(treeElement, parentId);
    targetArray.push(flatArrayElement);
    let newParentId = treeElement['id'];

    if (treeElement['groups'].length !== 0) {
      getFlatArray(treeElement['groups'], newParentId, targetArray);
    }
  });
}

// конструктор нового элемента для плоского массива
function Node(currentObject, parentId) {
  let {id, name, groups} = currentObject;
  this.parentId = parentId;
  this.id = id;
  this.name = name;
  if (groups.length === 0) {
    this.children = false;
  } else {
    this.children = true;
  }
}

function sortedByParentIdArray(inputArray) {
  inputArray.sort(function (a, b) {
    return a.parentId - b.parentId;
  });
  return inputArray;
}

let componentFlatArray = getComponentFlatArray(groupsFromBackend);

export {componentFlatArray};
