/**
 * @file 应用的核心容器组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Layout } from 'antd';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { configRoute } from '../../common';
import { NotFoundView } from '../../feature';
import { Content, Footer, Header, Sider } from '../';
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
            <Switch>
              {configRoute.childRoutes.map((route) => (
                <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
              ))}
              <Route path="*" component={NotFoundView} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
export default CoreContainer;
