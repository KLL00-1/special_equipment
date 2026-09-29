# Спецтехника

Основа сайта: Next.js 16, React 19, TypeScript (strict), App Router, ESLint и CSS Modules. Менеджер пакетов — npm. Рекомендуется Node.js 24 LTS (`.nvmrc`).

## Запуск

```bash
npm ci
npm run dev
```

Открыть http://localhost:3000.

## Проверки и production

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Структура

- `src/app` — серверная главная, корневой layout, метаданные и CSS Modules.
- `src/data/services.ts` — публичный каталог 13 услуг, цены и форматирование.
- `src/data/catalog-review.ts` — вопросы по исходным данным; не импортировать в интерфейс.
- `src/types/request.ts` — тип заявки, включая вариант «Другое».
- `src/lib/requests.ts` — заглушка без отправки, хранения и логирования персональных данных.
- `src/components` — место для общих компонентов.

Главная выводит названия услуг из каталога. Страницы категорий и услуг, навигация, форма и отправка ещё не реализованы. Проект не опубликован.
Все стили — в `.module.css`. Без Tailwind, анимаций, внешних шрифтов и UI-библиотек.

## Следующий этап

Добавить Header, Footer, RequestForm с defaultServiceId и маршруты /dostavka/[slug], /arenda/[slug], /raboty/[slug].
«Другое» — вариант формы, отдельная страница ему не нужна.

Домен, город, название компании и контакты ещё не заданы. Перед публикацией подтвердить цены и условия из catalog-review.ts, затем настроить canonical, sitemap и robots под настоящий домен.

Себестоимость не публикуется. Неизвестная цена отображается как «По запросу». Минимальный заказ и цена смены — самостоятельные тарифы.

## Проверено при подготовке

`npm run typecheck` и `npm run lint` прошли. Production-сборка (Turbopack и Webpack) и запуск dev-сервера заблокированы системной ошибкой среды `ENOENT: uv_resident_set_memory`. Полная сборка и HTTP-проверка здесь не подтверждены; повторите `npm run build` в обычном локальном окружении.
