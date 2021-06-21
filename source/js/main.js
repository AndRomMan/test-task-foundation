/* eslint-disable no-console */
'use strict';

// import {groups} from './groups.min.js';
// import {flatArray} from './flat-array.min.js';
// import {checkForm} from './check-form.min.js';

// let rootList = document.querySelector('.form__list');
let rootList = document.querySelector('ul[id="0"]');
// console.log(rootList);

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

// Удаление дубликатов из массива
// let array = [1, 3, 3, 1, 4, 5, 6, 6, 7, 7, 7];
// let uniqueSet = new Set(array);
// let uniqueArray = Array.from(uniqueSet);
// console.log(uniqueArray);
