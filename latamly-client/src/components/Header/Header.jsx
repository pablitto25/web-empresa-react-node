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
            <Navbar className='justify-content-end' bg="white" expand="lg">
              <Navbar.Toggle className={styles.botonMenu} aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className={styles.button_es} id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#">HOME</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#WhatWeDo">WHAT WE DO</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#HowWeDolt">HOW WE DO IT</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#Brands">OUR BRANDS</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#">OUR TEAM</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div>
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#Contact">CONTACT</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div>
                  <div className={styles.NavDropDCall}><NavDropdown className={styles.NavDropdownBasic} id="basic-nav-dropdown" title={<span className="text-dark my-auto">EN</span>}>
                     <NavDropdown.Item className={styles.dropdown_es} style={{width:'20px'}} href="#">ES</NavDropdown.Item>
                  </NavDropdown></div>
                  <div className={styles.boxDropDownLine}></div>
                  </div>
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


