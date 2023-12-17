import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img from "../images/Percentage Calc c0261a00-83db-4e94-8cf7-4ca27688de00.png"

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className='fw-bold'>StudentKit</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <img src={img} alt="" srcset="" height={40}  style={{borderRadius:"5px"}}/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;