import React from 'react';
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        
        <div className={`container ${styles.FooterContainer}`}>
            <div className={styles.FooterCopyright}>
                <p>© Copyright 2002 - 2023 | Latamly Group | Involve to evolve</p>
            </div>
            <div>
                <img className={styles.FooterLogo} src='/assets/img/quality_signature.png' alt='logo latamly'/>
            </div>
        </div>
        
    )
}

export default Footer;