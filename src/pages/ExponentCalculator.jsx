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
import { calculateExponential } from "../function/calculateExponential";
function ExponentCalculator() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [base, setBase] = useState("");
  const [exponent, setExponent] = useState("");
  const [messageType, setMessageType] = useState("");
  const [messageHeading, setMessageHeading] = useState("");
  const [messageText, setmessageText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const InputBase = parseInt(base, 10);
      const InputExponent = parseInt(exponent, 10);
      const result = calculateExponential(InputBase, InputExponent);
      if (result !== null) {
        setMessageType("success");
        setMessageHeading("👍👍👍");
        setmessageText(
          `The result of the exponential calculation is: ${result}`
        );
      } else {
        setMessageType("info");
        setMessageHeading("Oooops 😒😒😒");
        setmessageText("Something went wrong");
      }

      setShow(true);
    }

    setValidated(true);
  };
  return (
    <Helmet title="Exponent Calculator">
      <NavBar />
      <Container fluid="md" className="mt-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <Link to="/" className="back fw-bold">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="">
            Exponent Calculator
          </Breadcrumb.Item>
        </Breadcrumb>

        <Card className="bg-dark text-black">
          <Card.ImgOverlay>
            {/* <Card.Title> </Card.Title> */}
            <p>
              {/* <span className="fw-bold">Note:</span> Time should be in year (s) */}
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
                    <Form.Label className="fw-bold">Enter Base</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Base"
                      value={base}
                      onChange={(event) => setBase(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Base is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label className="fw-bold">Enter Exponent</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Exponent"
                      value={exponent}
                      onChange={(event) => setExponent(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Exponent is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button variant="outline-secondary" type="submit">
                  Calculate Exponent
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

export default ExponentCalculator;
