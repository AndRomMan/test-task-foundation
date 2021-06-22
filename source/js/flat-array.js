/* eslint-disable no-console */
'use strict';

const flatArray = [
  {
    parentId: 0,
    id: 1,
    name: 'Дети',
    children: true,
  },
  {
    parentId: 0,
    id: 13,
    name: 'Профессиональные сообщества',
    children: false,
  },
  {
    parentId: 0,
    id: 14,
    name: 'Местные сообщества',
    children: false,
  },
  {
    parentId: 0,
    id: 15,
    name: 'Религиозные общины',
    children: false,
  },
  {
    parentId: 1,
    id: 2,
    name: 'Имеющие редкие заболевания',
    children: true,
  },
  {
    parentId: 1,
    id: 10,
    name: 'С инвалидностью',
    children: false,
  },
  {
    parentId: 1,
    id: 11,
    name: 'ВИЧ-положительные',
    children: false,
  },
  {
    parentId: 2,
    id: 3,
    name: 'Spina Bifida',
    children: false,
  },
  {
    parentId: 2,
    id: 4,
    name: 'Буллёзный эпидермолиз',
    children: false,
  },
  {
    parentId: 2,
    id: 5,
    name: 'Гемофилия',
    children: false,
  },
];

export {flatArray};
