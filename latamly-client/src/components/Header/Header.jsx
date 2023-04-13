import React from 'react'
import styles from "./Header.module.scss"
import {Link} from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    
    <div className={styles.header}>
      <div>
      <div className={styles.header_container}>
        <div className={styles.container_logo}>
          <Link to='#'><img className={styles.latamlyLogo} src='/assets/img/logo.png' alt='logo latamly'/></Link>
          </div>
          <div className={styles.container_links}>
            <Navbar bg="white" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#">HOME</Nav.Link><span className={styles.button_line}></span>
                  <Nav.Link href="#">WHAT WE DO</Nav.Link>
                  <Nav.Link href="#">HOW WE DO IT</Nav.Link>
                  <Nav.Link href="#">OUR BRANDS</Nav.Link>
                  <Nav.Link href="#">OUR TEAM</Nav.Link>
                  <Nav.Link href="#">CONTACT</Nav.Link>
                  <NavDropdown title="EN" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">ES</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
      </div>
      </div>
    
    
    
    </div>
  )
}

export default Header;


