/**
 * @file 顶部布局组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Col, Icon, Layout, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';

import './HCFHeader.less';

const { Header } = Layout;

/**
 * 顶部布局组件
 * @class
 */
class HCFHeader extends React.PureComponent {
  render() {
    return (
      <Header className="ant-layout-header-hcf">
        <Row gutter={8}>
          <Col xs={0} sm={0} md={6} lg={4} xl={4}>
            <Logo />
          </Col>
          <Col xs={22} sm={22} md={16} lg={18} xl={18}>
            <Menu mode="horizontal" />
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            <Link to="/setting">
              <span className="setting-hcf">
                <Icon className="icon" type="setting" />
                <span >设置</span>
              </span>
            </Link>
          </Col>
        </Row>
      </Header>
    );
  }
}
export default HCFHeader;

