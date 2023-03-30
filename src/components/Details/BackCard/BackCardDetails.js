import React from "react";
import styles from "../BackCard/BackCardDetails.module.css";

const BackCardDetails = () => {
  return (
    <div className={styles.details}>
      <div className={styles.wrapper}>
        <p className={styles.cvv}>000</p>
      </div>
    </div>
  );
};

export default BackCardDetails;
