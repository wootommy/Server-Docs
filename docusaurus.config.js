// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  /* ------------------------------- metadata ------------------------------- */
  title: 'Server Docs [DINO | CAMO | SENO]',
  tagline: 'ServerDocs for NAMI Lab Servers.',
  favicon: 'img/favicon.ico',
  /* ------------------------------ deployment ------------------------------ */
  url: 'https://serverdocs.netlify.app/',
  baseUrl: '/',
  organizationName: 'wootommy',
  projectName: 'Server-Docs',
  /* ------------------------------- behavior ------------------------------- */
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  /* ---------------------------- internalization --------------------------- */
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },
  /* -------------------------------- presets ------------------------------- */
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  /* ------------------------------ themeconfig ----------------------------- */
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /* ---------------------------- social card --------------------------- */
      image: 'img/docusaurus.png',
      /* ------------------------- announcement bar ------------------------- */
      announcementBar: {
        id: 'welcome',
        content: 'Welcome to the New NAMI Lab Server Docs!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      /* ------------------------------ navbar ------------------------------ */
      navbar: {
        title: 'Server Docs',
        logo: {
          alt: 'Server Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      /* ------------------------------ footer ------------------------------ */
      footer: {
        style: 'light',
        copyright: `Copyright &copy ${new Date().getFullYear()} NAMI Lab, Tongji University.`,
      },
      /* -------------------------------- toc ------------------------------- */
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      /* ------------------------------- prism ------------------------------ */
      prism: {
        defaultLanguage: 'shell',
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      /* ---------------------------- color mode ---------------------------- */
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
}

module.exports = config
