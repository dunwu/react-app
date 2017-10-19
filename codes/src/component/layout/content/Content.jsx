/**
 * @file 内容布局组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 * @see https://ant.design/components/card-cn/
 */
import { Card, Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

/**
 * 内容布局组件
 * @class
 */
class CustomContent extends React.PureComponent {
  state = {
    type: 'HCF'
  };

  componentWillMount() {
    this.setState({
      type: this.props.type
    });
  }

  render() {
    if (this.state.type === 'HCF') {
      require.ensure([], (require) => {
        require('./HCFContent.less');
      });
    } else if (this.state.type === 'SHCF') {
      require.ensure([], (require) => {
        require('./SHCFContent.less');
      });
    }

    return (
      <Content className="ant-layout-content">
        <Card noHovering bordered={false} bodyStyle={{ padding: 0 }}>
          {this.props.children}
        </Card>
      </Content>
    );
  }
}
export default CustomContent;
