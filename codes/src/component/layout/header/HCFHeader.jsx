/**
 * @file 顶部布局组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Col, Layout, Row } from 'antd';
import React from 'react';
import Menu from '../menu/Menu';
import Logo from '../logo/Logo';

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
          <Col xs={24} sm={24} md={18} lg={20} xl={20}>
            <Menu mode="horizontal" />
          </Col>
        </Row>
      </Header>
    );
  }
}
export default HCFHeader;

