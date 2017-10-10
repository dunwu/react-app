/**
 * @file 顶部布局组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Layout } from 'antd';
import React from 'react';
import Breadcrumb from '../navpath/Navpath';

import './Header.less';

const { Header } = Layout;

/**
 * 顶部布局组件
 * @class
 */
class CustomHeader extends React.PureComponent {
  render() {
    const { navpath } = this.props;

    return (
      <Header className="ant-layout-header">
        <Breadcrumb data={navpath} />
      </Header>
    );
  }
}
export default CustomHeader;

