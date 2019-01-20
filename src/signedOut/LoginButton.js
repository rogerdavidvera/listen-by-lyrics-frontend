import React from 'react'
import { Button } from 'reactstrap';
import API_URL from '../assets/ApiUrl'


const LoginButton = () => (
  <a href={`${API_URL}login`}>
    <Button outline color="light">Log in with Spotify to start</Button>
  </a>
)

export default LoginButton
