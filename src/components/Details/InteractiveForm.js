import React from "react";
import styles from "../Details/InteractiveForm.module.css";
import Expiry from "./Expiry";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const InteractiveForm = () => {
  return (
    <div className={styles.form + ` pt-5 mx-3 row text-start form-max`}>
      <Form className="">
        <Row>
          <Col xs={4}>
            <Form.Label>Cardholder name</Form.Label>
            <Form.Control placeholder="e.g. Jane Appleseed" type="text" />
          </Col>
          <Col>
            <Form.Label>Cardholder number</Form.Label>
            <Form.Control
              placeholder="e.g. 1234 5678 9123 0000"
              type="number"
            />
          </Col>
        </Row>
      </Form>
      <Expiry />
      <div>
        <Button className="col-12">Confirm</Button>
      </div>
    </div>
  );
};

export default InteractiveForm;
