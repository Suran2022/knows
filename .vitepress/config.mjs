import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/knows/",
  title: "橘猫集团知识库 - 2025",
  description: "橘猫集团 - CCO体系 - 知识管理部",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '产研前端', items:[
        {text: ' HTML与CSS', link: '/markdown-examples'},
        {text: ' JavaScript', link: '/markdown-examples'},
        {text: ' Vue 3', link: '/markdown-examples'}
      ] },
      { text: '产研后端', items:[
        {text: 'Java', link: 'https://eprpage.masas.cn'},
        {text: 'Java Web', link: 'https://eprpage.masas.cn'},
        {text: 'Spring Boot', link: 'https://eprpage.masas.cn'}
      ]}
    ],

       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },

    sidebar: [
      {
        text: '产研前端',
        items: [
          { text: ' HTML与CSS', link: '/markdown-examples' },
          { text: ' JavaScript', items: [
            { text: 'JavaSript-Day1-基础', link: '/JavaScript-Day1'}
          ]}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Suran2022' }
    ],

    footer:{
      copyright:"Copyright ©️ All rights reserved by Orange Cat Group" 
    }
  }
})
