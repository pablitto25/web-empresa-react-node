import React from "react";
import styles from "./Brands.module.scss";
import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <section className={styles.brands} id="Brands">
      <div className={`${styles.title} container`}>
        <h4>
          <span>Empowering</span> businesses and brands
        </h4>
      </div>
      <div className={styles.brands_container}>
        <Link to={"#"} className={styles.brand}>
          <article>
            <div className={styles.brand_logo}>
              <img src="assets/dev/logo_redragon.png" alt="" />
            </div>
            <div className={styles.brand_content}>
              <h4>Gaming peripherals</h4>
              <p>
                A brand that arouses real, passion, recognized as the
                value-for-money leader.
                <span> See more...</span>
              </p>
            </div>
          </article>
        </Link>
        <Link to={"#"} className={styles.brand}>
          <article>
            <div className={styles.brand_logo}>
              <img src="assets/dev/logo_redragon.png" alt="" />
            </div>
            <div className={styles.brand_content}>
              <h4>Gaming peripherals</h4>
              <p>
                A brand that arouses real, passion, recognized as the
                value-for-money leader.
                <span> See more...</span>
              </p>
            </div>
          </article>
        </Link>
        <Link to={"#"} className={styles.brand}>
          <article>
            <div className={styles.brand_logo}>
              <img src="assets/dev/logo_redragon.png" alt="" />
            </div>
            <div className={styles.brand_content}>
              <h4>Gaming peripherals</h4>
              <p>
                A brand that arouses real, passion, recognized as the
                value-for-money leader.
                <span> See more...</span>
              </p>
            </div>
          </article>
        </Link>
        <Link to={"#"} className={styles.brand}>
          <article>
            <div className={styles.brand_logo}>
              <img src="assets/dev/logo_redragon.png" alt="" />
            </div>
            <div className={styles.brand_content}>
              <h4>Gaming peripherals</h4>
              <p>
                A brand that arouses real, passion, recognized as the
                value-for-money leader.
                <span> See more...</span>
              </p>
            </div>
          </article>
        </Link>
        <Link to={"#"} className={styles.brand}>
          <article>
            <div className={styles.brand_logo}>
              <img src="assets/dev/logo_redragon.png" alt="" />
            </div>
            <div className={styles.brand_content}>
              <h4>Gaming peripherals</h4>
              <p>
                A brand that arouses real, passion, recognized as the
                value-for-money leader.
                <span> See more...</span>
              </p>
            </div>
          </article>
        </Link>
        <Link to={"#"} className={styles.brand}>
          <article>
            <div className={styles.brand_logo}>
              <img src="assets/dev/logo_redragon.png" alt="" />
            </div>
            <div className={styles.brand_content}>
              <h4>Gaming peripherals</h4>
              <p>
                A brand that arouses real, passion, recognized as the
                value-for-money leader.
                <span> See more...</span>
              </p>
            </div>
          </article>
        </Link>
        <Link to={"#"} className={styles.brand}>
          <article>
            <div className={styles.brand_logo}>
              <img src="assets/dev/logo_redragon.png" alt="" />
            </div>
            <div className={styles.brand_content}>
              <h4>Gaming peripherals</h4>
              <p>
                A brand that arouses real, passion, recognized as the
                value-for-money leader.
                <span> See more...</span>
              </p>
            </div>
          </article>
        </Link>
        <Link to={"#"} className={styles.brand}>
          <article>
            <div className={styles.brand_logo}>
              <img src="assets/dev/logo_redragon.png" alt="" />
            </div>
            <div className={styles.brand_content}>
              <h4>Gaming peripherals</h4>
              <p>
                A brand that arouses real, passion, recognized as the
                value-for-money leader.
                <span> See more...</span>
              </p>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
};

export default Brands;
