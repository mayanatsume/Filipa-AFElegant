/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Italiana', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            },
            colors: {
                gold: {
                    DEFAULT: '#c5a059',
                    light: '#e3d2b4',
                },
            },
        },
    },
    plugins: [],
}
