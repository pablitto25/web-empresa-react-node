import React from "react";
import style from "./RedFlag.module.scss";

const RedFlag = () => {
  return (
    <section className={style.red_flag}>
      <div className="container">
        <div className={style.red_flag_wrapper}>
          <h5>
            We synergize cultures and create <span>closeness</span>
          </h5>
          <p>
            We are a dynamic market development agency with the spirit and the
            strategy to help our partners make an impact. We care deeply about
            our partners and treat their businesses as our own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RedFlag;
