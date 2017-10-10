/**
 * @file 底部布局组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Layout } from 'antd';
import React from 'react';

import './index.less';

const { Footer } = Layout;

/**
 * 底部布局组件
 * @class
 */
class CustomFooter extends React.PureComponent {
  render() {
    return (
      <Footer className="ant-layout-footer">
        Ant Admin © 2017 Created by Zhang Peng
      </Footer>
    );
  }
}
export default CustomFooter;
