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
              <Navbar.Collapse className={styles.button_es} id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className={styles.NavLinks} href="#">HOME</Nav.Link><span className={styles.button_line}></span>
                  <Nav.Link className={styles.NavLinks} href="#">WHAT WE DO</Nav.Link>
                  <Nav.Link className={styles.NavLinks} href="#">HOW WE DO IT</Nav.Link>
                  <Nav.Link className={styles.NavLinks} href="#">OUR BRANDS</Nav.Link>
                  <Nav.Link className={styles.NavLinks} href="#">OUR TEAM</Nav.Link>
                  <Nav.Link className={styles.NavLinks} href="#">CONTACT</Nav.Link>
                  <NavDropdown className={styles.NavLinks} title="EN" id="basic-nav-dropdown">
                    <NavDropdown.Item className={styles.dropdown_es} href="#">ES</NavDropdown.Item>
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


