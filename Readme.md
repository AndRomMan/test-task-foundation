# **Проект: тестовое задание для [БФ "Нужна помощь"](https://nuzhnapomosh.ru/)**

* * *
Разработчик: **Роман Демин**

- **[Профиль на htmlacademy.ru](https://htmlacademy.ru/profile/id219593)**
- **[CV на career.habr.com](https://career.habr.com/andromman)**

* * *
* Ссылка на страницу в интернете: **[Целевые группы](https://andromman.github.io/foundation/build/)**

* Ссылка на репозиторий: **[Foundation](https://github.com/AndRomMan/foundation)** 

* Исходные данные(массив с объектами) находятся в файле ***groups.js***

* * *
## Задача
 - Нужно сверстать динамический список групп, данные “приходят” с бэкэнда
 - Сделать сборку и отправку данных
 - Верстка должна быть по БЕМу и максимально семантичной
 - Использовать препроцессор SCSS
 - Верстка спойлеров


* * *
### Общие технические требования

1. Стандарты вёрстки: **HTML5**, **CSS3**
2. Семантически правильная вёрстка (каждый html-элемент используется осмысленно и по назначению)
3. Адаптивность сетки: мобильная, планшетная и десктопная версии по принципу **Desktop First**
    На всех промежуточных разрешениях используется резиновая вёрстка
4. Методология: **БЭМ**
5. Фреймворки и сторонние библиотеки: **не используются**
6. Препроцессор: **SCSS**
7. Инструмент автоматизации и сборка проекта: **Gulp**
8. Нестандартные шрифты подключены **локально**.
9. Логика работы и отправка данных на сервер: **JavaScript**
10. Система управления версиями: **Git**
    * Папка build со всем её содержимым должна попадать в репозиторий на github.

### Ссылки на материалы

- **[Макет Figma](https://www.figma.com/file/8hg5KidW5YhyU32GWnafh9/Untitled?node-id=1%3A213)**

### Краткая инструкция по развертыванию проекта

#### Подготовка системы автоматизации сборки

**Установите**
  * [Node.js](https://nodejs.org/ru/) - последнюю версию LTS
  * NPM - установка включена в установку Node.js
    * Проверьте корректность установки Node и NPM:
        ```bash
            node --version
            npm --version
        ```
  * Gulp-cli - v4.x: 
    ```bash
        npm install --global gulp-cli
    ```
    * Проверьте корректность установки Gulp:
    ```bash
        gulp --version
    ```

### Порядок работы с проектом:
* Запустите терминал из корневой директории проекта
* Установите npm-пакеты плагинов сборки и тестирования (devDependencies из файла package.json) 
  ```bash
      npm i
  ```
* Протестируйте код на соответствия style-guides
  ```bash 
      npm test
  ```
* Соберите проект без запуска локального сервера
  ```bash
      npm run build
  ```
* Запустите локальный сервер
  ```bash
      npm start
  ```
