import React, { useState } from "react";
import styles from "../Form/InteractiveForm.module.css";
import Expiry from "./Expiry";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const InteractiveForm = (props) => {
  return (
    <div
      className={
        styles.form +
        ` pt-5 mx-3 mt-3 row text-start form-max ms-md-auto me-md-5`
      }
    >
      <Form className="">
        <Row>
          <Col xs={12}>
            <Form.Label>Cardholder name</Form.Label>
            <Form.Control
              placeholder="e.g. Jane Appleseed"
              type="text"
              className={`card_nam ` + styles.custom}
            />
          </Col>
          <Col>
            <Form.Label>Cardholder number</Form.Label>
            <Form.Control
              placeholder="e.g. 1234 5678 9123 0000"
              type="number"
              className="card_num"
              onChange={props.change}
              value={props.front}
            />
          </Col>
        </Row>
      </Form>
      <Expiry />
      <div>
        <Button className={`col-12 submit ` + styles.button}>Confirm</Button>
      </div>
    </div>
  );
};

export default InteractiveForm;
