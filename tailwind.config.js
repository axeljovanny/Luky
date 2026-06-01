module.exports = {
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat'],
                'lato': ['Lato'],
                'garamond': ['Garamond'],
                'cygrotesk': ['CyGrotesk-GrandDark', 'sans-serif'],
                'porsche': ['LePorsche', 'sans-serif']
            },
            animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui'),
    ]
}
