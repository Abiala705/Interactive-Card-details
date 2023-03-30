import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import "./Expiry.css";
import styles from "../Details/InteractiveForm.module.css";
import { FormControl } from "react-bootstrap";

function Expiry() {
  return (
    <Form>
      <Row className="gap-3">
        {/* <Col xs={4}>
          <Form.Label>Exp. date</Form.Label>
          <Form.Control className={`col-3 input_size`} placeholder="MM" />
        </Col>
        <Col xs={3}>
          <Form.Label>(MM/YY)</Form.Label>
          <Form.Control className="col-3" placeholder="YY" />
        </Col> */}
        <Col xs={4}>
          <Form.Label>Exp. date (MM/YY)</Form.Label>
          <InputGroup className="row gap-2 mb-3 ps-2">
            <FormControl aria-label="MM" className="col-2" placeholder="MM" />
            <FormControl aria-label="YY" className="col-2" placeholder="YY" />
          </InputGroup>
        </Col>

        <Col xs={1}>
          <Form.Label>CVC</Form.Label>
          <Form.Control
            className={`col-1 cvc ` + styles.cvv}
            placeholder="CVC"
            size="3"
          />
        </Col>
      </Row>
    </Form>
  );
}

export default Expiry;
