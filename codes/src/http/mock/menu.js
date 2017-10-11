module.exports = {
  code: 0,
  messages: '成功',
  data: [
    {
      key: 0,
      title: 'Home',
      icon: 'home',
      type: 'Item',
      url: '/',
      children: []
    },
    {
      key: 1,
      title: 'Pages',
      icon: 'message',
      type: 'SubMenu',
      url: null,
      children: [
        {
          key: 11,
          title: 'WelcomeView',
          icon: 'gift',
          type: 'Item',
          url: '/welcome',
          children: []
        },
        {
          key: 12,
          title: 'MailboxView',
          icon: 'mail',
          type: 'Item',
          url: '/mail',
          children: []
        }
      ]
    },
    {
      key: 2,
      title: 'Others',
      icon: 'coffee',
      type: 'SubMenu',
      url: null,
      children: [
        {
          key: 21,
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
