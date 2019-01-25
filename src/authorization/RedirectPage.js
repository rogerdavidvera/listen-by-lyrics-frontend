import React from 'react';
import { connect } from 'react-redux';
import { fetchAuthorization, loggingIn } from '../actions/AuthActions';
class RedirectPage extends React.Component {
  componentDidMount() {
    // Save query from URL
    const queryString = this.props.location.search
    // IF URL contains an access code,
    // Send that code to backend
    if (queryString.includes('code')) {
      this.props.loggingIn()
      const code = queryString.split('=')[1]
      // Dispatch action!
      this.props.fetchAuthorization(code)
      .then(this.props.history.replace('/'))
    } else {
      // ELSE, redirect to home page
      this.props.history.push('/')
    }
  }
  render() {
    return <div className="homepage"></div>
  }
}

const mapDispatchToProps = {
  fetchAuthorization,
  loggingIn
}

export default connect(null, mapDispatchToProps)(RedirectPage)
