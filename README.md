# React Complex Application (project template -> change title)
### Шаблон для старта разработки фронтэнда комплексного WEB приложения построенного на технологиях React в соответствии методологии [Feature Sliced Design](https://feature-sliced.design/docs)

---

## Запуск проекта
```shell
npm install - установка зависимостей
```

## Скрипты

- `npm start` - Запуск frontend проекта на webpack dev server
- `npm run build:prod` - Сборка в режиме prod
- `npm run build:dev` - Сборка в режиме dev (не минимизирован)

---

## Архитектура проекта

(соответствует архитектуре - [feature sliced design](https://feature-sliced.design/docs)

## Работа с переводами

Используется библиотека i18next. Файлы с переводами хранятся в public/locales

Для удобства работы рекомендуется установить плагин среды разработки (Webstorm - `i18n support`)

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Конфигурация проекта

Для сборки проекта сконфигурирован [Webpack](./docs/configs/webpack.md)

### Вся конфигурация хранится в:
- `/config/build` - Декомпозиция webpack конфигурации


- `/tsconfig.json` - Typescript

---
## Важные папки проекта
- `src` - Исходный код проекта
- `public` - используемые файлы контента:
  - HTML шаблон куда осуществляется сборка проекта
  - locales - папки с переводами
- `src/shared/assets` - медиа контент используемый в проекте

----

## Функционал (features)

