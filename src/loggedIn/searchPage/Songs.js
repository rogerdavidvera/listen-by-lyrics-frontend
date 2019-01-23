import React from 'react'

import {
  Segment,
  Card,
} from 'semantic-ui-react'

import SongCard from './SongCard'

const renderSongs = (data) => {
  let songs = data || []
  return songs.map(song => {
    return <SongCard song={song} />
  })
}


const LoggedInSongList = ({ songs }) => {
  const showSongList = () => (
    <Segment>
      <Card.Group doubling itemsPerRow={4}>
        {renderSongs(songs)}
      </Card.Group>
    </Segment>
  )

  if (!songs) {
    return null
  } else if (songs.length === 0) {
    return <Segment textAlign='center'>No Results Found</Segment>
  } else {
    return showSongList()
  }
}

export default LoggedInSongList
