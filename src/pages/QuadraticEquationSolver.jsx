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
import { solveQuadraticEquation } from "../function/solveQuadraticEquation";
function QuadraticEquationSolver() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [messageHeading, setMessageHeading] = useState("");
  const [messageText, setmessageText] = useState("");
  const [a, SetA] = useState("");
  const [b, SetB] = useState("");
  const [c, SetC] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const InputA = parseInt(a, 10);
      const InputB = parseInt(b, 10);
      const InputC = parseInt(c, 10);
      const solution = solveQuadraticEquation(InputA, InputB, InputC);
      if (solution !== null && solution.length > 0) {
        setMessageType("success");
        setMessageHeading("👍👍👍");
        setmessageText(
          `The roots of the quadratic equation are: ${solution.join(", ")}`
        );
      } else {
        setMessageType("info");
        setMessageHeading("Oooops 😒😒😒");
        setmessageText("No real roots for a negative discriminant");
      }

      setShow(true);
    }

    setValidated(true);
  };
  return (
    <Helmet title="Quadratic Equation Solver">
      <NavBar />
      <Container fluid="md" className="mt-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <Link to="/" className="back fw-bold">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="">
            Quadratic Equation Solver
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
                    <Form.Label className="fw-bold">
                      Enter Value For a
                    </Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter a"
                      value={a}
                      onChange={(event) => SetA(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Value for a is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="fw-bold">
                      Enter Value For b
                    </Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter b"
                      value={b}
                      onChange={(event) => SetB(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Value for b is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="fw-bold">
                      Enter Value for c
                    </Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter c"
                      value={c}
                      onChange={(event) => SetC(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Value for c is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button variant="outline-secondary" type="submit">
                  Solve Equation
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

export default QuadraticEquationSolver;
