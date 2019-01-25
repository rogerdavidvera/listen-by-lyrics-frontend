import React from 'react';
import { connect } from 'react-redux'
import {
  Container,
  Header,
  Image,
  Segment,
  Divider,
  Button
} from 'semantic-ui-react'
import '../styles/MainPage.css';

const MainPage = ({ user }) => (
  <Container text textAlign='center'>
    <Divider hidden section />
    <Segment raised className="Segment">
      <Header content={`Hello, ${user.display_name}!`} className="Header" />
      <Image src={user.img_url} alt={user.display_name + 's profile image'} rounded centered/>
      <Divider hidden />
      <Button as='a' href='/search' color='teal'>Start Searching</Button>
    </Segment>
  </Container>
)

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(MainPage)
