import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { logoutUser } from '../actions/AuthActions';

const LogoutButton = ({ logoutUser }) => (
  <Button outline color="light" onClick={logoutUser}>Log Out</Button>
)

const mapDispatchToProps = {
  logoutUser
}

export default connect(null, mapDispatchToProps)(LogoutButton)
