import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import '../../styles/NavBar.css';

export default class NavBar extends React.Component {
  state = {isOpen: false};

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ListenByLyrics</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Search Page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">My Library</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Spotify</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  Official GitHub Repo
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  Built with ❤️ by Roger Vera
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
