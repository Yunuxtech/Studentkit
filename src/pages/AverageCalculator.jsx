import React, { useState } from "react";
import Helmet from "../Helmet/Helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { calculateAverage } from "../function/calculateAverage";
function AverageCalculator() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [messageType, setMessageType] = useState("");
  const [messageHeading, setMessageHeading] = useState("");
  const [messageText, setmessageText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const dataArray = value.split(",").map(Number);
      const result = calculateAverage(dataArray);

      if (result !== null && !isNaN(result)) {
        setMessageType("success");
        setMessageHeading("WOW😲😲😲");
        setmessageText(`Average is : ${result}`);
      } else {
        setMessageType("danger");
        setMessageHeading("Invalid input 🙅‍♂️🙅‍♂️🙅‍♂️");
        setmessageText(`Please All items must be numbers.`);
      }

      setShow(true);
    }

    setValidated(true);
  };
  return (
    <Helmet title="Average Calculator">
      <NavBar />
      <Container fluid="md" className="mt-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <Link to="/" className="back fw-bold">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="">
            Average Calculator
          </Breadcrumb.Item>
        </Breadcrumb>

        <Card className="bg-dark text-black">
          <Card.ImgOverlay>
            {/* <Card.Title> </Card.Title> */}
            <p>
              <span className="fw-bold">Note:</span> Values should be entered in
              this format (1,2,4...)
            </p>
            <Card.Text>
              {show ? (
                <Alert
                  variant={messageType}
                  onClose={() => setShow(false)}
                  dismissible
                >
                  <Alert.Heading>{messageHeading}</Alert.Heading>
                  <p>{messageText}</p>
                </Alert>
              ) : (
                ""
              )}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="8" controlId="validationCustom01">
                    <Form.Label className="fw-bold">Enter Principal</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Values"
                      value={value}
                      onChange={(event) => setValue(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Values is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button variant="outline-secondary" type="submit">
                  Calculate Average
                </Button>
              </Form>
            </Card.Text>
            {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
          </Card.ImgOverlay>
        </Card>
      </Container>
    </Helmet>
  );
}

export default AverageCalculator;
