/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'rgb(16, 36, 62)',
          100: 'rgb(16, 42, 76)',
          200: 'rgb(15, 48, 88)',
          300: 'rgb(13, 56, 104)',
          400: 'rgb(10, 68, 129)',
          500: 'rgb(9, 84, 165)',
          600: 'rgb(0, 145, 255)',
          700: 'rgb(54, 158, 255)',
          800: 'rgb(82, 169, 255)',
          900: 'rgb(234, 246, 255)',
        },
        neutral: {
          0: 'rgb(2, 6, 23)',
          50: 'rgb(15, 23, 42)',
          100: 'rgb(30, 41, 59)',
          200: 'rgb(51, 65, 85)',
          300: 'rgb(71, 85, 105)',
          400: 'rgb(100, 116, 139)',
          500: 'rgb(148, 163, 184)',
          600: 'rgb(203, 213, 225)',
          700: 'rgb(226, 232, 240)',
          800: 'rgb(241, 245, 249)',
          900: 'rgb(248, 250, 252)',
          950: 'rgb(255, 255, 255)',
        },
        error: {
          50: 'rgb(60, 24, 26)',
          100: 'rgb(72, 26, 29)',
          200: 'rgb(84, 27, 31)',
          300: 'rgb(103, 30, 34)',
          400: 'rgb(130, 32, 37)',
          500: 'rgb(170, 36, 41)',
          600: 'rgb(229, 72, 77)',
          700: 'rgb(242, 85, 90)',
          800: 'rgb(255, 99, 105)',
          900: 'rgb(254, 236, 238)',
        },
        warning: {
          50: 'rgb(57, 26, 3)',
          100: 'rgb(68, 31, 4)',
          200: 'rgb(79, 35, 5)',
          300: 'rgb(95, 42, 6)',
          400: 'rgb(118, 50, 5)',
          500: 'rgb(148, 62, 0)',
          600: 'rgb(247, 104, 8)',
          700: 'rgb(255, 128, 43)',
          800: 'rgb(255, 139, 62)',
          900: 'rgb(254, 234, 221)',
        },
        success: {
          50: 'rgb(19, 40, 25)',
          100: 'rgb(22, 48, 29)',
          200: 'rgb(25, 57, 33)',
          300: 'rgb(29, 68, 39)',
          400: 'rgb(36, 85, 48)',
          500: 'rgb(47, 110, 59)',
          600: 'rgb(70, 167, 88)',
          700: 'rgb(85, 180, 103)',
          800: 'rgb(99, 193, 116)',
          900: 'rgb(229, 251, 235)',
        },
        'brand-primary': 'rgb(0, 145, 255)',
        'default-font': 'rgb(248, 250, 252)',
        'subtext-color': 'rgb(148, 163, 184)',
        'neutral-border': 'rgb(51, 65, 85)',
        black: 'rgb(2, 6, 23)',
        'default-background': 'rgb(2, 6, 23)',
      },
      fontSize: {
        caption: [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '400',
            letterSpacing: '0em',
          },
        ],
        'caption-bold': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '500',
            letterSpacing: '0em',
          },
        ],
        body: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '400',
            letterSpacing: '0em',
          },
        ],
        'body-bold': [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '500',
            letterSpacing: '0em',
          },
        ],
        'heading-3': [
          '16px',
          {
            lineHeight: '20px',
            fontWeight: '400',
            letterSpacing: '0em',
          },
        ],
        'heading-2': [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: '400',
            letterSpacing: '0em',
          },
        ],
        'heading-1': [
          '30px',
          {
            lineHeight: '36px',
            fontWeight: '400',
            letterSpacing: '0em',
          },
        ],
        'monospace-body': [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '400',
            letterSpacing: '0em',
          },
        ],
      },
      fontFamily: {
        caption: 'Montserrat',
        'caption-bold': 'Montserrat',
        body: 'Montserrat',
        'body-bold': 'Montserrat',
        'heading-3': 'Montserrat',
        'heading-2': 'Montserrat',
        'heading-1': 'Montserrat',
        'monospace-body': 'monospace',
      },
      boxShadow: {
        sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        default: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        md: '0px 4px 16px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)',
        lg: '0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)',
        overlay:
          '0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        DEFAULT: '16px',
        lg: '24px',
        full: '9999px',
      },
      container: {
        padding: {
          DEFAULT: '16px',
          sm: 'calc((100vw + 16px - 640px) / 2)',
          md: 'calc((100vw + 16px - 768px) / 2)',
          lg: 'calc((100vw + 16px - 1024px) / 2)',
          xl: 'calc((100vw + 16px - 1280px) / 2)',
          '2xl': 'calc((100vw + 16px - 1536px) / 2)',
        },
      },
      spacing: {
        112: '28rem',
        144: '36rem',
        192: '48rem',
        256: '64rem',
        320: '80rem',
      },
      screens: {
        mobile: {
          max: '767px',
        },
      },
    },
  },
};
