import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    registerStart: (state) => {
      state.loading = true
      state.error = null
    },
    registerSuccess: (state) => {
      state.loading = false
      state.error = null
    },
    registerFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  clearError
} = authSlice.actions

export default authSlice.reducer