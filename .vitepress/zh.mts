import { defineConfig, type DefaultTheme } from 'vitepress'


export const zh = defineConfig({
    title: '习码坊+',
    lang: 'zh-CN',
    description: '',
    themeConfig: {
        nav: nav(),
        sidebar: {
            '/note/': noteSidebar(),
            '/projects/': projectsSidebar(),
            '/iot/': iotSidebar()
        },
        footer: {
            // message: 'Released under the MIT License.',
            copyright: 'Copyright © 备案号： <a href="https://beian.miit.gov.cn/">陇ICP备2021001454号-1</a>'
          }
    }
});

function nav(): DefaultTheme.NavItem[] {
    return [
        // { text: '首页', link: '/' },
        { text: '笔记', link: '/note/' },
        { text: '项目', link: '/project/' },
    ];
}

function noteSidebar(): DefaultTheme.SidebarItem[] {
    return [
        { text: '目录', link: '/note/' },
        {text: 'Java', link: '/note/java/', collapsed: true,
            items: [
                { text: '基础', link: '/note/java/Basic' },
                { text: 'Jdbc', link: '/note/java/Jdbc' }
            ]
        },
        { text: 'Spring', link: '/note/spring/', collapsed: true,
            items: [
                { text: 'IOC', link: '/note/spring/Basic' },
                { text: 'SpringBoot', link: '/note/spring/SpringBoot' }
            ]
         },
    ];
}

function iotSidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
          text: 'iot core',
          items: [
            {
                text: '简介', link: '/iot/intro'
            }
          ]
        }
    ]
}



function projectsSidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '社区项目',
            // collapsed: false,
            items: [
                { text: '概览', link: '/projects/community/' },
                { text: '技术栈', link: '/projects/community/technology_stack' },
                { text: '初始化项目', link: '/projects/community/init_project' },
            ]
        }
    ];
}