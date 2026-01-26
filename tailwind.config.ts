import type { Config } from 'tailwindcss';

/**
 * Helper function to create color values that support opacity modifiers
 * when using CSS variables
 */
function withOpacity(variableName: string) {
  return `rgb(var(${variableName}) / <alpha-value>)`;
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ============================================
      // BRAND COLORS - Customize these for your brand
      // Uses RGB values in CSS variables for opacity support
      // ============================================
      colors: {
        // Primary brand color with shades
        primary: {
          50: withOpacity('--primary-50'),
          100: withOpacity('--primary-100'),
          200: withOpacity('--primary-200'),
          300: withOpacity('--primary-300'),
          400: withOpacity('--primary-400'),
          500: withOpacity('--primary-500'), // Main brand color
          600: withOpacity('--primary-600'),
          700: withOpacity('--primary-700'),
          800: withOpacity('--primary-800'),
          900: withOpacity('--primary-900'),
          950: withOpacity('--primary-950'),
        },
        // Secondary/accent color
        accent: {
          50: withOpacity('--accent-50'),
          100: withOpacity('--accent-100'),
          200: withOpacity('--accent-200'),
          300: withOpacity('--accent-300'),
          400: withOpacity('--accent-400'),
          500: withOpacity('--accent-500'),
          600: withOpacity('--accent-600'),
          700: withOpacity('--accent-700'),
          800: withOpacity('--accent-800'),
          900: withOpacity('--accent-900'),
        },
        // Neutral/background colors
        background: withOpacity('--background'),
        foreground: withOpacity('--foreground'),
        muted: {
          DEFAULT: withOpacity('--muted'),
          foreground: withOpacity('--muted-foreground'),
        },
        border: withOpacity('--border'),
      },

      // ============================================
      // TYPOGRAPHY - Using CSS variables for fonts
      // ============================================
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },

      // ============================================
      // SPACING & SIZING
      // ============================================
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      // ============================================
      // ANIMATION UTILITIES
      // ============================================
      animation: {
        // Fade animations
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',

        // Slide animations
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-up': 'slideInUp 0.5s ease-out forwards',
        'slide-in-down': 'slideInDown 0.5s ease-out forwards',

        // Scale animations
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'scale-out': 'scaleOut 0.3s ease-in forwards',

        // Continuous animations
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',

        // Text animations
        'text-shimmer': 'textShimmer 2.5s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        textShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },

      // ============================================
      // TRANSITION TIMING FUNCTIONS
      // ============================================
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'ease-in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },

      // ============================================
      // TRANSITION DURATIONS
      // ============================================
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },

      // ============================================
      // SCREENS (Responsive breakpoints)
      // ============================================
      screens: {
        xs: '475px',
        '3xl': '1920px',
      },

      // ============================================
      // Z-INDEX SCALE
      // ============================================
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};

export default config;
