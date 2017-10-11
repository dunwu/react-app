/**
 * @file App 的总入口
 * @author Zhang Peng
 * @see http://gaearon.github.io/react-hot-loader/getstarted/
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'react-hot-loader/patch';
import RootContainer from './component/container/RootContainer';

const render = (Container) => {
  ReactDOM.render(
    <AppContainer>
      <Container />
    </AppContainer>,
    document.getElementById('root')
  );
};

// 初次启动 App
render(RootContainer);

// 热替换启动 App
if (module.hot) {
  module.hot.accept('./component/container/RootContainer', () => {
    const NextRootContainer = require('./component/container/RootContainer');
    render(NextRootContainer);
  });
}
