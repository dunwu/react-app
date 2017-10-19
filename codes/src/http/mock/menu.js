/**
 * 供非真实环境使用的菜单项仿真数据。
 * 进入应用后，菜单栏会查询 /menu/list 接口获取菜单项数据。
 * 被 axios-mock-adapter 拦截请求，将返回以下的模拟应答数据。
 * @type {{code: number, message: string, data: [*]}}
 */

module.exports = {
  code: 0,
  message: '成功',
  data: [
    {
      key: 'example',
      title: '示例',
      icon: 'video-camera',
      type: 'SubMenu',
      children: [
        {
          key: '/example/image',
          title: '图片',
          type: 'ItemGroup',
          children: [
            { key: '/example/image/gallery', title: '画廊', type: 'Item', url: '/example/image/gallery' }
          ]
        }, {
          key: '/example/animation',
          title: '动画',
          type: 'ItemGroup',
          children: [
            { key: '/example/animation/basic', title: '基础动画', type: 'Item', url: '/example/animation/basic' },
            { key: '/example/animation/example', title: '动画示例', type: 'Item', url: '/example/animation/example' }
          ]
        }
      ]
    }, {
      key: 'ui',
      title: '组件',
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
        }, {
          key: '/ui/data',
          title: 'Data',
          type: 'ItemGroup',
          children: [
            { key: '/ui/data/table', title: '表格', type: 'Item', url: '/ui/data/table' }
          ]
        }, {
          key: '/ui/feedback',
          title: 'Feedback',
          type: 'ItemGroup',
          children: [
            { key: '/ui/feedback/alert', title: '警告提示', type: 'Item', url: '/ui/feedback/alert' },
            { key: '/ui/feedback/modal', title: '对话框', type: 'Item', url: '/ui/feedback/modal' },
            { key: '/ui/feedback/drag', title: '拖拽', type: 'Item', url: '/ui/feedback/drag' }
          ]
        }
      ]
    }, {
      key: 'tool',
      title: '工具',
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
