import React from 'react';
import './App.scss';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import Root from './routes';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">GEDU173</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/syllabus">Syllabus</Nav.Link>
            <Nav.Link href="/class">Class Works</Nav.Link>
            <Nav.Link href="/presentation">Presentation</Nav.Link>
            <NavDropdown title="Direct Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.turnitin.com/s_class_portfolio.asp?r=82.6055802736256&svr=29&lang=en_us&aid=57444&cid=25510210">
                Turnitin
              </NavDropdown.Item>
              <NavDropdown.Item href="https://lms.postech.ac.kr/">
                LMS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <Root />
    </div>
  );
}

export default App;
