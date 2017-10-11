import _ from 'lodash';
import { combineReducers } from 'redux';
import { MENU_LIST_SEARCH, MENU_LIST_SEARCH_FAILED, MENU_LIST_SEARCH_SUCCESS } from './constants';

const list = (state = { loading: false }, action = {}) => {
  switch (action.type) {
  case MENU_LIST_SEARCH:
    return state;
  case MENU_LIST_SEARCH_SUCCESS:
    return _.get(action, ['payload'], action);
  case MENU_LIST_SEARCH_FAILED:
    return state;
  default:
    return state;
  }
};
const menu = combineReducers({
  list
});
export default menu;
