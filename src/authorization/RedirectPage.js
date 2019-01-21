import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchAuthorization } from '../actions/AuthActions';
const RedirectPage = () => (<h1>To be continued 😉</h1>)

// class RedirectPage extends Component {
//   componentDidMount() {
//     // Save query from URL
//     const queryString = this.props.location.search
//     // Check if URL contains an access code,
//     // If it does, send that code to backend
//     if (queryString.includes('code')) {
//       const code = queryString.split('=')[1]
//       // Dispatch action!
//       this.props.fetchAuthorization(code)
//       .then(this.props.history.push('/'))
//     } else {
//       // If not, redirect to home page
//       this.props.history.push('/')
//     }
//   }
//   render() {
//     return <></>
//   }
// }
//
// const mapDispatchToProps = {
//   fetchAuthorization
// }
//
// export default connect(null, mapDispatchToProps)(RedirectPage)

export default RedirectPage
