import React from "react";
import styles from "./AddValue.module.scss";
import {useState, useEffect} from 'react';
import { useLocation} from 'react-router-dom'
import {getPath} from '../others/getPath';
import axios from 'axios';
const URI = process.env.REACT_APP_API_ADDVALUE;

const AddValue = () => {


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

let valor1, valor2,valor3,valor4,valor5,valor6,valor7,valor8,valor9;

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
}


  return (
    <section className={styles.add_value}>
      <div className="container">
        {" "}
        <h3>
          {valor1} <span>{valor2}</span>
        </h3>
        <p>
          {valor3}
        </p>
        <div className={styles.separator}>
          <span></span>
        </div>
        <div className={styles.bullets_container}>
          <div className={styles.bullet_card}>
            <img src="/assets/img/evolved_icon.png" alt="Latamly evolved" />
            <h4>{valor4}</h4>
            <p>
            {valor5}
            </p>
          </div>
          <div className={styles.bullet_card}>
            <img src="/assets/img/evolved_icon.png" alt="Latamly evolved" />
            <h4>{valor6}</h4>
            <p>
            {valor7}
            </p>
          </div>
          <div className={styles.bullet_card}>
            <img src="/assets/img/evolved_icon.png" alt="Latamly evolved" />
            <h4>{valor8}</h4>
            <p>
            {valor9}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddValue;
