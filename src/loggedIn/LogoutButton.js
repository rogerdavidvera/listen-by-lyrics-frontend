import React from 'react';
import { Button } from 'reactstrap';
import { logoutUser } from '../actions/AuthActions';

const LogoutButton = () => (
  <Button outline color="light" onClick={() => alert('Logging Out')}>Log Out</Button>
)

export default LogoutButton
