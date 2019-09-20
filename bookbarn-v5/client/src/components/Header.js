import React, {Component} from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
 
class Header extends Component {

    constructor(props) {
      super(props)
    }

    handleSignout = () => {
      // remove the jsonwebtoken form local storage
      localStorage.removeItem('jsonwebtoken')
      //update global state to set isAuthenticated = false
      this.props.onSignout()
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">BookBarn</Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink className="nav-link" to = "/">Home</NavLink>
              { this.props.authenticated ? <NavLink className="nav-link" to = "/add-book">Add Book</NavLink> : null }
             
              <NavLink className="nav-link" to = "/books">All Books</NavLink>

              <NavLink className="nav-link" to ="/login">Login</NavLink>
              <NavLink className="nav-link" to ="/register">Register</NavLink>
              { this.props.authenticated ? <NavLink className="nav-link" to ="#" onClick={() => this.handleSignout()}>Sign out</NavLink> : null}
              
            </Nav>
          </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      // authenticated: state.isAuthenticated // props.authenticated
      authenticated: state.authRed.isAuthenticated 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignout: () => dispatch({type: 'SIGN_OUT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);