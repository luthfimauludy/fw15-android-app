import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
});

export default reducer;
