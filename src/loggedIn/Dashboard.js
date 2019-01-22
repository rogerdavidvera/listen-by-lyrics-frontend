import React from 'react';
import { connect } from 'react-redux'

import NavBar from './navigation/NavBar'
import MainPage from './MainPage'

const Dashboard = ({ user }) => (
  <>
    <NavBar/>
    <MainPage />
  </>
)

export default Dashboard
