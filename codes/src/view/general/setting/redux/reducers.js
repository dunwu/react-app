import _ from 'lodash';
import { combineReducers } from 'redux';
import { APP_LAYOUT_CHANGE, APP_LAYOUT_INIT } from './constants';

const initState = 'SHCF';

const layout = (state = initState, action = {}) => {
  switch (action.type) {
  case APP_LAYOUT_INIT: {
    return _.get(action, ['payload'], state);
  }
  case APP_LAYOUT_CHANGE: {
    return _.get(action, ['payload'], state);
  }
  default:
    return state;
  }
};

const setting = combineReducers({
  layout
});
export default setting;
