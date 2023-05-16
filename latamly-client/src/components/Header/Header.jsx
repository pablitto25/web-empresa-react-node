import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './Header.module.scss'
import {Link} from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const spanish = process.env.REACT_APP_API_NAVBAR_ES;
const english = process.env.REACT_APP_API_NAVBAR_EN;


const Header = () => {

  const [activeSection, setActiveSection] = useState(english);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const isSpanish = currentPath === '/es';
    setActiveSection(isSpanish ? spanish : english);
    getLang(isSpanish ? spanish : english);
  }, []);

  const getLang = async (section) => {
    const res = await axios.get(section);
    setLang(res.data);
  };

  const [lang, setLang] = useState([]);

  const data = lang.cont_json ? JSON.parse(lang.cont_json) : null;
    
    if (data !== null) {
      const navbarItems = data.navbar[0];
      var value1 = navbarItems["1"];
      var value2 = navbarItems["2"];
      var value3 = navbarItems["3"];
      var value4 = navbarItems["4"];
      var value5 = navbarItems["5"];
      var value6 = navbarItems["6"];
    }
    

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
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#">{value1}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#WhatWeDo">{value2}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#HowWeDolt">{value3}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#Brands">{value4}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="/our-team">{value5}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div>
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#Contact">{value6}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div>
                  <div className={styles.NavDropDCall}><NavDropdown className={styles.NavDropdownBasic} id="basic-nav-dropdown" title={<span className="text-dark my-auto"><i classname="fa-solid fa-globe"></i></span>}>
                     <NavDropdown.Item className={styles.dropdown_es} style={{width:'20px'}} href="/es">ES</NavDropdown.Item>
                     <NavDropdown.Item className={styles.dropdown_es} style={{width:'20px'}} href="/">EN</NavDropdown.Item>

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


