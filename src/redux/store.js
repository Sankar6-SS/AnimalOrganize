import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import persistedReducer from './reducers/index';

const store = createStore(persistedReducer, applyMiddleware(logger));

export default store;
