import React from 'react';
 import styles from "./Hero.module.scss"

 import { Container } from 'react-bootstrap';

const Hero = () => {

  return (

   
    <Container fluid className='justify-content-md-center' id={styles.megaContenedor} style={{ padding: 0 }}>
      <div className={styles.contenido}>
        <div className={styles.embed_responsive_16by9} >
          <iframe src="https://www.youtube.com/embed/gy4E8MWT61s?controls=0&autoplay=1&mute=1&showinfo=0&modestbranding=1"></iframe>
        </div>
        <div className={styles.overlay}>
        <p className={styles.text1}><strong>involve to evolve</strong></p>
        <p className={styles.text2}>We expand your business in <strong>LATIN AMERICA</strong></p>
      </div>
      </div>
      
    </Container>

    


  )
}


export default Hero
