import React, { Component } from 'react'

import {
  Card,
  Icon,
  Image
} from 'semantic-ui-react'

const SongCard = ({ song }) => (
  <Card fluid>
    <Image src={song.album_art} />
    <Card.Content textAlign='center'>
      <Card.Header>{song.song}</Card.Header>
      <Card.Meta>{song.artist}</Card.Meta>
    </Card.Content>
  </Card>
)

export default SongCard
