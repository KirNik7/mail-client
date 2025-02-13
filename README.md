
# Почтовый клиент

  

## Описание проекта

Приложение "Почтовый клиент" реализовано с использованием Angular CLI v17 или выше. Основные функции приложения включают авторизацию пользователей, отправку и просмотр писем, а также работу с черновиками.

  

## Установка и запуск

  

### Предварительные требования

- Установите [Node.js](https://nodejs.org) (версия 18+).

- Установите Angular CLI глобально:

```bash

npm install -g @angular/cli

```

  

### Клонирование репозитория

```bash

git  clone  https://github.com/YOUR_USERNAME/mail-client.git

cd  mail-client

```

  

### Установка зависимостей

```bash

npm  install

```

  

### Запуск приложения

```bash

ng  serve

```

Откройте браузер и перейдите по адресу http://localhost:4200

  

## Функционал приложения

1. Авторизация пользователей:

	- Логины и пароли тестовых пользователей: user1 / pass1 и user2 / pass2

2. Отправка сообщений другому пользователю:

	- Создайте новое письмо в разделе Create.

	- Укажите получателя, тему и текст письма.

	- Нажмите кнопку "Send" для отправки письма.

3. Просмотр отправленных и полученных сообщений:

	- Раздел Inbox для входящих писем.

	- Раздел Outbox для исходящих писем.

4. Возможность ответить пользователю:

	- Перейдите в раздел Inbox или Outbox.

	- Нажмите на письмо для просмотра деталей.

	- Нажмите кнопку "Reply" для ответа на письмо.

5. Раздел Drafts для работы с черновиками:

	- Создайте новое письмо в разделе Create.

	- Нажмите кнопку "Save Draft" для сохранения черновика.

	- Перейдите в раздел Drafts для просмотра и удаления черновиков.

6. Удаление писем и черновиков:

	- В разделах Inbox, Outbox и Drafts нажмите кнопку "Delete" рядом с письмом для его удаления.

  

## Важная информация

- **Авторизация**: Используется AuthService для управления аутентификацией пользователей.

- **Хранение данных**: Данные писем и черновиков хранятся в localStorage.

- **Маршрутизация**: Используется Angular Router для разделения страниц приложения.

- **Защита маршрутов**: Используется CanActivateFn для защиты доступа к защищенным разделам.

  

## Лицензия

Этот проект распространяется под лицензией MIT. Подробнее см. файл LICENSE.