import React from 'react';
import { connect } from 'react-redux'

const MainPage = ({ user }) => (
  <>
    <h1>{user.display_name}</h1>
    <img src={user.img_url} alt={user.display_name + 's profile image'}/>
    <br/>
    <br/>
  </>
)

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(MainPage)
