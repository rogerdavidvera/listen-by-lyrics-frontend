import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { logoutUser } from '../actions/AuthActions';

const LogoutButton = () => (
  <Button outline color="light" onClick={() => alert('Logging Out')}>Log Out</Button>
)

const mapDispatchToProps = {
  logoutUser
}

export default connect(null, mapDispatchToProps)(LogoutButton)
