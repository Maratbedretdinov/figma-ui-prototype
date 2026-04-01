# Figma UI Prototype

Точная веб-подача SVG-макета без сборки.

В текущей версии экран рендерится из исходного `SVG`, поэтому визуально совпадает с макетом `1:1`.

## Запуск

```bash
python3 -m http.server 4173
```

Откройте:

`http://localhost:4173/public/`

## Файлы

- `public/index.html` — входная страница
- `public/assets/150.svg` — исходный макет
- `src/app.js` — обертка страницы
- `src/styles/app.css` — responsive layout для показа макета
