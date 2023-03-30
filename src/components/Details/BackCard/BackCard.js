import React from "react";

import cardBack from "../../../assets/bg-card-back.png";
import styles from "../../Details/BackCard/BackCard.module.css";
import BackCardDetails from "../BackCard/BackCardDetails";

const BackCard = () => {
  return (
    <div>
      <img className={styles.cardback} src={cardBack} alt="card back" />
      <BackCardDetails className={styles.details} />
    </div>
  );
};

export default BackCard;
