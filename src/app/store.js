import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginReducer from '../features/auth/loginSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const reducers = combineReducers({
  //这里的key即useSelector里的属性名
  login: loginReducer,
})
const persistedReducer = persistReducer(persistConfig, reducers)

// 参考文档：https://redux-toolkit.js.org/api/configureStore
export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
