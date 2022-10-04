import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  return (
    <div>
      <div className="container">
        <header className=" align-items-center justify-content-center bg-wood-light p-5 row">
          <div className="col-lg-6 p-1">
            <img
              className="d-block mx-auto"
              style={{ width: "100px" }}
              src={logo}
              alt="logo of M. Wood Products"
            ></img>
          </div>
          <div className="col-lg-6 p-1">
            <h1 className="textal text-nowrap ">M. Wood Products</h1>
          </div>
        </header>
      </div>

      <Navbar expand="lg" className="nav-background">
        <Container>
          <Navbar.Brand href="start">Sägewerk</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="start">Start</Nav.Link>
              <Nav.Link href="ueber-uns">Über uns</Nav.Link>
              <NavDropdown
                title="Produkte und Dienstleistungen"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#produkte/Bauholz">
                  Bauholz
                </NavDropdown.Item>
                <NavDropdown.Item href="#produkte/Lohnschnitt">
                  Lohnschnitt
                </NavDropdown.Item>
                <NavDropdown.Item href="#produkte/Edelhölzer">
                  Edelhölzer
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#produkte/Feuerholz">
                  Feuerholz
                </NavDropdown.Item>
                <NavDropdown.Item href="#produkte/Sägemehl">
                  Sägemehl
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="kontakt">Kontakt</Nav.Link>
              <Nav.Link href="impressum">Impressum</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
