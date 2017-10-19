/**
 * @file 侧边导航栏组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Icon, Menu, Spin } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { Link, matchPath, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { onMenuItemSelected, onMenuListSearch } from './redux/actions';
import './Menu.less';

const isActive = (path, history) => {
  return matchPath(path, {
    path: history.location.pathname,
    exact: true,
    strict: false
  });
};

/**
 * 根据查询数据，动态加载菜单项
 */
class CustomMenu extends React.PureComponent {
  state = {
    openKey: 'home',
    activeKey: 'home',
    mode: 'inline'
  };

  componentWillMount() {
    this.props.onMenuListSearch();
    this.setState({
      mode: this.props.mode
    });
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
              className="ant-menu-sub-menu"
              key={item.key}
              title={<span><Icon type={item.icon} /><span className="nav-text">{item.title}</span></span>}
            >
              {menus}
            </Menu.SubMenu>
          );
        case 'ItemGroup':
          return (
            <Menu.ItemGroup
              className="ant-menu-item-group"
              key={item.key}
              title={
                <span>
                  <Icon type={item.icon} />&nbsp;
                  <span className="nav-text">{item.title}</span>
                </span>
              }
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
                item.url ? (
                  <Link to={item.url}>
                    {item.icon && <Icon type={item.icon} />}<span className="nav-text">{item.title}</span>
                  </Link>
                ) : (
                  <span>
                    {item.icon && <Icon type={item.icon} />}<span className="nav-text">{item.title}</span>
                  </span>
                )
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomMenu));
