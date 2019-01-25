import API_URL from '../assets/ApiUrl'
import { headers } from '../assets/AuthorizationHeaders'
import { SAVE_SONG } from '../assets/ActionTypes'

export function saveSong(song){
  return(dispatch) => {
    return fetch(`${API_URL}save`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        track: {
          name: song.song,
          artist: song.artist,
          album: song.album,
          album_art: song.album_art,
          lyrics_url: song.lyrics_url,
          spotify_track_id: song.track_id
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      return dispatch({type: SAVE_SONG, payload: {current_song: song, lyrics: data.lyrics}})
    })
  }
}
