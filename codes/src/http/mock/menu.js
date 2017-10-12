module.exports = {
  code: 0,
  messages: '成功',
  data: [
    {
      key: 'home',
      title: '首页',
      icon: 'home',
      type: 'Item',
      url: '/',
      children: []
    },
    {
      key: 'pages',
      title: '页面',
      icon: 'switcher',
      type: 'SubMenu',
      url: null,
      children: [
        {
          key: 'welcome',
          title: '欢迎',
          type: 'Item',
          url: '/welcome',
          children: []
        },
        {
          key: 'mail',
          title: '邮箱',
          type: 'Item',
          url: '/mail',
          children: []
        },
        {
          key: '404',
          title: '404',
          type: 'Item',
          url: '/404',
          children: []
        }
      ]
    },
    {
      key: 'animation',
      title: '动画',
      icon: 'rocket',
      type: 'SubMenu',
      url: null,
      children: [
        {
          key: 'animation-basic',
          title: '基础动画',
          type: 'Item',
          url: '/example/animation/basic'
        },
        {
          key: 'animation-example',
          title: '动画示例',
          type: 'Item',
          url: '/example/animation/example'
        }
      ]
    },
    {
      key: 'others',
      title: '菜单项测试',
      icon: 'coffee',
      type: 'SubMenu',
      url: null,
      children: [
        {
          key: 'windows',
          title: 'Windows',
          icon: 'windows-o',
          type: 'ItemGroup',
          url: null,
          children: [
            {
              key: 22,
              title: 'Windows-1',
              icon: null,
              type: 'Item',
              url: '/',
              children: []
            }
          ]
        },
        {
          key: 23,
          title: 'IOS',
          icon: 'apple-o',
          type: 'ItemGroup',
          url: null,
          children: [
            {
              key: 24,
              title: 'IOS-1',
              icon: null,
              type: 'Item',
              url: '/',
              children: []
            }
          ]
        }
      ]
    }
  ]
};
