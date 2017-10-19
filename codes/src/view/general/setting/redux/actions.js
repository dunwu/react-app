import { createAction } from 'redux-actions';
import { APP_LAYOUT_CHANGE, APP_LAYOUT_INIT } from './constants';

// 选中菜单列表项
const appLayoutInit = createAction(APP_LAYOUT_INIT);
export const onAppLayoutInit = (key) => {
  return (dispatch) => {
    dispatch(appLayoutInit(key));
  };
};

const appLayoutChange = createAction(APP_LAYOUT_CHANGE);
export const onAppLayoutChange = (key) => {
  return (dispatch) => {
    dispatch(appLayoutChange(key));
  };
};
