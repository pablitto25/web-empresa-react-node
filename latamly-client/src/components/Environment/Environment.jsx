import React from 'react';
import styles from "./Environment.module.scss";
import { Link } from 'react-router-dom';

const Environment = () => {
    return (

        <div className={styles.MainEnvironment}>
            <div className={`container ${styles.subEnvironment}`}>
                <div className={styles.cardEnvironment}>
                    <div className={styles.boxLogoEnvironment}><img className={styles.logoEnvironment} src='/assets/img/latamly_group_uruguay.png' alt='logo latamly group'/></div>
                    <div className={styles.boxCardEnvironment}>
                        <div className={styles.boxTitle}>
                            <Link className={styles.titleEnvironment} to="https://www.linkedin.com/showcase/latamly-uruguay/"><p>KEFORDY SA</p></Link>
                        </div>
                        <p>RUT: 2185986000014</p>
                        <p>ADDRESS: GUATEMALA S/N.</p>
                        <p>MONTEVIDEO</p>
                        <p>URUGUAY</p>
                    </div>
                </div>
                <div className={styles.cardEnvironment}>
                    <div className={styles.boxLogoEnvironment}><img className={styles.logoEnvironment} src='/assets/img/latamly_group_argentina.png' alt='logo latamly group'/></div>
                    <div className={styles.boxCardEnvironment}>
                        <div className={styles.boxTitle}>
                            <Link className={styles.titleEnvironment} to="https://www.linkedin.com/company/latamly/"><p>LATAMLY SA</p></Link>
                        </div>
                        <p>CUIT: 30-71071692-3</p>
                        <p>ADDRESS: ELIAS YOFRE 1250.</p>
                        <p>CÓRDOBA</p>
                        <p>ARGENTINA</p>
                    </div>
                </div>
                <div className={styles.cardEnvironment}>
                    <div className={styles.boxLogoEnvironment}><img className={styles.logoEnvironment} src='/assets/img/latamly_group_hong_kong.png' alt='logo latamly group'/></div>
                    <div className={styles.boxCardEnvironment}>
                        <div className={styles.boxTitle}>
                            <Link className={styles.titleEnvironment} to="https://www.linkedin.com/showcase/latamly-hong-kong/"><p>KEFORDY LIMITED</p></Link>
                        </div>
                        <p>TAX ID: 3148928</p>
                        <p>ADDRESS: SUITE 2111, THE</p>
                        <p>GATEWAY HARBOUR CITY 21</p>
                        <p>CANTON RD TST KLN.</p>
                        <p>HONG KONG</p>
                        <p>CHINA</p>
                    </div>
                </div>
                <div className={styles.cardEnvironment}>
                    <div className={styles.boxLogoEnvironment}><img className={styles.logoEnvironment} src='/assets/img/latamly_group_espania.png' alt='logo latamly group'/></div>
                    <div className={styles.boxCardEnvironment}>
                        <div className={styles.boxTitle}>
                            <Link className={styles.titleEnvironment} to="#"><p>LATAMLY GROUP SL</p></Link>
                        </div>
                        <p>NIF: B09838079</p>
                        <p>ADDRESS: DE LA CASTELLANA 149</p>
                        <p>MADRID</p>
                        <p>ESPAÑA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Environment;