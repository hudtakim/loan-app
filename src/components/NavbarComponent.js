import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
      title: state.users.title
      }
  }

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" light expand="md">
          <Container>
          <NavbarBrand href="/loan-app">{props.title}</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/loan-app">HomeR</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/hudtakim/loan-app" target="_blank">GitHub</NavLink>
                </NavItem>
            </Nav>
            <NavbarText>Login</NavbarText>
            </Collapse>
          </Container>
      </Navbar>
  );
}

export default connect(mapStateToProps, null)(NavbarComponent);