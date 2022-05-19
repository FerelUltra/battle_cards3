module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            transitionTimingFunction: {
                DEFAULT: "ease-in-out"
            },
            transitionDuration: {
                Default: "600ms"
            },
            keyFrames: {
                fadeIn: {
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                }
            },
            animation: {
                fade: "fadeIn .5s ease-in-out"
            }
        },
        backgroundSize: {
            'auto': 'auto',
            'cover': 'cover',
            'contain': 'contain',
            '50%': '50%',
            '16': '4rem',
        }
    },
    plugins: []
};
