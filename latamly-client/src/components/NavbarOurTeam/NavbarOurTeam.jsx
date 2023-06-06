import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { LangContext } from '../Context/LangContext'
import styles from "./NavbarOurTeam.module.scss"
import { Link } from 'react-router-dom';
import {Container} from 'react-bootstrap'


const URI = process.env.REACT_APP_API_NAVBAR_OURTEAM;

const NavbarOurTeam = ({setActiveSection}) => {

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
lg === '/our-team'? output = 'en' : output = 'sp';
if (lang.cont_json) {
  const value = JSON.parse(lang.cont_json);

  if (value.hasOwnProperty(output) && Array.isArray(value[output]) && value[output].length > 0) {
    setData(value[output][0]);
  }
}
}, [lang,lg]);
/*End Language */
  
  return (
    <div className={styles.boxMain}>
        <Container className={styles.navbarLinks}>
              <div className={styles.boxLink}><Link to='#' className={styles.links} onClick={()=> setActiveSection('all')}><span>{data.all}</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links} onClick={()=> setActiveSection('product')}><span>{data.product}</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links} onClick={()=> setActiveSection('commercial')}><span>{data.commercial}</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links} onClick={()=> setActiveSection('marketing')}><span>{data.marketing}</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links} onClick={()=> setActiveSection('administration')}><span>{data.administration}</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links} onClick={()=> setActiveSection('operations')}><span>{data.operations}</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links} onClick={()=> setActiveSection('strategic')}><span>{data.strategic}</span></Link><span className={styles.bottomLine}></span></div>
              <div className={styles.boxLink}><Link to='#' className={styles.links} onClick={()=> setActiveSection('rrhh')}><span>{data.rrhh}</span></Link><span className={styles.bottomLine}></span></div>
        </Container>
    </div>
  )
}

export default NavbarOurTeam;