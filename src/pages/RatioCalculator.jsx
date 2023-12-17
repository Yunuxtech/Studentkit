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
import { calculateRatio } from "../function/calculateRatio";
function RatioCalculator() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const [messageType, setMessageType] = useState("");
  const [messageHeading, setMessageHeading] = useState("");
  const [messageText, setmessageText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const Input1 = parseInt(value1, 10);
      const Input2 = parseInt(value2, 10);
      const ratioResult = calculateRatio(Input1, Input2);
      // console.log(ConversionValue);

      if (ratioResult !== null) {
        setMessageType("success");
        setMessageHeading("👍👍👍");
        setmessageText(`The ratio is: ${ratioResult}`);
      } else {
        setMessageType("info");
        setMessageHeading("Oooops 😒😒😒");
        setmessageText("Something went wrong, Please provide valid numeric values, and ensure the second value is not zero");
      }

      setShow(true);
    }

    setValidated(true);
  };

  return (
    <Helmet title="Ratio Calculator">
      <NavBar />
      <Container fluid="md" className="mt-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <Link to="/" className="back fw-bold">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="">
            Ratio Calculator
          </Breadcrumb.Item>
        </Breadcrumb>

        <Card className="bg-dark text-black">
          <Card.ImgOverlay>
            {/* <Card.Title> </Card.Title> */}
            {/* <p><span className='fw-bold'>Note:</span> Values should be in form (2,4,6,7...)</p> */}
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
                      Enter First Value
                    </Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Value"
                      value={value1}
                      onChange={(event) => setValue1(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Value is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label className="fw-bold">
                      Enter Second Value
                    </Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Value"
                      value={value2}
                      onChange={(event) => setValue2(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Value is required
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

export default RatioCalculator;
