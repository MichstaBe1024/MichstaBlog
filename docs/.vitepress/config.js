export default {
  base: '/michstabe_blog/',
  title: 'MichstaBe',
  description: 'MichstaBe Blog',// mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: 'MichstaBe',
    logo: '/avatar.png',
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "博客", link: "/articles/index" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/MichstaBe1024" },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/index",
            },
          ],
        }
      ]
    },
  }
}