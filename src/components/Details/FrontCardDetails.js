import React from "react";
import styles from "../../components/Details/FrontCardDetails.module.css";
import cardlogo from "../../assets/card-logo.svg";

const FrontCardDetails = () => {
  return (
    <div className={styles.details}>
      <div className={styles.wrapper}>
        <img className={styles["card-logo"]} src={cardlogo} alt="card logo" />
        <div className={`ps-2 ` + styles["card-input"]}>
          <div className={styles["card-number"]}>0000 0000 0000 0000</div>
          <div className="row justify-content-center">
            <p className={`col-8 pt-2 ` + styles["card-name"]}>
              Jane Appleseed
            </p>
            <p className={`col-4 ms-auto pt-1 ` + styles["card-expiry"]}>
              00/00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCardDetails;
