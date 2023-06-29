import {createSlice} from '@reduxjs/toolkit';
import {asyncLogin} from '../actions/auth';

const initialState = {
  token: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    clearAuthState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

export const {login, clearAuthState} = auth.actions;
export default auth.reducer;
