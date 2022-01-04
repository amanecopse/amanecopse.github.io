import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Lim Juhyon's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <NavDropdown title={"Skills & Expertise"}>
              <NavDropdown.Item href="#action/3.1">
                Programming Languages
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>
                Embedded System
                <NavDropdown.Item href="#action/3.1">
                  Cortex m3
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Arduino</NavDropdown.Item>
              </NavDropdown.Header>
              <NavDropdown.Header>
                Web
                <NavDropdown.Item href="#action/3.1">Node.js</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">React</NavDropdown.Item>
              </NavDropdown.Header>
              <NavDropdown.Header>
                Mobile Application
                <NavDropdown.Item href="#action/3.1">Android</NavDropdown.Item>
              </NavDropdown.Header>
              <NavDropdown.Header>
                Game
                <NavDropdown.Item href="#action/3.1">Unity</NavDropdown.Item>
              </NavDropdown.Header>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#contacts">Contacts</Nav.Link>\
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
