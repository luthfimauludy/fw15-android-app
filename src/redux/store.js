import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

const store = configureStore({
  reducer,
  middleware: [logger, thunk],
});

export default store;
