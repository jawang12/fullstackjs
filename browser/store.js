import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/root.js';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware, createLogger())));

export default store;
