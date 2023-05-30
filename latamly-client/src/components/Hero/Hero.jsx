import React, { useContext, useEffect, useState } from 'react'
import { LangContext } from '../Context/LangContext'
import axios from 'axios';
import styles from "./Hero.module.scss"
import { Container } from 'react-bootstrap';
import HeroVideo from './HeroVideo';

const URI = process.env.REACT_APP_API_HERO;

const Hero = () => {

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
    <Container fluid className='justify-content-md-center' id={styles.megaContenedor} style={{ padding: 0 }}>
      <div className={styles.contenido}>
        <div className={styles.embed_responsive_16by9} >
          <HeroVideo />
        </div>
        <div className={styles.overlay}>
          <p className={styles.text1}>{data["title"]}</p>
          <p className={styles.text2}>{data["subtitle"]} <span className={styles.text3}>{data["subtitle_text"]}</span></p>
        </div>
      </div>
    </Container>
  )
}

export default Hero
