import React from "react";
import styles from "./WhatWeDo.module.scss";
import {useState, useEffect} from 'react';
import { useLocation} from 'react-router-dom'
import {getPath} from '../others/getPath';
import axios from 'axios';

const URI = process.env.REACT_APP_API_WHATWEDO;


const WhatWeDo = () => {

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

let valor1, valor2,valor3,valor4,valor5,valor6,valor7,valor8,valor9,valor10,valor11,valor12,valor13,valor14,valor15,valor16,valor17,valor18;

if (pathname === '/') {
  valor1 = en[1];
  valor2 = en[2];
  valor3 = en[3];
  valor4 = en[4];
  valor5 = en[5];
  valor6 = en[6];
  valor7 = en[7];
  valor8 = en[8];
  valor9 = en[9];
  valor10 = en[10];
  valor11 = en[11];
  valor12 = en[12];
  valor13 = en[13];
  valor14 = en[14];
  valor15 = en[15];
  valor16 = en[16];
  valor17 = en[17];
  valor18 = en[18];
} else if (pathname === '/es') {
  valor1 = esp[1];
  valor2 = esp[2];
  valor3 = esp[3];
  valor4 = esp[4];
  valor5 = esp[5];
  valor6 = esp[6];
  valor7 = esp[7];
  valor8 = esp[8];
  valor9 = esp[9];
  valor10 = esp[10];
  valor11 = esp[11];
  valor12 = esp[12];
  valor13 = esp[13];
  valor14 = esp[14];
  valor15 = esp[15];
  valor16 = esp[16];
  valor17 = esp[17];
  valor18 = esp[18];
}


  return (
    <section className={styles.what_we_do} id="WhatWeDo">
      <h4>{valor1}</h4>
      <div className={`${styles.what_we_do_wrapper} container`}>
        <div className={styles.box}>
          <img
            src={valor2}
            alt="30 develop territories in latin america"
          />
          <div className={styles.box_card}>
            <div className={styles.box_card_title}>
              <img
                className={styles.box_card_arrow}
                src="/assets/img/latamly_right_arrow_200x200.png"
                alt="Arrow latamly group"
              />
              <h6>{valor3}</h6>
            </div>
            <div className={styles.box_card_content}>
            {valor4}
              <ul>
                <li>{valor5}</li>
                <li>{valor6}</li>
                <li>{valor7}</li>
              </ul>
              {valor8}
              <ul>
                <li>{valor9}</li>
                <li>{valor10}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={`${styles.box_card} ${styles.box_absolute}`}>
            <div className={styles.box_card_title}>
              <h6>{valor11}</h6>
              <img
                src="/assets/img/latamly_right_arrow_200x200.png"
                alt="Arrow latamly group"
              />
            </div>
            <div className={styles.box_card_content}>
            {valor12}
              <ul>
                <li>{valor13}</li>
                <li>{valor14}</li>
                <li>{valor15}</li>
              </ul>
              {valor16}
              <ul>
                <li>{valor17}</li>
                <li>{valor18}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
