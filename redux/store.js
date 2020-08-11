import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
);

export default store;
