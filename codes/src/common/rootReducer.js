/**
 * @file redux reducer 的管理入口
 * @author Zhang Peng
 * @description redux reducer 的管理入口。
 * @see http://cn.redux.js.org/docs/basics/Reducers.html
 */
import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import menu from '../feature/general/menu/reducers';

const reducerMap = {
  router,
  menu
};

// combineReducers 的用法可以参考以下链接的内容
// @see http://cn.redux.js.org/docs/recipes/reducers/UsingCombineReducers.html
// @see http://cn.redux.js.org/docs/recipes/reducers/BeyondCombineReducers.html
// @see http://cn.redux.js.org/docs/api/combineReducers.html
export default combineReducers(reducerMap);
