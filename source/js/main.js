/* eslint-disable no-console */
'use strict';

let body = document.body;

const groups = [
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

console.log(groups);
