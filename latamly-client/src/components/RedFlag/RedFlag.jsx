import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { LangContext } from '../Context/LangContext'
import style from "./RedFlag.module.scss";

const URI = process.env.REACT_APP_API_REDFLAG;

const RedFlag = () => {

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
    <section className={style.red_flag}>
      <div className="container">
        <div className={style.red_flag_wrapper}>
          <h5>
            {data["title"]} <span>{data["title_sub"]}</span>
          </h5>
          <p>
            {data["description"]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RedFlag;
