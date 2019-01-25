import React from 'react'
import { connect } from 'react-redux'
import { playSong } from '../actions/PlaybackActions'
import { saveSong } from '../actions/LibraryActions'
import SongInfo from './SongInfo'
import {
  Card,
  Image
} from 'semantic-ui-react'

const SongCard = ({ song, playSong, saveSong}) => {
  const handlePlay = () => {
    playSong(song)
  }
  const handleSave = () => {
    saveSong(song)
  }
  return (
    <Card fluid>
      <Image src={song.album_art} onClick={handlePlay} />
      <Card.Content textAlign='center' onClick={handlePlay}>
        <Card.Header>{song.song}</Card.Header>
        <Card.Meta>{song.artist}</Card.Meta>
      </Card.Content>
      <Card.Content extra textAlign='center'>
        <SongInfo
          name={song.song}
          artist={song.artist}
          art={song.album_art}
          album={song.album}
          lyricsArray={song.lyrics.lyrics}
          handlePlay={handlePlay}
          handleSave={handleSave}
        />
      </Card.Content>
    </Card>
  )
}

const mapDispatchToProps = {
  playSong,
  saveSong
}

export default connect(null, mapDispatchToProps)(SongCard)


// Map props to state
// If current song is a match, display pause
//
