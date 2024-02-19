import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeOutSlideDown: {
                    "0%": {
                        opacity: "100%",
                    },
                    "100%": {
                        opacity: "0%",
                        transform: "translateY(25%)",
                    },
                },

                fadeInSlideUp: {
                    "0%": {
                        opacity: "0%",
                        transform: "translateY(25%)",
                    },
                    "100%": {
                        opacity: "100%",
                        transform: "translateY(0%)",
                    },
                },
            },
            transitionProperty: {
                "max-height": "max-height",
                "grid-rows": "grid-template-rows",
            },
            animation: {
                "fade-out": "fadeOutSlideDown 0.5s ease-in-out forwards",
                "fade-in": "fadeInSlideUp 0.5s ease-in-out forwards",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
