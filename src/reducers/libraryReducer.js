// Information about the current user's saved song library
// Saved songs are pulled from the user's ListenByLyrics Spotify playlist
import { GET_SONGS } from '../assets/ActionTypes'

const initialState = {tracks: []}
export default (state = initialState, action) => {
  switch(action.type) {
    case (GET_SONGS):
      return Object.assign({}, state, {tracks: action.payload.tracks})
    default:
      return state
  }
}
