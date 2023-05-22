import axios from 'axios';
import {useState, useEffect} from 'react';
import React from 'react'
import styles from './Header.module.scss'
import {Link , useLocation} from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {getPath} from '../others/getPath';

const URI = process.env.REACT_APP_API_NAVBAR;

const Header = () => {
  //Guardo el Array de const_json
  const [lang, setLang] = useState([]);
  const [esp, setEsp] = useState([]);
  const [en, setEn] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getLang()
  }, []);

  //Traigo const_json de la base de datos
  const getLang = async () => {
    const res = await axios.get(URI);
    setLang(res.data);
  };

  //Convierto const_json de String a Json
  useEffect(() => {
    if (lang.cont_json) {
      const data = JSON.parse(lang.cont_json);
  
      if (data.hasOwnProperty("en") && Array.isArray(data["en"]) && data["en"].length > 0) {
        setEn(data["en"][0]);
      }
  
      if (data.hasOwnProperty("sp") && Array.isArray(data["sp"]) && data["sp"].length > 0) {
        setEsp(data["sp"][0]);
      }
    }
  }, [lang]);
  
  useEffect(() => {
    if (location.pathname === '/') {
      setEn((prevEn) => ({ ...prevEn }));
      setEsp((prevEsp) => ({ ...prevEsp }));
    }
  }, [location.pathname]);

  const pathname = getPath;

  let valor1, valor2, valor3, valor4, valor5, valor6;

  if (pathname === '/') {
    valor1 = en[1];
    valor2 = en[2];
    valor3 = en[3];
    valor4 = en[4];
    valor5 = en[5];
    valor6 = en[6];
  } else if (pathname === '/es') {
    valor1 = esp[1];
    valor2 = esp[2];
    valor3 = esp[3];
    valor4 = esp[4];
    valor5 = esp[5];
    valor6 = esp[6];
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
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#">{valor1}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#WhatWeDo">{valor2}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#HowWeDolt">{valor3}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#Brands">{valor4}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div >
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="/our-team">{valor5}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div>
                    <div className={styles.boxNavLink}><Nav.Link  className={styles.NavLinks} href="#Contact">{valor6}</Nav.Link></div>
                    <div className={styles.button_line}></div>
                  </div>
                  <div>
                  <div className={styles.NavDropDCall}><NavDropdown className={styles.NavDropdownBasic} id="basic-nav-dropdown" title={<span className="text-dark my-auto"><i className="fa-solid fa-globe"></i></span>}>
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


