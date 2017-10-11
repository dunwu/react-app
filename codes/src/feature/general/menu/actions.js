import { message } from 'antd';
import { createAction } from 'redux-actions';
import http from '../../../http';
import { MENU_LIST_SEARCH, MENU_LIST_SEARCH_FAILED, MENU_LIST_SEARCH_SUCCESS } from './constants';

const menuListSearch = createAction(MENU_LIST_SEARCH);
const menuListSearchSuccess = createAction(MENU_LIST_SEARCH_SUCCESS);
const menuListSearchFailed = createAction(MENU_LIST_SEARCH_FAILED);
export default function onMenuListSearch(params) {
  return (dispatch) => {
    dispatch(menuListSearch());
    http.get('/menu/list', { params })
      .then((response) => {
        message.info('查询成功');
        dispatch(menuListSearchSuccess(response.data.data));
      })
      .catch((error) => {
        message.error('查询失败');
        dispatch(menuListSearchFailed(error));
      });
  };
}
