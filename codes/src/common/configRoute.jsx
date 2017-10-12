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
import exampleRoutes from '../feature/example/route';
import generalRoutes from '../feature/general/route';
import specificRoutes from '../feature/specific/route';

/**
 * 子路由表
 */
let tmpRoutes = [];
tmpRoutes = _.concat(tmpRoutes, generalRoutes, specificRoutes, exampleRoutes);
console.log('tmpRoutes', tmpRoutes);
export const childRoutes = tmpRoutes;

/**
 * 默认路由
 * @type {XML}
 */
const defaultRoutes = (
  <Switch>
    <Route path="/" component={CoreContainer} />
  </Switch>
);

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const configRoute = { childRoutes, defaultRoutes, RouteWithSubRoutes };
export default configRoute;
