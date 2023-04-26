import React from 'react'
import styles from "./HeaderOurTeam.module.scss"
import {Link} from 'react-router-dom'

const HeaderOurTeam = () =>{


    return(
        <div className={styles.main}>
        <div className={`container ${styles.headerOurTeam}`}>
            <div className={styles.boxLogo}>
                <img className={styles.imgLogo} src='/assets/img/brand-latamly-group.png' alt='logo latamly'/>
            </div>
            <div className={styles.boxHeader}>
                <div>
                    <Link to='/'><img className={styles.iconReturn} src='/assets/img/icon-return.png' alt='icono flecha atras'/></Link>
                </div>
                <div className={styles.boxReturn}>
                    <Link to='/' className={styles.LinkReturn}><span>Return Home</span></Link>
                </div>
            </div>
        </div>
        </div>
    )



}

export default HeaderOurTeam;