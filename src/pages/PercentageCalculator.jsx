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
import { calculatePercentage } from "../function/calculatePercentage";

function PercentageCalculator() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [part, setPart] = useState("");
  const [total, setTotal] = useState("");
  const [messageType, setMessageType] = useState("");
  const [messageHeading, setMessageHeading] = useState("");
  const [messageText, setmessageText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const result = calculatePercentage(
        parseInt(part, 10),
        parseInt(total, 10)
      );
      if (!isNaN(part) && !isNaN(total)) {
        if (result !== null) {
          setMessageType("success");
          setMessageHeading("WOW😲😲😲");
          setmessageText(
            `The percentage for ${part} of ${total} is: ${result}%`
          );
        } else {
          setMessageType("info");
          setMessageHeading("Invalid input 🙅‍♂️🙅‍♂️🙅‍♂️");
          setmessageText(
            `Please provide valid numeric values, and ensure the total is not zero.`
          );
        }
      } else {
        // console.log("please inter a valid number");
        setMessageType("danger");
        setMessageHeading("Oh snap! You got an error! ❌❌❌");
        setmessageText(
          "Please provide valid numeric values, and ensure the total is not zero."
        );
      }
      setShow(true);
    }

    setValidated(true);
  };
  // console.log(part)
  // console.log(total)
  return (
    <Helmet title="Percentage Calculator">
      <NavBar />
      <Container fluid="md" className="mt-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <Link to="/" className="back fw-bold">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="">
            Percentage Calculator
          </Breadcrumb.Item>
        </Breadcrumb>

        <Card className="bg-dark text-black">
          <Card.ImgOverlay>
            {/* <Card.Title>Card title</Card.Title> */}
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
                    <Form.Label className="fw-bold">
                      Enter Part Number
                    </Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Part Number"
                      value={part}
                      onChange={(event) => setPart(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Part Number is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label className="fw-bold">
                      Enter Total Number
                    </Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Total Number"
                      value={total}
                      onChange={(event) => setTotal(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Total Number is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button variant="outline-secondary" type="submit">
                  Check Percentage
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

export default PercentageCalculator;
