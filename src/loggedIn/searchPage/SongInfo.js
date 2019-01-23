import '../../styles/SongInfo.css';

import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

class SongInfo extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Icon name="ellipsis horizontal" circular color='teal' size="large" onClick={this.show(true)}/>

        <Modal size="tiny" dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header textAlign="center">Profile Picture</Modal.Header>
          <Modal.Content image scrolling>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
            <Modal.Description>
              <Header>Modal Header</Header>
              <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Close"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default SongInfo
