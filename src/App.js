import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import WelcomePrompt from './signedOut/WelcomePrompt'
import RedirectPage from './authorization/RedirectPage'

class App extends Component {
  render() {
    return (
      <>
      <Route exact path='/authorized' component={RedirectPage} />
      <Route exact path='/' component={WelcomePrompt} />
      </>
    );
  }
}

export default App;
