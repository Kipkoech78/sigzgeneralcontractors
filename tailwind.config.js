module.exports = {
  // ...
  theme: {
    extend: {
      keyframes: {
        drawX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        drawY: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        emerge: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.85)' },
          '60%': { opacity: '1', transform: 'translateY(-6px) scale(1.03)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'draw-x': 'drawX 0.7s ease-out forwards',
        'draw-y': 'drawY 0.7s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        emerge: 'emerge 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards',
      },
    },
  },
}