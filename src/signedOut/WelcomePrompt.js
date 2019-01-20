import React from 'react'
import '../styles/WelcomePrompt.css';
import { Jumbotron } from 'reactstrap';
import LoginButton from './LoginButton'


const WelcomePrompt = () => (
  <div className="homepage">
    <Jumbotron>
      <div className="welcomeContent">
        <h1 className="title">ListenByLyrics</h1>
        <p className="subtitle">Search for songs by lyrics, and listen to them instantly</p>
        <hr className="my-2" />
        <p className="login-prompt"></p>
        <p className="lead">
          <LoginButton />
        </p>
      </div>
    </Jumbotron>
  </div>
)

export default WelcomePrompt
