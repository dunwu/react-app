/**
 * @file 顶部布局组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Col, Layout, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navpath from '../navpath/Navpath';

import './SHCFHeader.less';

const { Header } = Layout;

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

    return (
      <Header className="ant-layout-header-shcf">
        <Row type="flex" align="middle">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Navpath data={navpath} />
          </Col>
          <Col xs={0} sm={2} md={4} lg={8} xl={8} />
          <Col xs={0} sm={6} md={6} lg={4} xl={4} />
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

