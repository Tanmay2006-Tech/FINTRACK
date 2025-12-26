module.exports = {
  content: [
    "./index.html",
    "./pages/*.{html,js}",
    "./js/*.js",
    "./*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary - Deep Sage
        primary: {
          DEFAULT: '#2D5A3D', // sage-700
          50: '#F0F5F2', // sage-50
          100: '#D9E7DD', // sage-100
          200: '#B3CFBB', // sage-200
          300: '#8DB799', // sage-300
          400: '#679F77', // sage-400
          500: '#4A7C59', // sage-500
          600: '#3D6849', // sage-600
          700: '#2D5A3D', // sage-700
          800: '#234A31', // sage-800
          900: '#1A3825', // sage-900
        },
        // Secondary - Lighter Sage
        secondary: {
          DEFAULT: '#4A7C59', // sage-500
          50: '#F2F7F4', // sage-secondary-50
          100: '#E0EDE4', // sage-secondary-100
          200: '#C1DBC9', // sage-secondary-200
          300: '#A2C9AE', // sage-secondary-300
          400: '#83B793', // sage-secondary-400
          500: '#6B9B7A', // sage-secondary-500
          600: '#5A8566', // sage-secondary-600
          700: '#4A7C59', // sage-secondary-700
          800: '#3A6347', // sage-secondary-800
          900: '#2A4A35', // sage-secondary-900
        },
        // Accent - Warm Gold
        accent: {
          DEFAULT: '#D4A574', // gold-400
          50: '#FAF6F0', // gold-50
          100: '#F3EAD9', // gold-100
          200: '#E7D5B3', // gold-200
          300: '#DBC08D', // gold-300
          400: '#D4A574', // gold-400
          500: '#C89558', // gold-500
          600: '#B07D42', // gold-600
          700: '#8F6535', // gold-700
          800: '#6E4D28', // gold-800
          900: '#4D351B', // gold-900
        },
        // Background & Surface
        background: '#FAFBFA', // neutral-50
        surface: '#FFFFFF', // white
        // Text Colors
        'text-primary': '#1A1A1A', // gray-900
        'text-secondary': '#6B7280', // gray-500
        'text-tertiary': '#9CA3AF', // gray-400
        // Status Colors
        success: {
          DEFAULT: '#16A34A', // green-600
          50: '#F0FDF4', // green-50
          100: '#DCFCE7', // green-100
          500: '#22C55E', // green-500
          600: '#16A34A', // green-600
          700: '#15803D', // green-700
        },
        warning: {
          DEFAULT: '#F59E0B', // amber-500
          50: '#FFFBEB', // amber-50
          100: '#FEF3C7', // amber-100
          500: '#F59E0B', // amber-500
          600: '#D97706', // amber-600
          700: '#B45309', // amber-700
        },
        error: {
          DEFAULT: '#DC2626', // red-600
          50: '#FEF2F2', // red-50
          100: '#FEE2E2', // red-100
          500: '#EF4444', // red-500
          600: '#DC2626', // red-600
          700: '#B91C1C', // red-700
        },
        // Border Colors
        'border-primary': 'rgba(45, 90, 61, 0.12)',
        'border-secondary': 'rgba(107, 114, 128, 0.2)',
        // Dark Mode Colors
        dark: {
          900: '#0F1419',
          800: '#1A2332',
          700: '#2D3748',
        },
      },
      fontFamily: {
        heading: ['Crimson Text', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        caption: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.875rem', { lineHeight: '1.4' }], // 14px
        sm: ['0.9375rem', { lineHeight: '1.6' }], // 15px
        base: ['1rem', { lineHeight: '1.6' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.5' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.4' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '1.3' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '1.25' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }], // 36px
      },
      spacing: {
        xs: '0.5rem', // 8px
        sm: '1rem', // 16px
        md: '1.5rem', // 24px
        lg: '2rem', // 32px
        xl: '3rem', // 48px
        '2xl': '5rem', // 80px
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '18px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(45, 90, 61, 0.08)',
        DEFAULT: '0 2px 8px rgba(45, 90, 61, 0.06)',
        md: '0 4px 12px rgba(45, 90, 61, 0.08)',
        lg: '0 10px 25px rgba(45, 90, 61, 0.15)',
        xl: '0 20px 40px rgba(45, 90, 61, 0.2)',
        '2xl': '0 24px 48px rgba(45, 90, 61, 0.2)',
      },
      transitionDuration: {
        fast: '200ms',
        base: '250ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        'ease-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        base: '0',
        card: '1',
        dropdown: '50',
        sticky: '100',
        modal: '200',
        toast: '300',
        debug: '999',
      },
      maxWidth: {
        prose: '70ch',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
