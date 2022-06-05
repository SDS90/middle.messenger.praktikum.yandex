# ya.praktikum.messager

Проект мессенджера, выполняемый в рамках курса "Миддл фронтенд-разработчик" Яндекс.Практикума.

## По итогам первого спринта (ветка spint_1) разработаны и свёрстаны шаблоны страниц:

- index - авторизации
- reg-form - регистрации
- chat - основная страница чата
- profile - профиля
- error - страница ошибки

Вёрстка использовалась при помощи препроцессоров SASS и Pug.

Ссылка на Netlify: https://62656a56aa84583b6bb28c6c--warm-praline-e1a600.netlify.app/

По кнопке "Зарегистрироваться" на странице входа можно открыть форму авторизации.

По кнопке "Авторизоваться" открывается страница чата.

По кнопке "Мой профильт" на странице чата открывается страница изменения профиля.

По кнопке "Создать чат" на странице чата открывается страница ошибки.

## По итогам второго спринта (ветка spint_2) реализована логика страниц:

Реализован собственный генератор шаблонов TemplateGen. На его базе пересобран весь проект с учётом разделения структуры по элементам.

Реализован базовый класс Block.

Реализован HTTPTransport для работы с запросами.

Добавлена валидация на формы авторизации, регистрации, изменения профиля. Форма отправки сообщения не будет отправлена без текста сообщения или прикреплённого файла.

## По итогам третьего спринта (ветка spint_3) реализован механизм работы чатов:

Подключён API чатов, добавлены слои api и контроллеров. Реализованы регистрация, авторизация, выход из системы, изменение данных пользователя, включая изменение пароля и аватара. Реализованы создание и удаление чатов, поиск пользователей, добавление пользователя в чат и удаление из чата.

Подключён механизм WebSocket для мгновенной передачи сообщений.

Реализован роутинг.

Реализованы тесты для шаблонизатора, роутера, компонента, модуля отправки запросов.

## Команды:
- `npm run start` - проект запускается на http://localhost:3000
- `npm run build` - сборка проекта
- `npm run dev` - собранный проект запускается на http://localhost:1234
- `npm run eslint` - линтинг проекта


Ссылка на pull request: https://github.com/SDS90/middle.messenger.praktikum.yandex/pull/4