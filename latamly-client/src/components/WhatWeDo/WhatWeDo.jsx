import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { LangContext } from '../Context/LangContext'
import styles from "./WhatWeDo.module.scss";

const URI = process.env.REACT_APP_API_WHATWEDO;


const WhatWeDo = () => {

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
    <section className={styles.what_we_do} id="WhatWeDo">
      <h4>{data["what_we"]}</h4>
      <div className={`${styles.what_we_do_wrapper} container`}>
        <div className={styles.box}>
          <img
            src={data["img_1"]}
            alt="30 develop territories in latin america"
          />
          <div className={styles.box_card}>
            <div className={styles.box_card_title}>
              <img
                className={styles.box_card_arrow}
                src="/assets/img/latamly_right_arrow_200x200.png"
                alt="Arrow latamly group"
              />
              <h6>{data["then_we"]}</h6>
            </div>
            <div className={styles.box_card_content}>
            {data["distribution"]}
              <ul>
                <li>{data["sell_in"]}</li>
                <li>{data["sell_through"]}</li>
                <li>{data["sell_out"]}</li>
              </ul>
              {data["direct"]}
              <ul>
                <li>{data["marketplaces"]}</li>
                <li>{data["ecommerces"]}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={`${styles.box_card} ${styles.box_absolute}`}>
            <div className={styles.box_card_title}>
              <h6>{data["we_detect"]}</h6>
              <img
                src="/assets/img/latamly_right_arrow_200x200.png"
                alt="Arrow latamly group"
              />
            </div>
            <div className={styles.box_card_content}>
            {data["research"]}
              <ul>
                <li>{data["insights"]}</li>
                <li>{data["sorcing"]}</li>
                <li>{data["validation"]}</li>
              </ul>
              {data["landing"]}
              <ul>
                <li>{data["purchases"]}</li>
                <li>{data["implementation"]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
