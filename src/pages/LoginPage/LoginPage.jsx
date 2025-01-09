import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import person from "../../images/personkey.png";  

function Login() {
  return (
    <Container className="d-flex align-items-center min-vh-100">
      <Container>
        <Row>
          <Col xs={12} md={10} className="mx-auto">
            <Row>
              <Col xs={12} md={10}>
                <aside className="login">
                  <h1>Sign In</h1>
                  <p>
                    New User? <Link to="register">Create an account</Link>
                  </p>
                  <LoginForm />
                </aside>
              </Col>
              <Col xs={12} md={2} className="d-none d-lg-block">
                <aside className="login__img">
                  <img src={person} alt="person and key" />
                </aside>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
