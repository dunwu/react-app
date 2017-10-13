/**
 * @file 开发环境的 Root 容器
 * @author Zhang Peng
 * @see http://gaearon.github.io/react-hot-loader/getstarted/
 */
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { configRoute, configStore, history } from '../../common';

const store = configStore();
// let Router;
// if (process.env.NODE_ENV !== 'real') {
//   Router = require('react-router-dom/HashRouter').default;
// } else {
//   Router = require('react-router-dom/BrowserRouter').default;
// }

/**
 * 开发环境的 Root 容器，会包含 Redux 的开发工具
 * @class
 */
export default class RootContainer extends React.PureComponent {
  render() {
    if (!this.routes) this.routes = configRoute;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            {this.routes.defaultRoutes}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
