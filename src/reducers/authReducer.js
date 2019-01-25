import { UPDATE_AUTHORIZATION, LOGOUT_USER, LOGGING_IN} from '../assets/ActionTypes';
const initialState = {
  isLoggedIn: false,
  user: {spotify_id: null, display_name: null, url: null, img_url: null},
  error: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    // Action has been dispatched to login a user
    case (LOGGING_IN):
      // Change state to reflect logging in process
      return Object.assign({}, state, {loggingIn: true})
    case (UPDATE_AUTHORIZATION):
      // Change state to reflect current user information
      return Object.assign({}, state, {user: action.payload.user, isLoggedIn: true, loggingIn: false})
    // Action has been dispatched to end current session
    case (LOGOUT_USER):
      // Remove JWT token from local storage
      localStorage.removeItem('jwt')
      // Change state to a logged out
      return Object.assign({}, state, {
        isLoggedIn: false,
        user: {spotify_id: null, display_name: null, url: null, img_url: null},
      })
    default:
      return state
  }
}
