/**
 * @file react router 入口。
 * @description react router 入口。注意：本项目中使用 react router 4.x，它的 API 与以前的版本有很大的不同。
 * @author Zhang Peng
 * @see https://reacttraining.com/react-router/
 * @see https://reacttraining.cn/
 */
import _ from 'lodash';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CoreContainer } from '../component';
import exampleRoutes from '../view/example/route';
import generalRoutes from '../view/general/route';

/**
 * 合并所有路由
 */
export const childRoutes = _.concat(generalRoutes, exampleRoutes);

/**
 * 默认路由
 * @type {XML}
 */
const defaultRoutes = (
  <Switch>
    <Route path="/" component={CoreContainer} />
  </Switch>
);

const configRoute = { childRoutes, defaultRoutes };
export default configRoute;
