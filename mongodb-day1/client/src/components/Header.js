import React from 'react'
import '../App.css'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">BookBarn</Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink className="nav-link" to = "/">Home</NavLink>
              <NavLink className="nav-link" to = "/code-snippets">All Code Snippets</NavLink>
              <NavLink className="nav-link" to = "/add-code">Add Code Snippet</NavLink>
              <NavLink className="nav-link" to ="#">Login</NavLink>
              <NavLink className="nav-link" to ="#">Register</NavLink>
              
            </Nav>
          </Navbar>
        </div>

    )
}

export default Header;