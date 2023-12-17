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
import { calculateSimpleInterest } from "../function/calculateSimpleInterest";
function SimpleInterestCalculator() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [time, setTime] = useState("");
  const [messageType, setMessageType] = useState("");
  const [messageHeading, setMessageHeading] = useState("");
  const [messageText, setmessageText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const simpleInterest = calculateSimpleInterest(
        parseFloat(principal, 10),
        parseFloat(interestRate, 10),
        parseFloat(time, 10)
      );
      if (!isNaN(principal) && !isNaN(interestRate) && !isNaN(time)) {
        if (simpleInterest !== null) {
          setMessageType("success");
          setMessageHeading("WOW😲😲😲");
          setmessageText(`The simple interest is: ${simpleInterest}`);
        } else {
          setMessageType("danger");
          setMessageHeading("Invalid input 🙅‍♂️🙅‍♂️🙅‍♂️");
          setmessageText(
            `Please provide valid numeric values for principal, rate, and time.`
          );
        }
      } else {
        // console.log("please inter a valid number");
        setMessageType("danger");
        setMessageHeading("Oh snap! You got an error! ❌❌❌");
        setmessageText("please enter a valid number");
      }
      setShow(true);
    }

    setValidated(true);
  };
  return (
    <Helmet title="Simple Interest Calculator">
      <NavBar />
      <Container fluid="md" className="mt-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <Link to="/" className="back fw-bold">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="">
            Simple Interest Calculator
          </Breadcrumb.Item>
        </Breadcrumb>

        <Card className="bg-dark text-black">
          <Card.ImgOverlay>
            {/* <Card.Title> </Card.Title> */}
            <p>
              <span className="fw-bold">Note:</span> Time should be in year (s)
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
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="fw-bold">Enter Principal</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Principal"
                      value={principal}
                      onChange={(event) => setPrincipal(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Principal is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="fw-bold">
                      Enter Interest Rate
                    </Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Interest Rate "
                      value={interestRate}
                      onChange={(event) => setInterestRate(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Interest Rate is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="fw-bold">Enter Time</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Time"
                      value={time}
                      onChange={(event) => setTime(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Time is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button variant="outline-secondary" type="submit">
                  Calculate Interest
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

export default SimpleInterestCalculator;
