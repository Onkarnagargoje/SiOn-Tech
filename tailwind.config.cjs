/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#0B1220',
          slate: '#4B5C6B',
          mist: '#F2F5F3',
          cream: '#FAF9F6',
          white: '#FFFFFF',
          teal: '#0D9488',
          aqua: '#2DD4BF',
          coral: '#F0624D',
          amber: '#F0B429',
          navy: '#152536',
          line: '#E2E8E5',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        logo: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3.5rem, 8.5vw, 6.25rem)', { lineHeight: '1.02', letterSpacing: '-0.04em', fontWeight: '800' }],
        title: ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        lead: ['clamp(1.125rem, 1.5vw, 1.35rem)', { lineHeight: '1.65' }],
      },
      boxShadow: {
        soft: '0 10px 40px rgba(11, 18, 32, 0.07)',
        mid: '0 20px 60px rgba(11, 18, 32, 0.12)',
        lift: '0 28px 80px rgba(11, 18, 32, 0.18)',
        teal: '0 14px 44px rgba(13, 148, 136, 0.28)',
        nav: '0 12px 40px rgba(11, 18, 32, 0.12)',
        glow: '0 0 100px rgba(45, 212, 191, 0.25)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(ellipse 70% 55% at 15% 20%, rgba(45,212,191,0.14), transparent 55%), radial-gradient(ellipse 55% 45% at 90% 10%, rgba(240,98,77,0.1), transparent 50%), radial-gradient(ellipse 45% 50% at 70% 90%, rgba(240,180,41,0.1), transparent 45%)',
        'hero-glow':
          'radial-gradient(ellipse 65% 55% at 75% 40%, rgba(45,212,191,0.22), transparent 60%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(240,98,77,0.12), transparent 50%)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'shimmer-text': 'shimmer-text 4.5s ease-in-out infinite',
        'orb-drift': 'orb-drift 12s ease-in-out infinite',
        'orb-drift-delay': 'orb-drift 14s ease-in-out infinite reverse',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'shimmer-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'orb-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(24px, -18px) scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
