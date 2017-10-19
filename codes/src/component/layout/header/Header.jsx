/**
 * @file 顶部布局组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Avatar, Badge, Col, Dropdown, Icon, Layout, Menu, Popover, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Navpath from '../navpath/Navpath';

import './Header.less';

const { Header } = Layout;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
  </div>
);

/**
 * 顶部布局组件
 * @class
 */
class CustomHeader extends React.PureComponent {
  static propTypes = {
    navpath: PropTypes.array
  };
  static defaultProps = {
    navpath: []
  };

  render() {
    const { navpath } = this.props;

    const menu = (
      <Menu>
        <Menu.Item key="1">
          选项1
        </Menu.Item>
        <Menu.Item key="2">
          选项2
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <a>注销</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Header className="ant-layout-header">
        <Row type="flex" align="middle">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Navpath data={navpath} />
          </Col>
          <Col xs={0} sm={2} md={4} lg={8} xl={8} />
          <Col xs={0} sm={6} md={6} lg={4} xl={4}>
            <Badge className="header-icon" count={5}>
              <Link to="/ui/data/table">
                <Icon type="mail" />
              </Link>
            </Badge>
            <Popover content={content} title="Title" trigger="click">
              <Badge className="header-icon" dot>
                <Icon type="notification" />
              </Badge>
            </Popover>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="https://github.com/dunwu">
                <Avatar shape="circle" style={{ verticalAlign: 'middle', backgroundColor: '#00a2ae' }} size="large">
                  Admin
                </Avatar>
                <Icon type="down" />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    );
  }
}
const mapStateToProps = (state) => {
  const { menu } = state;
  return {
    navpath: menu.navpath
  };
};

const mapDispatchToProps = () => {
  return {};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomHeader));

