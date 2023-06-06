import React, { useContext, useEffect, useState } from 'react'
import { LangContext } from '../Context/LangContext'
import styles from './CardsOurTeamSecond.module.scss'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'


const URI = process.env.REACT_APP_API_OURTEAM_PRODUCT
const URI_IMG = process.env.REACT_APP_API_IMG
const URI_TEXTCARD = process.env.REACT_APP_API_CARD_CONTENT_OURTEAM



const Product = () =>{

    const [ourTeam,setOurTeam] = useState([]);
    useEffect( ()=>{
        getOurTeam()
    },[]);

    //procedimiento para mostrar todos los blogs
    const getOurTeam = async () =>{
        const res = await axios.get(URI);
        setOurTeam(res.data);
    };

    /* Start Language */
const [lang, setLang] = useState([]);
const [data, setData] = useState([]);
const { lg } = useContext(LangContext);

useEffect(() => {
  getLang()
}, []);

const getLang = async () => {
  const res = await axios.get(URI_TEXTCARD);
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
        <Container className={styles.cardsOurTeam}>
            <div className={styles.boxInfo}>
            <div className={styles.boxIn}>
                <p className={styles.titleInfo}>{data.product}</p>
                <p className={styles.textoInfo}>{data.productDescription}</p>
            </div>
            </div>
            <div className={styles.boxCards}>
            {ourTeam.map( (ourTeam)=> (
                
            <div className={styles.cards} key={ourTeam.id}>
                <div>
                    <img className={styles.imgUser} src={`${URI_IMG + ourTeam.ourteam_img_url}`} alt='imagen de persona'/>
                </div>
                <div>
                    <div className={styles.textNombreCompleto}>
                        <p>{ourTeam.ourteam_fullname}</p>
                    </div>
                    <div className={styles.textPuesto}>
                        <p>{ourTeam.ourteam_postEn}</p>
                    </div>
                    <div className={styles.boxIcons}>
                        <div className={styles.leftBorder}><Link to={`mailto:${ourTeam.ourteam_mail}`}><img className={styles.icons} src='/assets/img/icon-email.png' alt='icono de email'/></Link></div>
                        <Link to={`${ourTeam.ourteam_linkedinUrl}`}><img className={styles.icons} src='/assets/img/icon-linkedin.png' alt='icono de linkedin'/></Link>
                    </div>
                </div>
            </div>
            ))}
            </div>
    </Container>
    )



}

export default Product;