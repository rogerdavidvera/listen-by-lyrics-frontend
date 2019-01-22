import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';

const MainPage = ({ user }) => (
  <>
    <Container>
    <Row>
      <Col className="Column">
      <h1>Hi, {user.display_name}!</h1>
      <img src={user.img_url} alt={user.display_name + 's profile image'}/>
      </Col>
      <Col className="Column">
      <h1>Hi, {user.display_name}!</h1>
      <img src={user.img_url} alt={user.display_name + 's profile image'}/>
      </Col>
      <Col className="Column">
      <h1>Hi, {user.display_name}!</h1>
      <img src={user.img_url} alt={user.display_name + 's profile image'}/>
      </Col>
      <Col className="Column">
      <h1>Hi, {user.display_name}!</h1>
      <img src={user.img_url} alt={user.display_name + 's profile image'}/>
      </Col>
    </Row>
    </Container>
  </>
)

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(MainPage)
