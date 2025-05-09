import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Conqueror wiki',
    tagline: 'Your portal to a healty life',
    favicon: 'img/ConquerorLogo.ico',
    url: 'https://your-docusaurus-site.example.com',
    baseUrl: '/',
    organizationName: 'conqueror',
    projectName: 'conqueror',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en','es'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: "./static/img/ConquerorLogo.png",
        colorMode: {
            disableSwitch: true,
        },
        navbar: {
            title: 'Conqueror',
            logo: {
                alt: 'Conqueror Logo',
                src: 'img/ConquerorLogo.png',
            },
            items: [
                {
                    href: 'https://instagram.com/conquerorlifestyle',
                    position: 'right',
                    className: 'fa-brands fa-instagram fa-2xl',
                },
                {
                    href: 'https://www.facebook.com/profile.php?id=61572360676712',
                    position: 'right',
                    className: 'fa-brands fa-facebook fa-2xl',
                },
                {
                    href: 'http://t.me/ConquerorLifestyle',
                    position: 'right',
                    className: 'fa-brands fa-telegram fa-2xl',
                },
                {
                    href: 'https://wa.me/59891601167',
                    position: 'right',
                    className: 'fa-brands fa-whatsapp fa-2xl',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
