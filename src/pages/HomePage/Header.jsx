import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CONTINENTS } from "../../constants/continents";

const Header = ({ fetchCountries }) => {
  const [activeNav, setActiveNav] = useState(CONTINENTS[0]?.key ?? "");

  const onSelection = (region) => {
    setActiveNav(region);
    fetchCountries(region);
  };

  return (
    <>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand className="fs-2" href="#home">
              Countries
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {CONTINENTS.map((x) => (
                  <Nav.Link
                    key={x.key}
                    onClick={() => onSelection(x.key)}
                    style={{
                      borderBottom:
                        activeNav === x.key ? "1px solid #3D3D3D" : "none",
                    }}
                  >
                    {x.display}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
