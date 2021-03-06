# GitHub-interface-app

## Техническое задание

Функционал

- **Поле ввода для указания имени пользователя и названия репозитория.**
Данные не нужно загружать, пока не будет нажата кнопка «Поиск». Каждое обращение должно отображаться с указанием номера, названия, даты открытия.
- **Пейджинг для обращений.**
Убедитесь, что загружаются только те данные, которые отображаются. Предусмотрите возможность выбора количества объектов отображаемых на странице.

- **Обработка и индикация ошибок в интерфейсе.**
Реализуйте отображение состояния загрузки обращений с сервера.

- **Автодополнение в поле ввода.**
Измените поле ввода таким образом, чтобы после указания имени пользователя появлялся список автодополнения из существующих репозиториев выбранного пользователя. Загружать обращения нужно сразу после выбора в списке автодополнения.

- **Роутинг.**
Сделайте страницу детального просмотра обращения, отображаемую информацию выберите сами.

- **Вывод автора.**
Для каждого обращения выведите автора не просто в виде имени, а с указанием его аватарки и со ссылкой на его Github-профиль.

- **Дизайн.**
Сделайте стилистически законченный вид приложения.

- **Тесты.**
Напишите тесты на базовую функциональность.

## Требования
- React.js или AngularJS для построения интерфейса;
- Использование библиотек UI (jQuery и другие) запрещено;
- Использование препроцессоров и систем сборки приветствуется (Jade, Stylus, Gulp);
- Архитектура должна быть масштабируемой;
- Приложение должно работать в современных браузерах (IE11+) и на мобильных устройствах;
- На приложение можно потратить максимум 12 часов.

## Комментарий

ТЗ выполнено, за исключением написания тестов и используемого стека.

ToDo: проверка на мобильных устройствах. Разрешить вопрос с `keyup` событиями под Android.

Использованы: AngularJS 1.6, Gulp, SASS(SCSS)

Загрузка зависимостей: `npm install`

Запуск сборки: `npm run build`

Запуск сборки с локальным сервером: `npm start`
