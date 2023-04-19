import React from 'react';
import styles from "./Hero.module.scss"
import { Container } from 'react-bootstrap';
import HeroVideo from './HeroVideo';
const Hero = () => {

   

  return (

    <Container fluid className='justify-content-md-center' id={styles.megaContenedor} style={{ padding: 0 }}>
      <div className={styles.contenido}>
        <div className={styles.embed_responsive_16by9} >
          <HeroVideo />
        </div>
        <div className={styles.overlay}>
          <p className={styles.text1}>involve to evolve</p>
          <p className={styles.text2}>We expand your business in <span className={styles.text3}>LATIN AMERICA</span></p>
        </div>
      </div>
    </Container>

  )
}

export default Hero
