import React from 'react'
import styles from "./NavbarOurTeam.module.scss"
import { Link } from 'react-router-dom';
import {Container} from 'react-bootstrap'




const NavbarOurTeam = ({setActiveSection}) => {
  
  return (
    <div className={styles.boxMain}>
        <Container className={styles.navbarLinks}>
              <div className={styles.boxLink}><Link to='#' className={styles.links} onClick={()=> setActiveSection('all')}><span>ALL</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links} onClick={()=> setActiveSection('product')}><span>PRODUCT</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links}><span>COMMERCIAL B2B / B2C</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links}><span>MARKETING</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links}><span>ADMINISTRATION & FINANCE</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links}><span>OPERATIONS</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links}><span>STRATEGIC PLANNING</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links}><span>HUMAN RESOURCES</span></Link><span className={styles.bottomLine}></span></div>
        </Container>
    </div>
  )
}

export default NavbarOurTeam;