/* eslint-disable no-console */
'use strict';

// FIXME общие переменные вынести в main.js перед конкантенацией

// import {groups} from './groups.min.js';
// import {flatArray} from './flat-array.min.js';
// import {checkForm} from './form-validating.min.js';

const MAIN_ROOT_LIST = 'ul[id="0"]';
let mainRootList = document.querySelector(MAIN_ROOT_LIST);
// console.log(mainRootList);

// data атрибуты
// console.log(rootList.dataset.list);
// console.log(typeof +rootList.dataset.list);

// 1 К root листу будем добавлять узлы первого уровня
//  родительские(parent) и одиночные(single)

// 2 К single узлу добавляем класс
// checkbox-block--single

// 3 К checkbox-block узлу "все" добавляем
// id=all + номер id родителя
// checkbox-block__description = "Все " + name.toLowerCase() родителя
