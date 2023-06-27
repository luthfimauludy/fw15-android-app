import {createSlice} from '@reduxjs/toolkit';

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
});

export const {login, clearAuthState} = auth.actions;
export default auth.reducer;
