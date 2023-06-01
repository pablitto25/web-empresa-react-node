import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { LangContext } from '../Context/LangContext'
import styles from "./Brands.module.scss";
import { Link } from "react-router-dom";

const URI = process.env.REACT_APP_API_BRANDS;

const Brands = () => {

  /* Start Language */
const [lang, setLang] = useState([]);
const [data, setData] = useState([]);
const { lg } = useContext(LangContext);

useEffect(() => {
  getLang();
  let output;
  
lg === '/'? output = 'en' : output = 'sp';
if (lang.cont_json) {
  const value = JSON.parse(lang.cont_json);

  if (value.hasOwnProperty(output) && Array.isArray(value[output]) && value[output].length > 0) {
    setData(value[output][0]);
  }
}
}, [lang,lg]);

const getLang = async () => {
  const res = await axios.get(URI);
  setLang(res.data);
};
  /* End Language */

  
  return (
    <section className={styles.brands} id="Brands">
      <div className={`${styles.title} container`}>
        <h4>
          <span>{data["title"]}</span> {data["title_2"]}
        </h4>
      </div>
      <div className={styles.brands_container}>
        {data.marcas && data.marcas.map((marca, index) =>(
          <Link to={marca.link}key={index} className={styles.brand} style={{backgroundImage: marca.background}}>
          <article>
            <div className={styles.brand_logo}>
              <img src={marca.logo} alt={marca.alt_logo} />
            </div>
            <div className={styles.brand_content}>
              <h4>{marca.subtitle}</h4>
              <p>
                {marca.description}
                <span> {data.see_more}</span>
              </p>
            </div>
          </article>
        </Link>
        ))}
        
        
      </div>
    </section>
  );
};

export default Brands;
