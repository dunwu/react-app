/**
 * @file 应用的核心容器组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Layout } from 'antd';
import React from 'react';
import { Content, Footer, Header, Sider } from '../';
import { Welcome } from '../../feature';
import './CoreContainer.less';

/**
 * 应用的核心容器组件
 * <p>控制整个页面的布局。整体采用的是侧边布局。</p>
 * @class
 */
class CoreContainer extends React.PureComponent {
  render() {
    return (
      <Layout className="ant-layout-has-sider">
        <Sider />
        <Layout>
          <Header />
          <Content>
            <Welcome />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
export default CoreContainer;
