import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/AuthActions';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import '../../styles/NavBar.css';

class NavBar extends React.Component {
  state = {isOpen: false};

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
        <Navbar dark expand="md" className="navBar">
          <NavbarBrand className="NavbarBrand" href="/">ListenByLyrics</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="capse" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="NavLink" href="#">Search Page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="NavLink" href="#">My Library</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="NavLink" href="#">Spotify</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="NavLink" href="#" onClick={this.props.logoutUser}>Sign Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(null, mapDispatchToProps)(NavBar)
