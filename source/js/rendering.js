/* eslint-disable no-console */
'use strict';

// import {componentFlatArray} from './flat-array.min.js';
import {componentFlatArray} from './get-flat-array.min.js';

const ALL_ID = 'all-';
const LIST_NOT_FOUND = 'not found';
const OUTER_TYPE = 'outer';
const INNER_TYPE = 'inner';

const MAIN_ROOT_LIST = 'ul[id="0"]';
const mainRootList = document.querySelector(MAIN_ROOT_LIST);

const INNER_BOX_FIELD_TEMPLATE = '#inner_box_form_field';
const innerBoxFieldTemplate = document.querySelector(INNER_BOX_FIELD_TEMPLATE);

const INNER_BOX_ITEM_TEMPLATE = '#inner_box_item';
const innerBoxItemTemplate = document.querySelector(INNER_BOX_ITEM_TEMPLATE);

const OUTER_BOX_FIELD_TEMPLATE = '#outer_box_form_field';
const outerBoxFieldTemplate = document.querySelector(OUTER_BOX_FIELD_TEMPLATE);

const OUTER_BOX_ITEM_TEMPLATE = '#outer_box_item';
const outerBoxItemTemplate = document.querySelector(OUTER_BOX_ITEM_TEMPLATE);

const SINGLE_FIELD_TEMPLATE = '#single_form_field';
const singleFieldTemplate = document.querySelector(SINGLE_FIELD_TEMPLATE);

let components = [];

if (componentFlatArray) {
  components = componentFlatArray;
}

createHtmlStructure(components);

function createHtmlStructure(componentArray) {
  // создаем фрагмент HTML структуры,
  // которую будем добавлять в корневой список
  let fragment = document.createDocumentFragment();

  componentArray.forEach((obj) => {
    let {parentId, id, name, children} = obj;

    if (parentId === 0 && children === false) {
      let elementSingleField = createSingleField(id, name);
      setFormField(elementSingleField, fragment);
    }

    if (parentId === 0 && children === true) {
      let elementOuterBoxField = createOuterBoxField(id, name);
      setFormField(elementOuterBoxField, fragment);
    }

    if (parentId !== 0 && children === true) {
      // определим существует ли родительский список
      let typeOfParentBox = getTypeOfParentBox(parentId, fragment);

      if (typeOfParentBox !== LIST_NOT_FOUND) {
        let innerBoxField = createInnerBoxField(id, name);
        setComponent(innerBoxField, fragment, parentId);
      }
    }

    if (parentId !== 0 && children === false) {
      // определим в какой список: внешний (outer) или вложенный (inner)
      // пойдет элемент и существует ли родительский список
      let typeOfParentBox = getTypeOfParentBox(parentId, fragment);

      if (typeOfParentBox === OUTER_TYPE) {
        let outerBoxItem = createOuterBoxItem(id, name);
        setComponent(outerBoxItem, fragment, parentId);
      }

      if (typeOfParentBox === INNER_TYPE) {
        let innerBoxItem = createInnerBoxItem(id, name);
        setComponent(innerBoxItem, fragment, parentId);
      }
    }
  });

  // вставка собранного фрагмента в корневой список
  mainRootList.append(fragment);

  // очищаем массив компонентов
  components.length = 0;
}

// поле формы вставляем в корневой лист (id="0")
function setFormField(element, fragment) {
  fragment.append(element);
}

// создаем поле формы в корневом листе (id="0")
function createSingleField(id, name) {
  let element = singleFieldTemplate.cloneNode(true).content;
  return setIdAndLabel(element, id, name);
}

function createOuterBoxField(id, name) {
  let element = outerBoxFieldTemplate.cloneNode(true).content;
  return setIdLabelAndSummary(element, id, name);
}

// определяем тип родительского списка и проверяем на его наличие
function getTypeOfParentBox(parentId, fragment) {
  let typeOfList = LIST_NOT_FOUND;
  let parentList = fragment.querySelector(`ul[id="${String(parentId)}"]`);
  if (parentList) {
    typeOfList = parentList.dataset.list;
  }

  if (typeOfList === LIST_NOT_FOUND) {
    console.log(`не найден родительский список id=${parentId}`);
  }

  return typeOfList;
}

// создаем элемент внешний (inner) списка
function createOuterBoxItem(id, name) {
  let element = outerBoxItemTemplate.cloneNode(true).content;
  return setIdAndLabel(element, id, name);
}

// создаем элемент внешнего(outer) списка
function createInnerBoxItem(id, name) {
  let element = innerBoxItemTemplate.cloneNode(true).content;
  return setIdAndLabel(element, id, name);
}

// создаем элемент корневого (id="0") списка
function createInnerBoxField(id, name) {
  let element = innerBoxFieldTemplate.cloneNode(true).content;
  return setIdLabelAndSummary(element, id, name);
}

// установка необходимых атрибутов
function setIdAndLabel(element, id, name) {
  let input = element.querySelector('input');
  input.id = String(id);

  let label = element.querySelector('label');
  label.setAttribute('for', id);
  label.textContent = name;

  return element;
}

// установка необходимых атрибутов
function setIdLabelAndSummary(element, id, name) {
  let summary = element.querySelector('summary');
  summary.textContent = name;

  let ul = element.querySelector('ul');
  ul.id = id;

  let input = element.querySelector('input');
  let inputId = ALL_ID + String(id);
  input.id = inputId;

  let label = element.querySelector('label');
  label.setAttribute('for', inputId);
  label.textContent = `Все ${name.toLowerCase()}`;

  return element;
}

// установить элемент в нужную позицию относительно его родителя (parentId)
// во фрагменте
function setComponent(element, fragment, parentId) {
  let parentList = fragment.querySelector(`ul[id="${String(parentId)}"]`);
  parentList.append(element);
}
