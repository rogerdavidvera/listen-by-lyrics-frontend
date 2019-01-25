import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/WelcomePrompt.css';
import { Jumbotron } from 'reactstrap';
import LoginButton from './LoginButton';
import MadeWithLove from './MadeWithLove'
import { withRouter } from "react-router";

function WelcomePrompt({ isLoggedIn, history, loggingIn }) {
  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/')
    }
  }, []);

  return (
  <div className="homepage">
  {!loggingIn ?
  <Jumbotron>
    <div className="welcomeContent">
      <h1 className="title">ListenByLyrics</h1>
      <p className="subtitle">Search for songs by lyrics, and listen to them instantly</p>
      <hr className="my-2" />
      <p className="login-prompt"></p>
      <p className="lead">
        <LoginButton />
      </p>
      <MadeWithLove />
    </div>
  </Jumbotron>
  :
  <></>
  }
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    loggingIn: state.auth.loggingIn
  }
}

export default withRouter(connect(mapStateToProps)(WelcomePrompt))
