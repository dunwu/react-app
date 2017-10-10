/**
 * @file 侧边导航栏组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Icon, Layout, Menu } from 'antd';
import React from 'react';
import logoImg from './antd.svg';

import './Sider.less';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

/**
 * 侧边导航栏组件。侧边栏采用的响应式布局方式，页面大小收缩到一定程度，侧边栏会隐藏。
 * @class
 */
class CustomSider extends React.PureComponent {
  render() {
    return (
      /**
       * 响应式布局
       * 说明：配置 breakpoint 属性即生效，视窗宽度小于 breakpoint 时 Sider 缩小为 collapsedWidth 宽度，
       * 若将 collapsedWidth 设置为零，会出现特殊 trigger。
       */
      <Sider
        className="ant-layout-sider"
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
        <div className="ant-layout-logo">
          <div className="logo-container">
            <img alt="antd.svg" src={logoImg} />
            <span>React App</span>
          </div>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>User</span></span>}
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team" /><span>Team</span></span>}
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default CustomSider;
