import React from "react";
import styles from "./WhatWeDo.module.scss";

const WhatWeDo = () => {
  return (
    <div className={styles.what_we_do}>
      <h4>What we do</h4>
      <div className={styles.what_we_do_wrapper}>
        <div className={styles.box}>
          <img
            src="/assets/img/30_territories_latamly.png"
            alt="30 develop territories in latin america"
          />
          <div className={styles.box_card}>
            <div className={styles.box_card_title}>
              <h6>Then we develop a business model</h6>
              <img
                className={styles.box_card_arrow}
                src="/assets/img/latamly_right_arrow_200x200.png"
                alt="Arrow latamly group"
              />
            </div>
            <div className={styles.box_card_content}>
              Distribution network
              <ul>
                <li>Sell-in shares</li>
                <li>Sell-through activities</li>
                <li>Sell-out activities</li>
              </ul>
              Direct
              <ul>
                <li>Marketplaces</li>
                <li>E-commerces</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.box_card}>
            <div className={styles.box_card_title}>
              <img
                src="/assets/img/latamly_right_arrow_200x200.png"
                alt="Arrow latamly group"
              />
              <h6>Then we develop a business model</h6>
            </div>
            <div className={styles.box_card_content}>
              Distribution network
              <ul>
                <li>Sell-in shares</li>
                <li>Sell-through activities</li>
                <li>Sell-out activities</li>
              </ul>
              Direct
              <ul>
                <li>Marketplaces</li>
                <li>E-commerces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
