import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "橘猫集团 - CCO体系 -企业信息化部",
  description: "橘猫集团产研知识库，用于查询业务知识和培训使用。",
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

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer:{
      copyright:"Copyright ©️ All rights reserved by Orange Cat Group" 
    }
  }
})
