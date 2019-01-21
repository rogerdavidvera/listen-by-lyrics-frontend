// Information of the current song being played on the app
// This information is used to pull the lyrics
import { PLAY_SONG } from '../assets/ActionTypes'

const initialState = {current_song: null};

export default (state = initialState, action) => {
  switch(action.type) {
    case (PLAY_SONG):
      return Object.assign({}, state, {
        current_song: action.payload.current_song,
        lyrics: action.payload.lyrics
      })
    default:
      return state
  }
}
