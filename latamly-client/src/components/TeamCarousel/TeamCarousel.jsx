import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { LangContext } from '../Context/LangContext'
import { Link } from "react-router-dom";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./TeamCarousel.module.scss";
import "./TeamCarouselArrows.scss";

const URI = process.env.REACT_APP_API_MEET;


const TeamCarousel = () => {


  /* Start Language */
  const [lang, setLang] = useState([]);
  const [data, setData] = useState([]);
  const { lg } = useContext(LangContext);

  useEffect(() => {
    getLang();
  },[]);

  useEffect(() => {
    let output;

    lg === '/' ? output = 'en' : output = 'sp';
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
    <div className={styles.team_carousel}>
      <h5>
        {data.title} <span>{data.title_2}</span>
      </h5>
      <div className="swipper-button image_swiper_button_next"></div>
      <div className="swipper-button image_swiper_button_prev"></div>
      <div className={`container ${styles.team_carousel_container}`}>
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={20}
          navigation={{
            nextEl: ".image_swiper_button_next",
            prevEl: ".image_swiper_button_prev",
            disabledClass: "swiper-button-disabled",
          }}
          autoplay={{
            delay:3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
          className={styles.swiper_team}
          loop={true}
        >
          {data.ourteam && data.ourteam.map((ourteam, index) => (
          <SwiperSlide key={index}>
            <div className={styles.swiper_img}>
              <img
                src={ourteam.img}
                alt={ourteam.name}
              />
            </div>
            <div className={styles.swiper_caption}>
              <h4>{ourteam.name}</h4>
              <p>{ourteam.post}</p>
              <ul className={styles.social}>
                <li>
                  <Link to={"mailto:" + ourteam.mail}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12.54 12.54"
                    >
                      <g>
                        <circle fill="white" cx="6.27" cy="6.27" r="6.27" />
                        <g>
                          <path
                            fill="red"
                            d="M2.91,3.56h6.74c.13,0,.23,.1,.23,.23,0,.06-.03,.13-.08,.17l-3.37,3.08c-.09,.08-.22,.08-.31,0L2.75,3.97c-.1-.08-.11-.23-.02-.33,.04-.05,.11-.08,.18-.08Z"
                          />
                          <path
                            fill="red"
                            d="M1.99,8.31v-3.88c0-.13,.1-.23,.23-.23,.06,0,.12,.02,.16,.07l1.96,1.95c.09,.09,.09,.24,0,.33,0,0,0,0,0,0l-1.96,1.93c-.09,.09-.24,.09-.33,0-.04-.04-.07-.1-.07-.16h0Z"
                          />
                          <path
                            fill="red"
                            d="M9.48,8.98H3.09c-.13-.01-.23-.11-.23-.24,0-.06,.03-.12,.07-.16l1.74-1.73c.08-.08,.22-.09,.31-.02l1.14,.92c.08,.07,.21,.07,.29,0l1.15-.92c.09-.07,.22-.07,.31,.02l1.77,1.74c.09,.09,.09,.24,0,.33-.04,.04-.1,.07-.16,.07h0Z"
                          />
                          <path
                            fill="red"
                            d="M10.54,8.31c0,.13-.1,.23-.23,.23-.06,0-.12-.02-.16-.07l-1.96-1.95c-.09-.09-.09-.24,0-.33,0,0,0,0,0,0l1.96-1.93c.09-.09,.24-.09,.33,0,.04,.04,.07,.1,.07,.16v3.88Z"
                          />
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to={ourteam.linkedin} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12.54 12.54"
                    >
                      <g>
                        <circle fill="white" cx="6.27" cy="6.27" r="6.27" />
                        <g>
                          <g>
                            <path
                              fill="red"
                              d="M6.63,5.51c.11-.12,.2-.24,.3-.35,.32-.31,.75-.48,1.2-.48,.26,0,.51,.03,.76,.09,.53,.15,.93,.57,1.05,1.11,.1,.41,.15,.84,.14,1.27v2.7c0,.08-.02,.11-.11,.11-.47,0-.93,0-1.39,0-.08,0-.1-.02-.1-.1,0-.86,0-1.71,0-2.57,0-.22-.02-.43-.08-.64-.08-.36-.42-.6-.79-.56-.48-.02-.88,.34-.9,.82,0,.01,0,.03,0,.04-.02,.13-.02,.27-.02,.4v2.5c0,.08-.02,.11-.1,.11-.47,0-.93,0-1.4,0-.08,0-.1-.02-.1-.1V4.91c0-.08,.03-.1,.1-.1h1.33c.08,0,.1,.03,.1,.1,.01,.2,.01,.4,.01,.6Z"
                            />
                            <path
                              fill="red"
                              d="M4.09,7.39v2.45c0,.09-.02,.12-.12,.12h-1.39c-.07,0-.1-.02-.1-.1,0-1.65,0-3.3,0-4.95,0-.07,.02-.09,.09-.09h1.41c.09,0,.1,.03,.1,.11,0,.82,0,1.64,0,2.47Z"
                            />
                            <path
                              fill="red"
                              d="M4.21,3.18c0,.51-.41,.93-.92,.93-.51,0-.93-.41-.93-.92,0-.51,.41-.93,.92-.93h0c.51,0,.92,.41,.92,.92Z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h6>
        {" "}
        <Link>
          +100<p>{data.team}</p>
        </Link>
        {data.subtitle}
      </h6>
    </div>
  );
};

export default TeamCarousel;