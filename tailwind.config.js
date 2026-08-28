/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
  ],
  // Infima (o CSS base do Docusaurus) já usa nomes de classe curtos e comuns
  // (.card, .button, .container...). Prefixamos as classes do Tailwind para
  // não colidir com elas, e desligamos o preflight para não resetar os
  // estilos base do tema.
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Mesma paleta de tokens usada no app (minha-vez-app/global.css),
        // via CSS vars definidas em src/css/custom.css.
        textPrimary: 'var(--mv-text-primary)',
        textSecondary: 'var(--mv-text-secondary)',
        textThird: 'var(--mv-text-third)',
        textFourth: 'var(--mv-text-fourth)',
        textFifth: 'var(--mv-text-fifth)',
        textBlack: 'var(--mv-text-black)',
        textDanger: 'var(--mv-text-danger)',
        buttonPrimary: 'var(--mv-button-primary)',
        buttonSecondary: 'var(--mv-button-secondary)',
        borderPrimary: 'var(--mv-border-primary)',
        bgPrimary: 'var(--mv-bg-primary)',
        bgSecondary: 'var(--mv-bg-secondary)',
        bgThird: 'var(--mv-bg-third)',
        bgFourth: 'var(--mv-bg-fourth)',
        statusSuccessBg: 'var(--mv-status-success-bg)',
        statusSuccessText: 'var(--mv-status-success-text)',
        statusDangerBg: 'var(--mv-status-danger-bg)',
        statusDangerText: 'var(--mv-status-danger-text)',
        accentStar: 'var(--mv-accent-star)',
        infoBg: 'var(--mv-info-bg)',
        infoBorder: 'var(--mv-info-border)',
        highlightBg: 'var(--mv-highlight-bg)',
        highlightBorder: 'var(--mv-highlight-border)',
        highlightText: 'var(--mv-highlight-text)',
        warningBg: 'var(--mv-warning-bg)',
        warningBorder: 'var(--mv-warning-border)',
        warningText: 'var(--mv-warning-text)',
        accentBlue: 'var(--mv-accent-blue)',
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px -12px rgba(0, 102, 115, 0.25)',
        'card-hover': '0 4px 8px rgba(0, 0, 0, 0.06), 0 16px 32px -12px rgba(0, 102, 115, 0.35)',
      },
    },
  },
  plugins: [],
};
