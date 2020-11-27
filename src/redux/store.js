import {createStore,applyMiddleware} from 'redux';
import combineReducer from './root-reducer';

import logger from 'redux-logger';

const middleware = [logger];

const Store = createStore(combineReducer,applyMiddleware(middleware));

export default Store;