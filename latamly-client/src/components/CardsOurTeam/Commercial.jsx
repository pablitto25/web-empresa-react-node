import React from 'react'
import styles from './CardsOurTeamSecond.module.scss'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

const URI = process.env.REACT_APP_API_OURTEAM_COMMERCIAL_B2B
const URI2 = process.env.REACT_APP_API_OURTEAM_COMMERCIAL_B2C
const URI_IMG = process.env.REACT_APP_API_IMG


const Commercial = () =>{

    const [ourTeam,setOurTeam] = useState([]);
    useEffect( ()=>{
        getOurTeam()
    },[]);

    //procedimiento para mostrar todos los blogs
    const getOurTeam = async () =>{
        const res = await axios.get(URI);
        setOurTeam(res.data);
    };


    const [ourTeam2,setOurTeam2] = useState([]);
    useEffect( ()=>{
        getOurTeam2()
    },[]);

    const getOurTeam2 = async () =>{
        const res = await axios.get(URI2);
        setOurTeam2(res.data);
    };

    return(
        <Container>
            <div className={styles.cardsOurTeam}>
            <div className={styles.boxInfo}>
            <div className={styles.boxIn}>
                    <p className={styles.titleInfo}>COMMERCIAL B2B</p>
                    <p className={styles.textoInfo}>We build solid business links throughout the territory, coordinate
                        their implementation and compliance, develop performance indicators
                        and measure actions based on their future profitability.</p>
            </div>
            </div>
            <div className={styles.boxCards}>
            {ourTeam.map( (ourTeam)=> (
                
            <div className={styles.cards} key={ourTeam.id}>
                    <div style={{ position: 'relative' }}>
                        <img className={styles.imgUser} src={`${URI_IMG + ourTeam.ourteam_img_url}`} alt='imagen de persona' />
                        <div className={styles.b2b}>B2B</div>
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
        </div>
        
                                                                {/* B2C */}    
                                                                <div className={styles.cardsOurTeam}>
            <div className={styles.boxInfo}>
            <div className={styles.boxIn}>
                        <p className={styles.titleInfo}>COMMERCIAL B2C</p>
                        <p className={styles.textoInfo}>We comprehensively develop retail marketing through scalable and
                            replicable e-commerce models in different Latin American markets, with
                            a strong focus on customer experience.</p>
            </div>
            </div>
            <div className={styles.boxCards}>
            {ourTeam2.map( (ourTeam2)=> (
                
            <div className={styles.cards} key={ourTeam2.id}>
                <div style={{ position: 'relative' }}>
                        <img className={styles.imgUser} src={`${URI_IMG + ourTeam2.ourteam_img_url}`} alt='imagen de persona' />
                        <div className={styles.b2c}>B2C</div>
                    </div>
                <div>
                    <div className={styles.textNombreCompleto}>
                        <p>{ourTeam2.ourteam_fullname}</p>
                    </div>
                    <div className={styles.textPuesto}>
                        <p>{ourTeam2.ourteam_postEn}</p>
                    </div>
                    <div className={styles.boxIcons}>
                        <div className={styles.leftBorder}><Link to={`mailto:${ourTeam2.ourteam_mail}`}><img className={styles.icons} src='/assets/img/icon-email.png' alt='icono de email'/></Link></div>
                        <Link to={`${ourTeam2.ourteam_linkedinUrl}`}><img className={styles.icons} src='/assets/img/icon-linkedin.png' alt='icono de linkedin'/></Link>
                    </div>
                </div>
            </div>
            ))}
            </div>
        </div>           
    </Container>

    
    
    )



}

export default Commercial;