import React from 'react';
import { connect } from 'react-redux'
import LogoutButton from './LogoutButton';

const Dashboard = ({ user }) => (
  <div className="homepage">
    <h1>{user.display_name}</h1>
    <img src={user.img_url} alt={user.display_name + 's profile image'}/>
    <br/>
    <br/>
    <LogoutButton />
  </div>
)

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Dashboard)
