import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import WelcomePrompt from './signedOut/WelcomePrompt'
import RedirectPage from './authorization/RedirectPage'

class App extends Component {
  render() {
    return (
      <>
      <Route exact path='/authorized' component={RedirectPage} />
      <Route exact path='/' render={(props) => {
        return this.props.auth.isLoggedIn ?
          <h1>{this.props.auth.user.display_name}</h1>
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
