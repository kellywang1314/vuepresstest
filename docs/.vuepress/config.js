const path = require('path');
const moment = require('moment')

module.exports = {
  base: '/vuepresstest/',
  dest: 'public',
  title: 'h5-koala 使用指南',
  description: 'h5 UI 组件库',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/koala.ico' }]
  ],
  // 站点多语言配置
  locales: {
    '/': {
      // 将会被设置为 <html> 的 lang 属性 会对格式化日期有影响
      lang: 'zh-CN',
    },
  },
  // webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@public': path.resolve(__dirname, './public')
      }
    }
  },
  // markdown配置
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    // Gitlab URL
    repo: 'https://github.com/kellywang1314/vuepresstest.git',
    // 自定义仓库链接文字
    repoLabel: '查看源码',
    // 文档仓库地址
    docsRepo: 'https://github.com/kellywang1314/vuepresstest.git',
    // 文档分支：
    docsBranch: 'master',
    // 假如文档不是放在仓库的根目录下
    docsDir: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitLab 上编辑此页',
    // 平滑滚动
    smoothScroll: true,
    // Service Worker
    serviceWorker: {
      // 刷新内容的弹窗
      updatePopup: true,
    },
    // 最后更新时间 string | boolean => 最后更新时间: 7/10/2019, 1:17:38 PM
    lastUpdated: '上次更新',
    // 侧边栏
    sidebar: [
      {
        title: '如何开始',
        collapsable: false,
        children: [
          'quick_start/',
        ]
      },
      {
        title: '组件使用',
        collapsable: false,
        children: [
          'component/color',
          'component/ktext',
          'component/badge',
          'component/label',
          'component/bubble',
          'component/subscript',
          'component/icon',
          'component/checkbox',
          'component/exceptionStatus',
          'component/loading',
          'component/inputNumber',
          'component/shadow',
          'component/toast',
          'component/header',
          'component/button',
          'component/dialog',
          'component/radioview',
          'component/temporaryViewOld',
          'component/switch',
          'component/cardnotice',
          'component/textNotice',
          'component/panelNotice',
          'component/dash',
          'component/swiper',
          'component/other',

        ]
      },
      // {
      //   title: '更新日志',
      //   collapsable: false,
      //   children: [
      //     'change_log/',
      //   ],
      // },
    ],
  },
  // 插件
  plugins: [
    ['@vuepress/back-to-top', true],
    'vuepress-plugin-mermaidjs',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang)
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    ]
  ],
};
