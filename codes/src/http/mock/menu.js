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
          key: '/example/table',
          title: '表格',
          type: 'ItemGroup',
          children: [
            { key: '/example/table/basic', title: '基础表格', type: 'Item', url: '/example/table/basic' }
          ]
        },
        {
          key: '/example/image',
          title: '图片',
          type: 'ItemGroup',
          children: [
            { key: '/example/image/gallery', title: '画廊', type: 'Item', url: '/example/image/gallery' }
          ]
        },
        {
          key: '/example/animation',
          title: '动画',
          type: 'ItemGroup',
          children: [
            { key: '/example/animation/basic', title: '基础动画', type: 'Item', url: '/example/animation/basic' },
            { key: '/example/animation/example', title: '动画示例', type: 'Item', url: '/example/animation/example' }
          ]
        }
      ]
    },
    {
      key: 'ui',
      title: 'UI组件',
      icon: 'scan',
      type: 'SubMenu',
      children: [
        {
          key: '/ui/general',
          title: 'General',
          type: 'ItemGroup',
          children: [
            { key: '/ui/general/button', title: '按钮', type: 'Item', url: '/ui/general/button' },
            { key: '/ui/general/icon', title: '图标', type: 'Item', url: '/ui/general/icon' }
          ]
        },
        {
          key: '/ui/feedback',
          title: 'Feedback',
          type: 'ItemGroup',
          children: [
            { key: '/ui/feedback/alert', title: '警告提示', type: 'Item', url: '/ui/feedback/alert' },
            { key: '/ui/feedback/modal', title: '对话框', type: 'Item', url: '/ui/feedback/modal' }
          ]
        }
      ]
    },
    {
      key: 'tool',
      title: '工具箱',
      icon: 'tool',
      type: 'SubMenu',
      children: [
        { key: '/tool/math', title: '数字工具', type: 'Item', url: '/tool/math' },
        { key: '/tool/qrcode', title: '二维码', type: 'Item', url: '/tool/qrcode' },
        { key: '/tool/richeditor', title: '富文本编辑', type: 'Item', url: '/tool/richeditor' }
      ]
    }
  ]
};
