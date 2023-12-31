import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import deviceToken from './deviceToken';

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  deviceToken,
});

export default reducer;
