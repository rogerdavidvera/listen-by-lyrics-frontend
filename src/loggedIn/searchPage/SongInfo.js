import '../../styles/SongInfo.css';
import SongInfoHeader from './SongInfoHeader'

import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Divider } from 'semantic-ui-react'

class SongInfo extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Icon name="ellipsis horizontal" circular color='teal' size="large" onClick={this.show(true)}/>

        <Modal size="small" dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Content image scrolling>
            <Image wrapped size='medium' src={this.props.art} />
            <Modal.Description>
              <SongInfoHeader className="SongInfoHeader "name={this.props.name} artist={this.props.artist} album={this.props.album} />
              <Divider />
              <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
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
