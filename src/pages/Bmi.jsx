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
import { calculateBMI } from "../function/calculateBMI";

function Bmi() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [messageType, setMessageType] = useState("");
  const [messageHeading, setMessageHeading] = useState("");
  const [messageText, setmessageText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const InputWeight = parseInt(weight, 10);
      const InputHeight = parseInt(height, 10);
      const bmiResult = calculateBMI(InputWeight, InputHeight);

      if (bmiResult !== null) {
        setMessageType("success");
        setMessageHeading("👍👍👍");
        setmessageText(`The Body Mass Index (BMI) is: ${bmiResult}`);
      } else {
        setMessageType("info");
        setMessageHeading("Oooops 😒😒😒");
        setmessageText(
          "Something went wrong, Please provide valid numeric values for weight and height (with height greater than zero)."
        );
      }

      setShow(true);
    }

    setValidated(true);
  };
  return (
    <Helmet title="BMI">
      <NavBar />
      <Container fluid="md" className="mt-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <Link to="/" className="back fw-bold">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="">
            BMI Calculator
          </Breadcrumb.Item>
        </Breadcrumb>

        <Card className="bg-dark text-black">
          <Card.ImgOverlay>
            {/* <Card.Title> </Card.Title> */}
            <p>
              <span className="fw-bold">Note:</span> Weight in Kilograms &
              Height in Meters
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
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label className="fw-bold">Enter Weight</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Weight"
                      value={weight}
                      onChange={(event) => setWeight(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Weight is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label className="fw-bold">Enter Height</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Height"
                      value={height}
                      onChange={(event) => setHeight(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Height is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button variant="outline-secondary" type="submit">
                  Calculate BMI
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

export default Bmi;
