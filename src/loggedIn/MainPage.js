import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
// import '../styles/MainPage.css';

const MainPage = ({ user }) => (
  <>
    <Container className='Container'>
      <h1>Hi, {user.display_name}!</h1>
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
