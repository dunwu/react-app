/**
 * @file 面包屑组件
 * @author Zhang Peng
 * @see https://github.com/facebook/prop-types
 * @see https://ant.design/components/breadcrumb-cn/
 * @see https://ant.design/components/icon-cn/
 */
import { Breadcrumb } from 'antd';
import React from 'react';
import './Navpath.less';

/**
 * 面包屑组件
 * @class
 */
class Navpath extends React.PureComponent {
  render() {
    return (
      <div className="ant-layout-breadcrumb">
        <Breadcrumb style={{ padding: '12px 0 12px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default Navpath;
