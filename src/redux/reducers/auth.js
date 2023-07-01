import {createSlice} from '@reduxjs/toolkit';
import {asyncLogin} from '../actions/auth';

const initialState = {
  token: null,
  errorMessage: '',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    clearMessage: state => {
      state.errorMessage = '';
    },
    logout: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(asyncLogin.pending, state => {
      state.errorMessage = '';
    });
    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.errorMessage = action.payload;
    });
  },
});

export const {login, logout, clearMessage} = auth.actions;
export default auth.reducer;
