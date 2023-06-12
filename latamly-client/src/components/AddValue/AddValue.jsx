import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { LangContext } from '../Context/LangContext'
import styles from "./AddValue.module.scss";

const URI = process.env.REACT_APP_API_ADDVALUE;

const AddValue = () => {

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
    <section className={styles.add_value}>
      <div className="container">
        {" "}
        <h3>
          {data["we_get"]} <span>{data["to_add"]}</span>
        </h3>
        <p>
          {data["we_do"]}
        </p>
        <div className={styles.separator}>
          <span></span>
        </div>
        <div className={styles.bullets_container}>
          <div className={styles.bullet_card}>
            <img src="/assets/img/evolved_icon.png" alt="Latamly evolved" />
            <h4>{data["we_evolved"]}</h4>
            <p>
            {data["optimizing"]}
            </p>
          </div>
          <div className={styles.bullet_card}>
            <img src="/assets/img/evolved_icon.png" alt="Latamly evolved" />
            <h4>{data["we_build"]}</h4>
            <p>
            {data["with"]}
            </p>
          </div>
          <div className={styles.bullet_card}>
            <img src="/assets/img/evolved_icon.png" alt="Latamly evolved" />
            <h4 className={styles.titleWeAlways}>{data["we_always"]}</h4>
            <p>
            {data["with_our"]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddValue;
