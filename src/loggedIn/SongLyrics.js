import React from 'react'

const SongLyrics = ({ lyrics }) => {
  debugger
  return lyrics.map(line => {
    if (line === '<br>') {
      return <br/>
    } else {
      return <p>{line}</p>
    }
  })
}

export default SongLyrics
