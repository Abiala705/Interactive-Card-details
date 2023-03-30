import React, { useState } from "react";
import styles from "../../Details/FrontCard/FrontCardDetails.module.css";
import cardlogo from "../../../assets/card-logo.svg";

const FrontCardDetails = (props) => {
  const [validity, setValidity] = useState(false);

  const checkValidity = () => {
    setValidity(true);
    if (props.value.length === 0) {
      setValidity(false);
    }
  };

  return (
    <div className={styles.details}>
      <div className={styles.wrapper}>
        <img className={styles["card-logo"]} src={cardlogo} alt="card logo" />
        <div className={`ps-2 ` + styles["card-input"]}>
          <div
            className={`cardNum ` + styles["card-number"]}
            onChange={checkValidity}
          >
            {validity && `0000 0000 0000 0000`}
            {!validity && props.front}
          </div>
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
