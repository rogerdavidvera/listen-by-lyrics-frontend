import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playSong } from '../actions/PlaybackActions'
import SongInfo from './SongInfo'
import {
  Card,
  Icon,
  Image,
  Divider
} from 'semantic-ui-react'

const SongCard = ({ song, playSong }) => {
  const handlePlay = () => {
    // console.log(song)
    playSong(song)
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
          lyrics={song.lyrics}
        />
      </Card.Content>
    </Card>
  )
}

const mapDispatchToProps = {
  playSong
}

export default connect(null, mapDispatchToProps)(SongCard)


// Map props to state
// If current song is a match, display pause
//
