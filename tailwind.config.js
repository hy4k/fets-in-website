
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#FFCE32',
          hover: '#FFD54F',
          foreground: '#000000',
        },
        secondary: {
          DEFAULT: '#1D63FF',
          hover: '#0039B5',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'brand-blue': '#106EBE',
        'brand-mint': '#0FFCBE',
        'brand-gold': '#F3D250',
        'brand-beige': '#EBE9E1',
        // Candidate Hub Theme
        'brand-teal-light': '#AFDDE5',
        'brand-teal-medium': '#0FA4AF',
        'brand-teal-dark': '#024950',
        'brand-brown': '#964734',
        // New Dashboard Accent Colors
        'accent-lavender': '#E6E0FF', // Soft Lavender
        'accent-mint': '#D1FAE5',    // Soft Mint Green
        'accent-peach': '#FFEDD5',   // Soft Peach
        // New Button Theme Colors
        'eggshell-white': '#F5F5F5',
        'soft-gray': '#EDEDED',
        'electric-blue': '#2979FF',
        'electric-blue-light': '#63A4FF', // Hover for main button
        'vivid-yellow': '#FFBD03',
        'vivid-yellow-dark': '#E6A800',
        'gunmetal-gray': '#484848',
        'gunmetal-gray-light': '#757575',
        // Mint Green / Tangerine Orange Theme
        'mint-green': '#00C896',
        'mint-green-dark': '#00A078',
        'tangerine-orange': '#FF9500',
        'tangerine-orange-light': '#FFA500',
        // Forest Green / Charcoal Theme
        'forest-green': '#228B22',
        'forest-green-light': '#2EAF2E', // Lighter green for hover/focus on circle
        'charcoal': '#333333',
        'charcoal-light': '#4D4D4D', // Lighter charcoal for hover/focus on main body
        // Define some example gradients (add more as needed based on the 11 items)
        // These require from/to colors to be defined or use existing ones
        // Example: Define purple-start, purple-end etc. if not using existing colors
      },
      // Add backgroundImage for gradients if needed, or use from/to classes
      backgroundImage: {
        'gradient-purple': 'linear-gradient(to right, #8B5CF6, #A78BFA)', // Example Purple
        'gradient-green': 'linear-gradient(to right, #10B981, #34D399)', // Example Green
        'gradient-cyan': 'linear-gradient(to right, #06B6D4, #22D3EE)', // Example Cyan
        'gradient-orange': 'linear-gradient(to right, #F97316, #FB923C)', // Example Orange
        'gradient-magenta': 'linear-gradient(to right, #D946EF, #EC4899)', // Example Magenta/Pink
        'gradient-red': 'linear-gradient(to right, #EF4444, #F87171)', // Example Red
        'gradient-blue': 'linear-gradient(to right, #3B82F6, #60A5FA)', // Example Blue
       },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(29, 99, 255, 0.1)',
        'hover': '0 8px 12px rgba(29, 99, 255, 0.15)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
