/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Тут можна додати власні налаштування теми, якщо потрібно
            // Наприклад, кастомні кольори для контрастного тексту:
            // colors: {
            //   'custom-contrast': '#FFFFFF', // Приклад білого
            //   'custom-dark-contrast': '#1a202c', // Приклад темного
            // }
        },
    },
    plugins: [],
} 