import { UPDATE_AUTHORIZATION, LOGOUT_USER } from '../assets/ActionTypes'

const initialState = {
  isLoggedIn: false,
  user: {spotify_id: null, display_name: null, url: null, img_url: null},
  error: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    // Action has been dispatched to login a user
    case (UPDATE_AUTHORIZATION):
      return Object.assign({}, state, {user: action.payload.user, isLoggedIn: true})
    // Action has been dispatched to end current session
    case (LOGOUT_USER):
      // Remove JWT token from local storage
      localStorage.removeItem('jwt')
      return Object.assign({}, state, {
        isLoggedIn: false,
        user: {spotify_id: null, display_name: null, url: null, img_url: null}
      })
    default:
      return state
  }
}
