/**
 * @file Sider-Header-Content-Footer 式页面级整体布局
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Layout } from 'antd';
import React from 'react';
import Content from './content/Content';
import Footer from './footer/Footer';
import { HCFHeader } from './header';

class HCFLayout extends React.PureComponent {
  render() {
    return (
      <Layout>
        <HCFHeader />
        <Content type="HCF">
          {this.props.children}
        </Content>
        <Footer />
      </Layout>
    );
  }
}
export default HCFLayout;
