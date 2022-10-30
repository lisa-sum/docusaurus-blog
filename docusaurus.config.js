// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rococo Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/username.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/html', label: 'HTML', position: 'left' },
          { to: '/css', label: 'CSS', position: 'left' },
          {
            type: 'dropdown', to: '/frame', label: 'Frame', position: 'left', items: [
              { to: '/frame/react', label: 'React' },
              { to: '/frame/next', label: 'Next' },
              { to: '/frame/vue', label: 'Vue' },
              { to: '/frame/test', label: 'Test' },
            ],
          },
          {
            to: '/lib', label: 'Library', position: 'left', items: [
              { to: '/lib/typescript', label: 'Typescript' },
            ],
          },
          {
            type: 'dropdown', to: '/graphql', label: 'GraphQL', position: 'left', items: [
              { label: 'Apollo GraphQL Client', to: '/' },
              { label: 'Apollo GraphQL Server', to: '/' },
            ],
          },
          { to: '/node', label: 'Node', position: 'left' },
          { to: '/python', label: 'Python', position: 'left' },
          { to: '/linux', label: 'Linux', position: 'left' },
          { to: '/docker', label: 'Docker', position: 'left' },
          {
            type: 'dropdown', to: '/other', label: 'Other', position: 'left', items: [
              { to: '/standard', label: 'Standard' },
              { to: '/experience', label: 'Experience' },
              { to: '/packageManage', label: 'PackageManage' },
              { to: '/versionManage', label: 'VersionManage' },
            ],
          },
          {
            href: 'https://github.com/lookeke',
            label: 'GitHub',
            position: 'right',
          },
          { to: '/about', label: 'About', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Front end Technology stack',
            items: [
              { label: 'HTML', to: '/html' },
              { label: 'CSS', to: '/css' },
              { label: 'Javascript', to: '/' },
              { label: 'Typescript', to: '/' },
              { label: 'Typescript', to: '/' },
              { label: 'React.js', to: '/' },
              { label: 'Next.js', to: '/' },
              { label: 'Vue.js', to: '/' },
              { label: 'Node.js', to: '/' },
              { label: 'Apollo GraphQL Client', to: '/' },
              { label: 'Test', to: '/' },
            ],
          },
          {
            title: 'Back-end Technology stack',
            items: [
              { label: 'Python', to: '/' },
              { label: 'Linux', to: '/' },
              { label: 'Apollo GraphQL Server', to: '/' },
              { label: 'Docker', to: '/' },
              { label: 'Docker', to: '/' },
              { label: 'Test', to: '/' },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lookeke',
              },
              {
                label: '掘金',
                href: 'https://juejin.cn/user/2172290708810744',
              },
              {
                label: 'Site',
                href: 'https://lookeke.cc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config