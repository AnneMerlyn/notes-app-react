import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                growIn: {
                    "0%": { transform: "scale(0)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
            },
            animation: {
                growIn: "growIn 0.4s ease-out",
            },
        },
    },
    plugins: [daisyui],
    darkMode: "media",
};
