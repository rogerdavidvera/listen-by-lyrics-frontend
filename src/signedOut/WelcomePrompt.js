import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/WelcomePrompt.css';
import { Jumbotron } from 'reactstrap';
import LoginButton from './LoginButton';
import { withRouter } from "react-router";

function WelcomePrompt({ isLoggedIn, history }) {
  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/')
    }
  });

  return (
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
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default withRouter(connect(mapStateToProps)(WelcomePrompt))
