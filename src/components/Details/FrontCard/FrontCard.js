import React from "react";

import cardFront from "../../../assets/bg-card-front.png";
import styles from "../../Details/FrontCard/FrontCard.module.css";
import FrontCardDetails from "./FrontCardDetails";

const FrontCard = (props) => {
  return (
    <div>
      <img className={styles.cardfront} src={cardFront} alt="card front" />
      <FrontCardDetails className={styles.details} front={props.front} />
    </div>
  );
};

export default FrontCard;
