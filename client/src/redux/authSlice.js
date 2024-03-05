// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//    user: null,
//    token: null,
// }

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         login:(state, action) => {
//             state.user = action.payload.others
//             state.token = action.payload.token
//         },
//         register:(state, action) => {
//             state.user = action.payload.others
//             state.token = action.payload.token
//         },
//         logout: (state) => {
//             state.user = null
//             state.token = null
//             localStorage.clear()
//         }
//     }
// })

// export const {login, register, logout} = authSlice.actions

// export default authSlice.reducer


// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    register: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.clear();
    },
  },
});

export const { login, register, updateUser, logout } = authSlice.actions;

export default authSlice.reducer;
