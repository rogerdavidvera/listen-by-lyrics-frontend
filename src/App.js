import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import WelcomePrompt from './signedOut/WelcomePrompt'
import RedirectPage from './authorization/RedirectPage'
import Dashboard from './loggedIn/Dashboard'

class App extends Component {
  render() {
    return (
      <>
      <Route exact path='/authorized' component={RedirectPage} />
      <Route path='/' render={(props) => {
        return this.props.auth.isLoggedIn ?
          <Dashboard />
          :
          <WelcomePrompt />
        }} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)
