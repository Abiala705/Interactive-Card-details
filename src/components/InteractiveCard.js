import React from "react";

import { Container } from "react-bootstrap";
import styles from "./InteractiveCard.module.css";
import FrontCard from "./Details/FrontCard/FrontCard";
import BackCard from "./Details/BackCard/BackCard";

const InteractiveCard = (props) => {
  return (
    <>
      <Container className={`d-md-none col-12 ` + styles["section_mobile"]}>
        <BackCard className={styles.back} />
        <FrontCard className={styles.front} />
      </Container>

      <Container
        className={`d-none d-md-block col-12 ` + styles["section_larger"]}
      >
        <BackCard className={styles.back} />
        <FrontCard className={styles.front} front={props.value} />
      </Container>
    </>
  );
};

export default InteractiveCard;
