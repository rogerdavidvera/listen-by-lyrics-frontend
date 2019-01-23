import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playSong } from '../../actions/PlaybackActions'

import {
  Card,
  Icon,
  Image,
  Divider
} from 'semantic-ui-react'

const SongCard = ({ song, playSong }) => (
  <Card fluid>
    <Image src={song.album_art} />
    <Card.Content textAlign='center'>
      <Card.Header>{song.song}</Card.Header>
      <Card.Meta>{song.artist}</Card.Meta>
      <Divider />
      <Card.Content extra>
      <Icon name="play" color='pink' size="large"/>
      <Icon name="ellipsis horizontal" color='teal' size="large"/>
     </Card.Content>
    </Card.Content>
  </Card>
)

const mapDispatchToProps = {
  playSong
}

export default connect(null, mapDispatchToProps)(SongCard)


// Map props to state
// If current song is a match, display pause
//
