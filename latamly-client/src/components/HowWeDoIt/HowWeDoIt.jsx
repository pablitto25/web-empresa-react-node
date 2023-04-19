import React from "react";
import styles from "./HowWeDoIt.module.scss";

const HowWeDoIt = () => {
  return (
    <section className={styles.how_we_do_it}>
      <h4>How we do it</h4>
      <div className={`${styles.how_we_do_it_wrapper} container`}>
        <div className={styles.box}>
          <div className={styles.box_card}>
            <div className={styles.box_card_title}>
              <img
                className={styles.box_card_arrow}
                src="/assets/img/latamly_right_arrow_200x200.png"
                alt="Arrow latamly group"
              />
              <h6>We operate tailored</h6>
            </div>
            <div className={styles.box_card_content}>
              Push strategies
              <ul>
                <li>Business models</li>
                <li>On/off channels</li>
                <li>Branding</li>
                <li>Communication and press</li>
                <li>Customer service</li>
                <li>Foreign trade</li>
                <li>Storage and logistics</li>
                <li>Business intelligence</li>
                <li>Warranty and RMA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={`${styles.box_card} ${styles.box_absolute}`}>
            <div className={styles.box_card_title}>
              <h6>We guarantee the purchase</h6>
              <img
                src="/assets/img/latamly_right_arrow_200x200.png"
                alt="Arrow latamly group"
              />
            </div>
            <div className={styles.box_card_content}>
              Pull strategies
              <ul>
                <li>Production</li>
                <li>Business</li>
                <li>Experience and quality control</li>
                <li>Brand</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
