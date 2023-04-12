import React from "react";
import styles from "./AddValue.module.scss";

const AddValue = () => {
  console.log(styles);
  return (
    <section className={styles.add_value}>
      <h3>We get involved <span>to add value</span></h3>
      <p>
        We do what businesses and brands need to take root in the region and
        sustain their growth. We get consumers to trust them and choose them
        over and over.
      </p>
      <div className={styles.separator}><span></span></div>
      <div className={styles.bullets_container}>
        <div className={styles.bullet_card}>
          <img src="/assets/img/envolved_icon.png" alt="Latamly envolved" />
          <h4>We evolved the trade together</h4>
          <p>
            optimizing businesses from manufacturing to consumer experience, in
            the different Latin American markets.
          </p>
        </div>
        <div className={styles.bullet_card}>
          <img src="/assets/img/envolved_icon.png" alt="Latamly envolved" />
          <h4>We evolved the trade together</h4>
          <p>
            optimizing businesses from manufacturing to consumer experience, in
            the different Latin American markets.
          </p>
        </div>
        <div className={styles.bullet_card}>
          <img src="/assets/img/envolved_icon.png" alt="Latamly envolved" />
          <h4>We evolved the trade together</h4>
          <p>
            optimizing businesses from manufacturing to consumer experience, in
            the different Latin American markets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AddValue;