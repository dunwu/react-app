/**
 * @file 顶部布局组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Col, Icon, Layout, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
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
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            <Link to="/setting">
              <span className="setting-shcf" >
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

