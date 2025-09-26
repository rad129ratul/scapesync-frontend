import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    loading: false,
    notification: null,
    showMobileMenu: false,
    showPassword: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setNotification: (state, action) => {
      state.notification = action.payload
    },
    clearNotification: (state) => {
      state.notification = null
    },
    toggleMobileMenu: (state) => {
      state.showMobileMenu = !state.showMobileMenu
    },
    togglePassword: (state) => {
      state.showPassword = !state.showPassword
    },
  },
})

export const { 
  setLoading, 
  setNotification, 
  clearNotification,
  toggleMobileMenu,
  togglePassword
} = uiSlice.actions

export default uiSlice.reducer