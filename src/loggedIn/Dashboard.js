import React from 'react';
import NavBar from './navigation/NavBar'
import MainPage from './MainPage'
import SearchPage from './searchPage/SearchPage'

const Dashboard = ({ user }) => (
  <>
    <NavBar/>
    <SearchPage />
  </>
)

export default Dashboard
