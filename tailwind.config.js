module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-sky-blue": "#dbeafe",
        "lavender-blush": "#f5e9f9",
        "frosted-glass-bg": "rgba(255, 255, 255, 0.7)",
        "new-fill-000000": "rgba(0, 0, 0, 1)",
        "new-fill-74a4ee": "rgba(116, 164, 238, 1)",
        "new-fill-bfbfbf": "rgba(191, 191, 191, 0.44)",
        "new-fill-ffffff": "rgba(255, 255, 255, 1)",
        "new-fill-f1e4f4": "rgba(241, 228, 244, 1)",
        "new-fill-3a3cb9": "rgba(58, 60, 185, 1)",
        "new-fill-4d1bf1": "rgba(77, 27, 241, 1)",
        "inkdarkest": "rgba(9, 10, 10, 1)",
        "inklight": "rgba(108, 112, 114, 1)",
        "inklighter": "rgba(114, 119, 122, 1)",
        "primarybase": "rgba(107, 78, 255, 1)",
        "skylight": "rgba(227, 229, 229, 1)",
        "skywhite": "rgba(255, 255, 255, 1)",
        "border": "hsl(var(--border))",
        "input": "hsl(var(--input))",
        "ring": "hsl(var(--ring))",
        "background": "hsl(var(--background))",
        "foreground": "hsl(var(--foreground))",
        "primary": {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "secondary": {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "destructive": {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        "muted": {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        "accent": {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "popover": {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        "card": {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0px 4px 15px rgba(0, 0, 0, 0.1)',
        'custom-medium': '0px 8px 25px rgba(0, 0, 0, 0.15)',
        'custom-strong': '0px 12px 35px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 0 10px rgba(255, 255, 255, 0.5)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadeIn": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "fab-bounce": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "fab-expand": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeIn": "fadeIn 1s ease-in forwards",
        "fab-bounce": "fab-bounce 0.5s ease-in-out",
        "fab-expand": "fab-expand 0.3s ease-out forwards",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
