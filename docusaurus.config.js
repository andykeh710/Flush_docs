const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DumpFun Docs',
  tagline: 'Dumping Sh!tcoins made easy',
  url: 'https://dumpfun.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Dumpfun.xyz', // Usually your GitHub org/user name.
  projectName: 'DumpCoin', // Usually your repo name.
  
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Dumpcoin logo',
        src: 'img/dumpfunlogo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'Docs',
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
              label: 'Twitter / X',
              href: 'https://x.com/dumpfunxyz',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dumpfun.xyz, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/welcome', // The docs page you want to redirect to
            from: '/', // The root URL
          },
        ],
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: false, // Disable the blog feature if not needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-+fGRpEblWkprN5V0jaTAY6Fgj3ck1EpQfTY96m6S5C9Q/zJjqvqKc5im5SzF++iZ',
      crossorigin: 'anonymous',
    },
  ],
};
