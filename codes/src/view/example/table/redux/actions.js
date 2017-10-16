import { message } from 'antd';
import { createAction } from 'redux-actions';
import http from '../../../../http';
import {
  EXAMPLE_BASIC_TABLE_LIST_SEARCH,
  EXAMPLE_BASIC_TABLE_LIST_SEARCH_FAILED,
  EXAMPLE_BASIC_TABLE_LIST_SEARCH_SUCCESS
} from './constants';

const basicTableListSearch = createAction(EXAMPLE_BASIC_TABLE_LIST_SEARCH);
const basicTableListSearchSuccess = createAction(EXAMPLE_BASIC_TABLE_LIST_SEARCH_SUCCESS);
const basicTableListSearchFailed = createAction(EXAMPLE_BASIC_TABLE_LIST_SEARCH_FAILED);
export default function onBasicTableListSearch(params) {
  return (dispatch) => {
    dispatch(basicTableListSearch());
    http.get('/example/table/basic/list', { params })
      .then((response) => {
        message.info('查询成功');
        dispatch(basicTableListSearchSuccess(response.data.data));
      })
      .catch((error) => {
        message.error('查询失败');
        dispatch(basicTableListSearchFailed(error));
      });
  };
}
