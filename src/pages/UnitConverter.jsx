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

import { convertUnits } from "../function/convertUnits";

function UnitConverter() {
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
      const ConversionValue = convertUnits(Input, From, to);
      // console.log(ConversionValue);

      if (ConversionValue !== null) {
        setMessageType("success");
        setMessageHeading("👍👍👍");
        setmessageText(
          `${value} ${From} is equal to ${ConversionValue} in ${to}`
        );
      } else {
        setMessageType("info");
        setMessageHeading("Oooops 😒😒😒");
        setmessageText("Conversion Isn't Available");
      }

      setShow(true);
    }

    setValidated(true);
  };
  return (
    <Helmet title="Unit Converter">
      <NavBar />
      <Container fluid="md" className="mt-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <Link to="/" className="back fw-bold">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="">
            Unit Converter
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
                      onChange={(event) => setValue(event.target.value)}
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
                      onChange={(event) => setFrom(event.target.value)}
                    >
                      <option selected>Select Unit</option>
                      <option value="Kilometer">Kilometer</option>
                      <option value="Centimeter">Centimeter</option>
                      <option value="Millimeter">Millimeter</option>
                      <option value="Inch">Inch</option>
                      <option value="Foot">Foot</option>
                      <option value="Yard">Yard</option>
                      <option value="Mile">Mile</option>
                      <option value="Kilo">Kilo</option>
                      <option value="Milligram">Milligram</option>
                      <option value="Meter">Meters</option>
                      <option value="Microgram">Microgram</option>
                      <option value="Ounce">Ounce</option>
                      <option value="Pound">Pound</option>
                      <option value="Ton">Ton</option>
                      <option value="Feet">Feet</option>
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
                      onChange={(event) => setTo(event.target.value)}
                    >
                      <option selected>Select Unit</option>
                      <option value="Kilometer">Kilometer</option>
                      <option value="Centimeter">Centimeter</option>
                      <option value="Millimeter">Millimeter</option>
                      <option value="Inch">Inch</option>
                      <option value="Foot">Foot</option>
                      <option value="Yard">Yard</option>
                      <option value="Mile">Mile</option>
                      <option value="Kilo">Kilo</option>
                      <option value="Milligram">Milligram</option>
                      <option value="Meter">Meters</option>
                      <option value="Microgram">Microgram</option>
                      <option value="Ounce">Ounce</option>
                      <option value="Pound">Pound</option>
                      <option value="Ton">Ton</option>
                      <option value="Feet">Feet</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Interest Rate is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button variant="outline-secondary" type="submit">
                  Convert Unit
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

export default UnitConverter;
