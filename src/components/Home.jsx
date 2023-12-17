import React, { useState, useEffect } from "react";
import Helmet from "../Helmet/Helmet";
import Preloader from "./Preloader";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import NavBar from "./NavBar";
import Img1 from "../images/SimpleInterest.png";
import Img2 from "../images/Exponent Calcul 5e069d64-2af1-4b70-a742-1bc3dc81c3db.png";
import Img3 from "../images/Number to Roman bc148951-1c57-4835-b5ae-b17b13e068f6.png";
import Img4 from "../images/Percentage Calc c0261a00-83db-4e94-8cf7-4ca27688de00.png";
import Img5 from "../images/Prime Number Ch 5d69ac98-94b1-430e-a534-3ffc28332d4d.png";
function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate some asynchronous data loading
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Helmet title="Home">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <NavBar />

          <Container fluid="md" className="mt-4">
            <Row className="mt-4">
              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img5} />
                  <Card.Body>
                    <Card.Title className="text-center fw-b">
                      Prime Number Checker
                    </Card.Title>
                    <Card.Text className="text-center">
                      Involves checking whether a number is prime, which is a
                      basic concept
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/PrimeNumberChecker" className="link">
                        Prime Number Checker
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img1} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Number to Word
                    </Card.Title>
                    <Card.Text className="text-center">
                      Involves converting a numeric value to its word format,
                      introducing a bit more complexity
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/NumberToWord" className="link">
                        Number to Word
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img3} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Number to Roman Number
                    </Card.Title>
                    <Card.Text className="text-center">
                      Requires converting a numeric value to its Roman numeral
                      representation, introducing additional rules
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/NumberToRoman" className="link">
                        Number to Roman Number
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img4} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Percentage Calculator
                    </Card.Title>
                    <Card.Text className="text-center">
                      Calculates percentages, which is a fundamental concept but
                      involves a specific calculation
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/PercentageCalculator" className="link">
                        Percentage Calculator
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img1} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Simple Interest Calculator
                    </Card.Title>
                    <Card.Text className="text-center">
                      Involves calculating simple interest, requiring knowledge
                      of the formula and some arithmetic
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/SimpleInterestCalculator" className="link">
                        Simple Interest Calculator
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img3} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Average Calculator
                    </Card.Title>
                    <Card.Text className="text-center">
                      Calculates the average of given values, introducing basic
                      statistical concepts
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/AverageCalculator" className="link">
                        Average Calculator
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img5} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Unit Converter
                    </Card.Title>
                    <Card.Text className="text-center">
                      Involves converting units, which can be straightforward
                      but requires understanding different unit systems
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/UnitConverter" className="link">
                        Unit Converter
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img1} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Quadratic Equation Solver
                    </Card.Title>
                    <Card.Text className="text-center">
                      Solves quadratic equations, introducing algebraic concepts
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/QuadraticEquationSolver" className="link">
                        Quadratic Equation Solver
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img2} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Exponent Calculator
                    </Card.Title>
                    <Card.Text className="text-center">
                      Computes exponents, involving more advanced arithmetic
                      concepts
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/ExponentCalculator" className="link">
                        Exponent Calculator
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img3} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Ratio Calculator
                    </Card.Title>
                    <Card.Text className="text-center">
                      Calculates ratios between given values, which can be more
                      complex depending on the context.
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/RatioCalculator" className="link">
                        Ratio Calculator
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img5} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      BMI (Body Mass Index)
                    </Card.Title>
                    <Card.Text className="text-center">
                      Calculates the BMI of given values, which can be more
                      complex depending on the context.
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/Bmi" className="link">
                        BMI Calculator
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={4} className="mt-4">
                <Card style={{}}>
                  <Card.Img variant="top" src={Img1} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Temperature Converter
                    </Card.Title>
                    <Card.Text className="text-center">
                    Converter temperature  between given values, which can be more
                      complex depending on the context.
                    </Card.Text>
                    <div className="d-grid gap-2">
                      <Link to="/TemperatureConverter" className="link">
                      Temperature Converter
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Helmet>
  );
}

export default Home;
