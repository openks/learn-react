import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/auth/loginSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
  },
})
