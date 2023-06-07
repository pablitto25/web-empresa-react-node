import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { LangContext } from '../Context/LangContext'
import styles from "./HeaderOurTeam.module.scss"
import {Link} from 'react-router-dom'

const URI = process.env.REACT_APP_API_HEADER_OURTEAM;

const HeaderOurTeam = () =>{

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

    return(
        <div className={styles.main}>
        <div className={`container ${styles.headerOurTeam}`}>
            <div className={styles.boxLogo}>
                <img className={styles.imgLogo} src='/assets/img/brand-latamly-group.png' alt='logo latamly'/>
            </div>
            <div className={styles.boxHeader}>
                <div>
                    <Link to={data.return}><img className={styles.iconReturn} src='/assets/img/icon-return.png' alt='icono flecha atras'/></Link>
                </div>
                <div className={styles.boxReturn}>
                    <a href={data.return} className={styles.LinkReturn}><span>{data.title}</span></a>
                </div>
            </div>
        </div>
        </div>
    )



}

export default HeaderOurTeam;