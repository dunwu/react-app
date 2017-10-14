module.exports = {
  code: 0,
  messages: '成功',
  data: [
    { key: 'home', title: '首页', icon: 'home', type: 'Item', url: '/home', children: [] },
    {
      key: 'general',
      title: '公共页面',
      icon: 'safety',
      type: 'SubMenu',
      children: [
        { key: 'welcome', title: '欢迎', type: 'Item', url: '/welcome' },
        { key: 'mail', title: '邮箱', type: 'Item', url: '/mail' },
        { key: '404', title: '404', type: 'Item', url: '/404' }
      ]
    },
    {
      key: 'example',
      title: '示例',
      icon: 'video-camera',
      type: 'SubMenu',
      children: [
        {
          key: 'animation',
          title: '动画',
          type: 'ItemGroup',
          children: [
            { key: 'animation-basic', title: '基础动画', type: 'Item', url: '/example/animation/basic' },
            { key: 'animation-example', title: '动画示例', type: 'Item', url: '/example/animation/example' }
          ]
        }
      ]
    },
    {
      key: 'ui',
      title: 'UI',
      icon: 'video-camera',
      type: 'SubMenu',
      children: [
        {
          key: 'general',
          title: '一般',
          type: 'ItemGroup',
          children: [
            { key: 'icon', title: '图标', type: 'Item', url: '/ui/icon' }
          ]
        }
      ]
    }
  ]
};
