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
import { convertTemperature } from "../function/convertTemperature";

function TemperatureConverter() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [From, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [messageType, setMessageType] = useState("");
  const [messageHeading, setMessageHeading] = useState("");
  const [messageText, setmessageText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const Input = parseInt(value, 10);
      const convertedTemperature = convertTemperature(Input, From, to); // console.log(ConversionValue);

      if (convertedTemperature !== null) {
        setMessageType("success");
        setMessageHeading("👍👍👍");
        setmessageText(
          `${Input} ${From} is equal to ${convertedTemperature} ${to}.`
        );
      } else {
        setMessageType("info");
        setMessageHeading("Oooops 😒😒😒");
        setmessageText(
          "Something went wrong, Please provide a numeric value and valid temperature units (Celsius or Fahrenheit)."
        );
      }

      setShow(true);
    }

    setValidated(true);
  };
  return (
    <Helmet title="Temperature Converter">
      <NavBar />
      <Container fluid="md" className="mt-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <Link to="/" className="back fw-bold">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="">
            Temperature Converter
          </Breadcrumb.Item>
        </Breadcrumb>

        <Card className="bg-dark text-black">
          <Card.ImgOverlay>
            {/* <Card.Title> </Card.Title> */}
            {/* <p><span className='fw-bold'>Note:</span> Time should be in year (s)</p> */}
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
                    <Form.Label className="fw-bold">Enter Value</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Value"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Value is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="fw-bold">Unit From</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={From}
                      onChange={(e) => setFrom(e.target.value)}
                    >
                      <option selected>Select Unit</option>
                      <option value="Celsius">Celsius</option>
                      <option value="Fahrenheit">Fahrenheit</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Interest Rate is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="fw-bold">Unit To</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                    >
                      <option selected>Select Unit</option>
                      <option value="Celsius">Celsius</option>
                      <option value="Fahrenheit">Fahrenheit</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Interest Rate is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button variant="outline-secondary" type="submit">
                  Convert Temperature
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

export default TemperatureConverter;
