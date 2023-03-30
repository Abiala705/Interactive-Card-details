import React from "react";

import { Container } from "react-bootstrap";
import styles from "./InteractiveCard.module.css";
import FrontCard from "./Details/FrontCard";
import BackCard from "./Details/BackCard";

const InteractiveCard = () => {
  console.log("Abiala");
  return (
    <>
      <Container className={`d-md-none ` + styles.section}>
        <BackCard className={styles.back} />
        <FrontCard className={styles.front} />
      </Container>

      <Container className={`d-none d-block ` + styles.section}>
        <BackCard className={styles.back} />
        <FrontCard className={styles.front} />
      </Container>
    </>
  );
};

export default InteractiveCard;
