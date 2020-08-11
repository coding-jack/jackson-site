
import wordpressReducer from './wordpressReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  wp: wordpressReducer
});

export default rootReducer;
