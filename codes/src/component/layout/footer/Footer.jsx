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
        Copyright © 2017 <a href="https://github.com/dunwu/" target="_blank">Zhang Peng</a><br />
      </Footer>
    );
  }
}
export default CustomFooter;
