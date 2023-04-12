import React from 'react'
import styles from "./Header.module.scss"
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    
    <div className={styles.header}>
      <div>
      <div className={styles.header_container}>
        <div className={styles.container_logo}>
          <Link to='#'><img className={styles.latamlyLogo} src='/assets/img/logo.png' alt='logo latamly'/></Link>
          </div>
          <div className={styles.container_links}>
            <nav className='nav_container'>
            <ul className={styles.header_link}>
              <li><Link to="#" className={styles.links}>HOME</Link><span className={styles.button_line}></span></li>
              <li><Link to="#" className={styles.links}>WHAT WE DO</Link><span className={styles.button_line}></span></li>
              <li><Link to="#" className={styles.links}>HOW WE DO IT</Link><span className={styles.button_line}></span></li>
              <li><Link to="#" className={styles.links}>OUR BRANDS</Link><span className={styles.button_line}></span></li>
              <li><Link to="#" className={styles.links}>OUR TEAM</Link><span className={styles.button_line}></span></li>
              <li><Link to="#" className={styles.links}>CONTACT</Link><span className={styles.button_line}></span></li>
              <li><Link to="#" className={styles.links}>EN</Link><span className={styles.button_line}></span></li>
            </ul>
            </nav>
          </div>
      </div>
      </div>
    
    
    
    </div>
  )
}

export default Header;