import React from "react";

import cardFront from "../../assets/bg-card-front.png";
import styles from "../Details/FrontCard.module.css";
import FrontCardDetails from "./FrontCardDetails";

const FrontCard = () => {
  return (
    <div>
      <img className={styles.cardfront} src={cardFront} alt="card front" />
      <FrontCardDetails className={styles.details} />
    </div>
  );
};

export default FrontCard;
