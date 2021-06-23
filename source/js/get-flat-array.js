/* eslint-disable no-console */
'use strict';

const groupsFromBackend = [
  {
    id: 1,
    name: 'Дети',
    groups: [
      {
        id: 2,
        name: 'Имеющие редкие заболевания',
        groups: [
          {
            id: 3,
            name: 'Spina Bifida',
            groups: [],
          },
          {
            id: 4,
            name: 'Буллёзный эпидермолиз',
            groups: [],
          },
          {
            id: 5,
            name: 'Гемофилия',
            groups: [],
          },
        ],
      },
      {
        id: 6,
        name: 'Имеющие тяжелые заболевания',
        groups: [
          {
            id: 7,
            name: 'Синдром Лежена',
            groups: [],
          },
          {
            id: 8,
            name: 'Синдром Ретта',
            groups: [],
          },
          {
            id: 9,
            name: 'Эктодермальная ангидротическая дисплазия',
            groups: [],
          },
        ],
      },
      {
        id: 10,
        name: 'С инвалидностью',
        groups: [],
      },
      {
        id: 11,
        name: 'ВИЧ-положительные',
        groups: [],
      },
      {
        id: 12,
        name: 'Мигранты и беженцы',
        groups: [],
      },
    ],
  },
  {
    id: 13,
    name: 'Профессиональные сообщества',
    groups: [],
  },
  {
    id: 14,
    name: 'Местные сообщества',
    groups: [],
  },
  {
    id: 15,
    name: 'Религиозные общины',
    groups: [],
  },
];

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
// componentFlatArray.forEach((element) => {
//   console.log(element);
// });

export {componentFlatArray};
