import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import MainPage from './MainPage'
import SearchPage from './searchPage/SearchPage'
import HelpPage from './HelpPage'

const Dashboard = ({ user }) => (
  <>
    <NavBar/>
    <Switch>
      <Route exact path={`/`} component={MainPage} />
      <Route path={`/search`} component={SearchPage}/>
      <Route path={`/help`} component={HelpPage}/>
    </Switch>
  </>
)

export default Dashboard
