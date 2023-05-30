import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { LangContext } from '../Context/LangContext'
import styles from "./HowWeDoIt.module.scss";

const URI = process.env.REACT_APP_API_HOWWEDOIT;

const HowWeDoIt = () => {

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
    <section className={styles.how_we_do_it} id="HowWeDolt">
      <h4>{data["title"]}</h4>
      <div className={`${styles.how_we_do_it_wrapper} container`}>
        <div className={styles.box}>
          <div className={styles.box_card}>
            <div className={styles.box_card_title}>
              <img
                className={styles.box_card_arrow}
                src="/assets/img/latamly_right_arrow_200x200.png"
                alt="Arrow latamly group"
              />
              <h6>{data["subtitle_1"]}</h6>
            </div>
            <div className={styles.box_card_content}>
              {data["subtitle_2"]}
              <ul>
                <li>{data["business_models"]}</li>
                <li>{data["on_of_channels"]}</li>
                <li>{data["branding"]}</li>
                <li>{data["communication"]}</li>
                <li>{data["customer_service"]}</li>
                <li>{data["foreign"]}</li>
                <li>{data["storage"]}</li>
                <li>{data["business_intelligence"]}</li>
                <li>{data["warrantly"]}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={`${styles.box_card} ${styles.box_absolute}`}>
            <div className={styles.box_card_title}>
              <h6>{data["title_2"]}</h6>
              <img
                src="/assets/img/latamly_right_arrow_200x200.png"
                alt="Arrow latamly group"
              />
            </div>
            <div className={styles.box_card_content}>
              {data["subtitle_3"]}
              <ul>
                <li>{data["production"]}</li>
                <li>{data["business"]}</li>
                <li>{data["experience"]}</li>
                <li>{data["brand"]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
