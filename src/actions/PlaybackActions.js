import API_URL from '../assets/ApiUrl'
import { headers} from '../assets/AuthorizationHeaders'
import { PLAY_SONG } from '../assets/ActionTypes'

export function playSong(song){
  return(dispatch) => {
    return fetch(`${API_URL}play`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({track_uri: song.track_id, lyrics_url: song.lyrics_url})
    })
    .then(response => response.json())
    .then(data => {
      return dispatch({type: PLAY_SONG, payload: {current_song: song, lyrics: data.lyrics}})
    })
  }
}
