import React from 'react'
import styles from './CardsOurTeamSecond.module.scss'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const URI = process.env.REACT_APP_API_OURTEAM_ADMINISTRATION
const URI_IMG = process.env.REACT_APP_API_IMG

const Administration = () =>{

    const [ourTeam,setOurTeam] = useState([]);
    useEffect( ()=>{
        getOurTeam()
    },[]);

    //procedimiento para mostrar todos los blogs
    const getOurTeam = async () =>{
        const res = await axios.get(URI);
        setOurTeam(res.data);
    };

    return(
        <Container className={styles.cardsOurTeam}>
            <div className={styles.boxInfo}>
            <div className={styles.boxIn}>
                    <p className={styles.titleInfo}>ADMINISTRATION & FINANCE</p>
                    <p className={styles.textoInfo}>We provide consistent and sustainable support to the rest of the areas of the company,
                     generating information for assertive decision-making, forging added value through correctly supported investment,
                      financing and remuneration policies.</p>
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

export default Administration;