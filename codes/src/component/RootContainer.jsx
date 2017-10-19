/**
 * @file 应用的 Root 容器
 * @author Zhang Peng
 * @see http://gaearon.github.io/react-hot-loader/getstarted/
 */
import React from 'react';
import { connect, Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { configStore, history, rootRouter } from '../common';
import { onAppLayoutInit } from '../view/general/setting/redux/actions';

// 创建 Redux Store，这是本应用唯一的状态管理容器
const store = configStore();

// 返回包裹了路由的 HCFLayout
class WrappedLayout extends React.PureComponent {
  componentWillMount() {
    this.props.onAppLayoutInit('HCF');
  }

  render() {
    const { setting } = this.props;
    let Layout;
    if (setting.layout === 'HCF') {
      Layout = require('./layout/HCFLayout').default;
    } else if (setting.layout === 'SHCF') {
      Layout = require('./layout/SHCFLayout').default;
    }
    return (
      <Layout>
        <Switch>
          {rootRouter.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          ))}
          <Redirect from="/" to="/home" />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    );
  }
}
function mapStateToProps(state) {
  return {
    setting: state.setting
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAppLayoutInit: bindActionCreators(onAppLayoutInit, dispatch)
  };
}
const WrappedContainer = connect(mapStateToProps, mapDispatchToProps)(WrappedLayout);

/**
 * 应用的 Root 容器
 */
export default class RootContainer extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={WrappedContainer} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

