import React from 'react';
import { connect } from 'react-redux'
import {
  Container,
  Header,
  List,
  Image
} from 'semantic-ui-react'
import '../styles/MainPage.css';

const MainPage = ({ user }) => (
  <>
  <Container text textAlign='center'>
    <Header content={`Hello, ${user.display_name}!`} className="Header" />
    <img src={user.img_url} alt={user.display_name + 's profile image'}/>
  </Container>
  </>
)

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(MainPage)
