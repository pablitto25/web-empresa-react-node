import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import styles from "./Hero.module.scss"
import { Container } from 'react-bootstrap';
import HeroVideo from './HeroVideo';
import { useLocation} from 'react-router-dom'
import {getPath} from '../others/getPath';

const URI = process.env.REACT_APP_API_HERO;

const Hero = () => {

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

  let valor1, valor2,valor3;

  if (pathname === '/') {
    valor1 = en[1];
    valor2 = en[2];
    valor3 = en[3];
  } else if (pathname === '/es') {
    valor1 = esp[1];
    valor2 = esp[2];
    valor3 = esp[3];
  }

  return (
    <Container fluid className='justify-content-md-center' id={styles.megaContenedor} style={{ padding: 0 }}>
      <div className={styles.contenido}>
        <div className={styles.embed_responsive_16by9} >
          <HeroVideo />
        </div>
        <div className={styles.overlay}>
          <p className={styles.text1}>{valor1}</p>
          <p className={styles.text2}>{valor2} <span className={styles.text3}>{valor3}</span></p>
        </div>
      </div>
    </Container>
  )
}

export default Hero
