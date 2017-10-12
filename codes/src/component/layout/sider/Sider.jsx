/**
 * @file 侧边导航栏组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Icon, Layout, Menu, Spin } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { Link, matchPath, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { onMenuItemSelected, onMenuListSearch } from '../../../feature/general/menu/actions';
import logoImg from './antd.svg';

import './Sider.less';

const { Sider } = Layout;

const isActive = (path, history) => {
  return matchPath(path, {
    path: history.location.pathname,
    exact: true,
    strict: false
  });
};

/**
 * 侧边导航栏组件。侧边栏采用的响应式布局方式，页面大小收缩到一定程度，侧边栏会隐藏。
 * @class
 */
class CustomSider extends React.Component {
  state = {
    openKey: 'sub0',
    activeKey: 'menu0',
    mode: 'inline'
  };

  componentWillMount() {
    this.props.onMenuListSearch();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menu) {
      if (this.props.menu.list !== nextProps.menu.list) {
        nextProps.menu.list.forEach((item) => {
          item.children.forEach((node) => {
            if (node.url && isActive(node.url, this.props.history)) {
              this.menuClickHandle({
                key: `${node.key}`,
                keyPath: [`${node.key}`, `${item.key}`]
              });
            }
          });
        });
      }
    }
  }

  menuClickHandle = (item) => {
    this.setState({
      activeKey: item.key
    });
    const selected = {
      key: item.key,
      keyPath: item.keyPath
    };
    this.props.onMenuItemSelected(selected);
  };

  render() {
    const { menu, history } = this.props;
    let { activeKey, openKey } = this.state;

    const transToAntMenus = (nodes, pkey) => {
      return Array.isArray(nodes) && nodes.map((item) => {
        const menus = transToAntMenus(item.children, item.key);
        if (item.url && isActive(item.url, history)) {
          activeKey = `${item.key}`;
          openKey = `${pkey}`;
        }

        switch (item.type) {
        case 'SubMenu':
          return (
            <Menu.SubMenu
              key={item.key}
              title={<span><Icon type={item.icon} /><span className="nav-text">{item.title}</span></span>}
            >
              {menus}
            </Menu.SubMenu>
          );
        case 'ItemGroup':
          return (
            <Menu.ItemGroup
              key={item.key}
              title={<span><Icon type={item.icon} />&nbsp;<span className="nav-text">{item.title}</span></span>}
            >
              {menus}
            </Menu.ItemGroup>
          );
        case 'Divider':
          return (
            <Menu.Divider key={item.key} />
          );
        case 'Item':
        default:
          return (
            <Menu.Item className="ant-menu-item" key={item.key}>
              {
                item.url ? <Link to={item.url}>{item.icon && <Icon type={item.icon} />}{item.title}</Link> :
                  (<span>{item.icon && <Icon type={item.icon} />}{item.title}</span>)
              }
            </Menu.Item>
          );
        }
      });
    };

    let antMenus;
    if (menu.list) {
      antMenus = transToAntMenus(menu.list);
    }

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
      >
        <div className="ant-layout-logo">
          <div className="logo-container">
            <img alt="antd.svg" src={logoImg} />
            <span>REACT APP</span>
          </div>
        </div>
        <Spin spinning={menu.loading} delay={500} size="large" tip="Loading...">
          <Menu
            className="ant-menu"
            mode={this.state.mode}
            theme="dark"
            selectedKeys={[activeKey]}
            defaultOpenKeys={[openKey]}
            onClick={this.menuClickHandle}
          >
            {antMenus}
          </Menu>
        </Spin>
      </Sider>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onMenuListSearch: bindActionCreators(onMenuListSearch, dispatch),
    onMenuItemSelected: bindActionCreators(onMenuItemSelected, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomSider));
