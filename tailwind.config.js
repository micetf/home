/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0d6efd", // Bootstrap primary color
                },
                secondary: {
                    DEFAULT: "#6c757d", // Bootstrap secondary color
                },
                danger: {
                    DEFAULT: "#dc3545", // Bootstrap danger color
                },
                warning: {
                    DEFAULT: "#ffc107", // Bootstrap warning color
                },
                dark: {
                    DEFAULT: "#212529", // Bootstrap dark color
                },
            },
        },
    },
    plugins: [],
};
