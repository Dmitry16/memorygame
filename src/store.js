import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers/index';

// console.log('reducer', typeof reducer);

const store = createStore(reducer);

export default store;
