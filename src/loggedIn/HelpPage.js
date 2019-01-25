import React, { useEffect } from 'react'
import { Icon, List, Container, Divider } from 'semantic-ui-react'

function HelpPage() {
  useEffect(() => {
    // Update the document title using the browser API
    console.log('it works')
  }, []);
  return (
    <>
    <Divider hidden />
    <Container>
    <List size="huge">
      <List.Item as='a'>
        <Icon name='right triangle' />
        <List.Content>
          <List.Header>Play button not working?</List.Header>
          <List size="tiny">
            <List.Item as='div'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>I do not have a Spotify Premium account.</List.Header>
                <br/>
                <List.Description>Spotify's Player API for developers requires users to have a Premium account. Sorry!
                </List.Description>
                <br/>
              </List.Content>
            </List.Item>
            <List.Item as='div'>
              <Icon name='right triangle' />
              <List.Content>
                <List.Header>I have Premium and still can't hear.</List.Header>
                <List.Description>
                <br/>
                <strong>Desktop User</strong>: We recommended you have Spotify downloaded and running on your computer. If you're on a desktop and don't have the Spotify app downloaded, you can click "Spotify Web Player" from the ListenByLyrics menu bar and play any song to get the player started. <br/><br/>
                <strong>Phone User</strong>: You need the Spotify app from the Google Play or Apple store downloaded on your phone.
                <br/>
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </List.Content>
      </List.Item>
      <List.Item as='a'>
        <Icon name='right triangle' />
        <List.Content>
          <List.Header>Still having trouble?</List.Header>
          <br/>
          <List.Description>For seamless playing, try resuming playback on the Spotify desktop or phone app (or web player if you're using that) to allow seamless playback.
          </List.Description>
        </List.Content>
      </List.Item>
      <Divider />
      <List.Item as='div'>
        <Icon name='heart' />
        <List.Content>
          <List.Header>Thank You!</List.Header>
          <br />
          <List.Description>ListenByLyrics is still being developed. Stay tuned for updates.
          </List.Description>
          <br />
          <List.Description><strong>Questions?</strong> Email Roger Vera at <a href="mailto:info@listenbylyrics.com">info@listenbylyrics.com</a>
          </List.Description>
        </List.Content>
      </List.Item>
    </List>

    </Container>
    </>
  );
}

export default HelpPage
