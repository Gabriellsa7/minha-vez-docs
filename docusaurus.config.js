// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minha Vez',
  tagline: 'Manual de uso do app e do painel Manager',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // TODO: trocar para https://docs.minhavez.app quando o domínio custom estiver conectado na Vercel
  url: 'https://minha-vez-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Gabriellsa7', // GitHub org/user
  projectName: 'minha-vez-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: gerar um social card próprio e substituir
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Minha Vez',
        logo: {
          alt: 'Minha Vez',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'appSidebar',
            position: 'left',
            label: '📱 App',
          },
          {
            type: 'docSidebar',
            sidebarId: 'managerSidebar',
            position: 'left',
            label: '🖥️ Manager',
          },
          {
            href: 'https://github.com/Gabriellsa7/minha-vez-app',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sobre',
            items: [
              {
                html: '<span class="footer__about-text">Chega de fila.<br />Acompanhe sua vez em tempo real.</span>',
              },
            ],
          },
          {
            title: 'Documentação',
            items: [
              {label: 'Manual do App', to: '/app/primeiros-passos'},
              {label: 'FAQ do App', to: '/app/faq'},
              {
                label: 'Manager · Administrador',
                to: '/manager/admin/primeiros-passos',
              },
              {
                label: 'Manager · Médico',
                to: '/manager/medico/primeiros-passos',
              },
              {
                label: 'Manager · Recepção',
                to: '/manager/recepcionista/primeiros-passos',
              },
            ],
          },
          {
            title: 'Repositórios',
            items: [
              {
                label: 'minha-vez-app',
                href: 'https://github.com/Gabriellsa7/minha-vez-app',
              },
              {
                label: 'minha-vez-manager',
                href: 'https://github.com/Gabriellsa7/minha-vez-manager',
              },
              {
                label: 'minhavez-backend',
                href: 'https://github.com/Gabriellsa7/minhavez-backend',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Minha Vez — Gabriel Santana.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
