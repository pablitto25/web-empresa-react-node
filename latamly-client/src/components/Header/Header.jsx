import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LangContext } from '../Context/LangContext'

const URI = process.env.REACT_APP_API_NAVBAR;

const Header = () => {
  /* Start Language */
  const [lang, setLang] = useState([]);
  const [data, setData] = useState([]);
  const { lg } = useContext(LangContext);
  
  
  useEffect(() => {
    getLang()
  }, []);
  
  const getLang = async () => {
    const res = await axios.get(URI);
    setLang(res.data);
  };

useEffect(() => {
  let output;
  lg === '/'? output = 'en' : output = 'sp';
  if (lang.cont_json) {
    const value = JSON.parse(lang.cont_json);

    if (value.hasOwnProperty(output) && Array.isArray(value[output]) && value[output].length > 0) {
      setData(value[output][0]);
    }
  }
}, [lang,lg]);
/*End Language */

  return (

    <div className={styles.header}>
      <div>
        <div className={styles.header_container}>
          <div className={styles.container_logo}>
            <Link to='#'><img className={styles.latamlyLogo} src='/assets/img/logo.png' alt='logo latamly' /></Link>
          </div>
          <div className={styles.container_links}>
            <Navbar className='justify-content-end' bg="white" expand="lg">
              <Navbar.Toggle className={styles.botonMenu} aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className={styles.button_es} id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link className={styles.NavLinks} href="#">{data["home"]}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link className={styles.NavLinks} href="#WhatWeDo">{data["whatwedo"]}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link className={styles.NavLinks} href="#HowWeDolt">{data["howwedoit"]}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link className={styles.NavLinks} href="#Brands">{data["ourbrands"]}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link className={styles.NavLinks} href={data.link}>{data["ourteam"]}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div>
                    <div className={styles.boxNavLink}><Nav.Link className={styles.NavLinks} href="#Contact">{data["contact"]}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div>
                    <div className={styles.NavDropDCall}><NavDropdown className={styles.NavDropdownBasic} id="basic-nav-dropdown" title={<span className="text-dark my-auto">{data.langType}</span>}>
                      <NavDropdown.Item className={styles.dropdown_es} href="/es">ES</NavDropdown.Item>
                      <NavDropdown.Item className={styles.dropdown_es} href="/">EN</NavDropdown.Item>

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


