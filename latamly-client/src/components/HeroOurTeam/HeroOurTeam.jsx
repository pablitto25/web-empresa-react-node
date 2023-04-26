import React from 'react'
import styles from "./HeroOurTeam.module.scss"


const HeroOurTeam = () => {
  return (
    
    <div className={styles.boxMain}>
        <div className={styles.boxBackground}>
            <img className={styles.backgroundHero} src='/assets/img/our-team-bg.png' alt='logo hero'/>
        </div>
        <div className={styles.boxTitle}>
            <div className={styles.boxLogo}>
                <img className={styles.logoHero} src='/assets/img/our-team-img.png' alt='Logo hero'/>
            </div>
            <div>
                <p className={styles.titleHero}>Our <span className={styles.textTeam}>Team</span></p>
            </div>
        </div>
    </div>
  )
}

export default HeroOurTeam;


