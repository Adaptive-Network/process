import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Process",
  tagline: "Share something small every day.",
  favicon: "img/logo_v2_icon_green_small.ico",

  // Set the production url of your site here
  url: "process.theadaptivenetwork.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Adaptive Network", // Usually your GitHub org/user name.
  projectName: "process", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    "@docusaurus/theme-live-codeblock",
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "scientia",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "scientia",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./blogs/scientia",
        blogTitle: "Scientia",
        blogDescription: "The work associated with Scientia",
        authorsMapPath: "../authors.yml",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "general",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "general",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./blogs/general",
        blogTitle: "Scientia",
        blogDescription: "The work associated with Scientia",
        authorsMapPath: "../authors.yml",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "facilitation",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "facilitation",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./blogs/facilitation",
        blogTitle: "Scientia",
        blogDescription: "The work associated with Scientia",
        authorsMapPath: "../authors.yml",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "process",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "process",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./blogs/process",
        blogTitle: "Process",
        blogDescription: "The process of documenting the process",
        authorsMapPath: "../authors.yml",
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Process",
      logo: {
        alt: "process logo",
        src: "img/logo_v2_icon_green.svg",
        srcDark: "img/logo_v2_icon_white.svg",
      },
      items: [
        {
          label: "General",
          position: "left",
          to: "general",
        },
        {
          label: "Scientia",
          position: "left",
          to: "scientia",
        },
        {
          label: "Facilitation",
          position: "left",
          to: "facilitation",
        },
        {
          label: "The Process",
          position: "left",
          to: "process",
        },
        {
          href: "https://github.com/Adaptive-Network",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Blogs",
          items: [
            {
              label: "General",
              to: "/general",
            },
            {
              label: "Scientia",
              to: "/scientia",
            },
            {
              label: "Facilitation",
              to: "/facilitation",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/xPrxDBxw",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/the-adaptive-network",
            },
          ],
        },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Adaptive Network`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    liveCoDeBlock: {
      playgroundPosition: "bottom",
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
