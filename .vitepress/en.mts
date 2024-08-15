import { defineConfig, type DefaultTheme } from 'vitepress'


export const en = defineConfig({
    lang: 'en-US',
    title: '习码坊+',
    description: '',
    themeConfig: {
        nav: nav(),
        footer: {
            // message: 'Released under the MIT License.',
            copyright: 'Copyright © 备案号： <a href="https://beian.miit.gov.cn/">陇ICP备2021001454号-1</a>'
          }
    }
});

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Projects', link: '/projects/' },
        { text: 'GitHub', link: 'https://github.com/yu-zhen/vue-use-kit' }
    ];
}