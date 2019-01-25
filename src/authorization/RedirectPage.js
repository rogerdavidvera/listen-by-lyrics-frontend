import React from 'react';
import { connect } from 'react-redux';
import { fetchAuthorization } from '../actions/AuthActions';
// import API_URL from '../assets/ApiUrl'
class RedirectPage extends React.Component {
  componentDidMount() {
    // Save query from URL
    const queryString = this.props.location.search
    // IF URL contains an access code,
    // Send that code to backend
    if (queryString.includes('code')) {
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
    return <></>
  }
}

const mapDispatchToProps = {
  fetchAuthorization
}

export default connect(null, mapDispatchToProps)(RedirectPage)

// const RedirectPage = () => (<h1>To be continued 😉</h1>)
// export default RedirectPage
