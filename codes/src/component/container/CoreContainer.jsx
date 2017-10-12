/**
 * @file 应用的核心容器组件
 * @author Zhang Peng
 * @see https://ant.design/components/layout-cn/
 */
import { Layout } from 'antd';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Content, Footer, Header, Sider } from '../';
import { configRoute } from '../../common';
import './CoreContainer.less';

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    render={props => (
    // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

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
              {configRoute.childRoutes.map((route, i) => (
                <RouteWithSubRoutes
                  key={i}
                  {...route}
                />
              ))}
              <Redirect from="*" to="/404" />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
export default CoreContainer;
