import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

const SongInfoHeader = ({name, artist, album}) => (
  <Table basic='very' celled collapsing textAlign="center">
    <Table.Header>
      <Table.Row>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>

          <Header as='h3' image>
          <Header.Subheader>Song</Header.Subheader>
            <Header.Content>
              {name}
            </Header.Content>
          </Header>
        </Table.Cell>

      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h3' image>
            <Header.Subheader>Artist</Header.Subheader>
            <Header.Content>
              {artist}
            </Header.Content>
          </Header>
        </Table.Cell>

      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h3' image>
            <Header.Subheader>Album</Header.Subheader>
            <Header.Content>
              {album}
            </Header.Content>
          </Header>
        </Table.Cell>

      </Table.Row>
    </Table.Body>
  </Table>
)

export default SongInfoHeader
