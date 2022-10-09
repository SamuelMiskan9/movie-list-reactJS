import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className="nav-style">
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className = "p3" style={{ color: "tomato", shadow: "red" }}>
            SYAHRIFILM
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="" className = "p4" style={{ color: "tomato" }}>
              Trending
            </Nav.Link>
            <Nav.Link href="" className = "p5" style={{ color: "tomato" }}>
              Superhero
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
