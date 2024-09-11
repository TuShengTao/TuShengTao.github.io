import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GoGoLLM',
  tagline: 'Enterprise-Level LLM Application Development Platform',
  favicon: 'img/favicon.ico',
  staticDirectories: ['public', 'static'],

  // Set the production url of your site here
  url: 'https://tushengtao.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tushengtao', // Usually your GitHub org/user name.
  projectName: 'tushengtao.github.io', // Usually your repo name.
  deploymentBranch:'gh-pages',
  trailingSlash: false,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins:[
    'plugin-image-zoom',  // npm install flexanalytics/plugin-image-zoom

      // baidu统计 https://qileq.com/about/site/analytics/
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: 'ltr'
      },
      'zh-CN': {
        label: "中文",
        direction: 'ltr'
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // 使用函数来根据当前语言环境返回不同的 editUrl
          editUrl: ({ locale }) => {
            if (locale === 'zh-CN') {
              return 'https://github.com/tushengtao/tushengtao.github.io/tree/main/i18n/zh-CN';
            } else {
              return 'https://github.com/tushengtao/tushengtao.github.io/tree/main/';
            }
          },
        },
        blog: {
          showReadingTime: true,
          // 同样使用函数来配置博客的 editUrl
          editUrl: ({ locale }) => {
            if (locale === 'zh-CN') {
              return 'https://github.com/tushengtao/tushengtao.github.io/tree/main/i18n/zh-CN/blog';
            } else {
              return 'https://github.com/tushengtao/tushengtao.github.io/tree/main/blog';
            }
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        gtag: {
          trackingID: 'G-P4L4VBMNZ3',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,

    ],
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        language: ["en", "zh"],

      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'GoGoLLM',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},

        {
          type: 'localeDropdown',
          position: 'right',
        },

        {
          href: 'https://github.com/tushengtao/gogollm',
          label: 'GitHub',
          position: 'right',
        },

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
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/neQ55zhs',
            },
            {
              html: `
              <div style="position: relative;">
                <a href="javascript:void(0)">
                  <div id="wechatDropdown" class="wechat-dropdown" style="display: none; position: absolute; top: -300px; text-align: center">
                    <img width="180" height="250" src="/img/wechat.png" alt="weChat">
                  </div>
                  <span class="wechat-span" 
                       onmouseover="document.getElementById('wechatDropdown').style.display='block';" 
                       onmouseout="document.getElementById('wechatDropdown').style.display='none';"
                       id="wechatText">WeChat</span>
                  </a>
                </div>
              <script>
                // 检测URL是否包含/zh-CN
                function checkLocale() {
                  var url = window.location.href;
                  if (url.indexOf('/zh-CN') !== -1) {
                    document.getElementById('wechatText').textContent = '微信';
                  } else {
                    document.getElementById('wechatText').textContent = 'WeChat';
                  }
                }
                window.onload = function() {
                  checkLocale();
                };
              </script>
              `,
            }
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
              href: 'https://github.com/tushengtao/gogollm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} tushengtao. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
