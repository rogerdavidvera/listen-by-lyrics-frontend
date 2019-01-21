import { combineReducers } from 'redux'
import authReducer from './authReducer'
import playerReducer from './playerReducer'
import libraryReducer from './libraryReducer'

export default combineReducers({
  auth: authReducer,
  player: playerReducer,
  library: libraryReducer
})
