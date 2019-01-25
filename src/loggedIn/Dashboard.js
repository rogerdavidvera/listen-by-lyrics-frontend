import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './navigation/NavBar'
import MainPage from './MainPage'
import SearchPage from './searchPage/SearchPage'

const Dashboard = ({ user }) => (
  <>
    <NavBar/>
    <Switch>
      <Route exact path={`/`} component={MainPage} />
      <Route path={`/search`} component={SearchPage}/>
    </Switch>
  </>
)

export default Dashboard
