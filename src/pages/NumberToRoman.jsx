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
import { numberToRoman } from "../function/numberToRoman";
function NumberToRoman() {
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
      // If form is valid, show the alert with the inputted value
      // alert(`Inputted Value: ${value}`);
      // console.log(value);
      const romanNumeral =numberToRoman(parseInt(value, 10));
      if (!isNaN(value)) {
        if ((romanNumeral) !== null) {
          setMessageType("success");
          setMessageHeading("WOW😲😲😲");
          setmessageText(`${value} in Roman numerals: ${romanNumeral}`);
        } else {
          setMessageType("danger");
          setMessageHeading("Invalid input 🙅‍♂️🙅‍♂️🙅‍♂️");
          setmessageText(
            `${value} Please provide a positive integer between 1 and 3999.`
          );
        }
      } else {
        // console.log("please inter a valid number");
        setMessageType("danger");
        setMessageHeading("Oh snap! You got an error! ❌❌❌");
        setmessageText("please inter a valid number");
      }
      setShow(true);
    }

    setValidated(true);
  };
  return (
    <Helmet title="Number To Roman">
      <NavBar />
      <Container fluid="md" className="mt-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <Link to="/" className="back fw-bold">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="">
            Number To Roman
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
                  <Form.Group as={Col} md="8" controlId="validationCustom01">
                    <Form.Label className="fw-bold">Enter Number</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Number"
                      value={value}
                      onChange={(event) => setValue(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Number is required
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* <Form.Group as={Col} md="4" className="mt-3"> */}

                  {/* </Form.Group> */}
                </Row>
                <Button variant="outline-secondary" type="submit">
                  Convert Number
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

export default NumberToRoman;
