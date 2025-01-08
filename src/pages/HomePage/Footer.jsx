import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SocialLogin from "../../component/SocialLogin";
import { SOCIALS } from "../../constants/socials";

const Footer = () => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <SocialLogin socials={SOCIALS} />
          </Col>
        </Row>
        <Row className="justify-content-center mt-5 fs-6 fw-bold lh-base">
          <Col xs="auto">
            <p className="text-muted">Example@email.com</p>
          </Col>
        </Row>
        <Row className="justify-content-center fs-6 fw-bold lh-base">
          <Col xs="auto">
            <p className="text-muted">
              Copyright © 2020 Name. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
