import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Memphis Mesh',
  tagline: 'A group using Meshtastic around Memphis',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://memphismesh.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Memphis-Mesh', // Usually your GitHub org/user name.
  projectName: 'Memphis-Mesh.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Memphis-Mesh/Memphis-Mesh.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/Memphis-Mesh/Memphis-Mesh.github.io/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Memphis Mesh',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Getting Connected',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://discord.gg/xBDtwEKYQ4',
          label: 'Discord Chat',
          position: 'left',
        },
        {
          href: 'https://github.com/Memphis-Mesh',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/xBDtwEKYQ4',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Memphis-Mesh',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Live Map',
              href: 'https://meshmap.net/#862579180',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} memphismesh.com. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
