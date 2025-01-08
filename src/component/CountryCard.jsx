import React from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";

import "./CountryCard.css";
import { NO_IMG } from "../images/imagesExport";

const CountryCard = ({ countryName, continent, flag = NO_IMG }) => {
  return countryName ? (
    <Card className="p-2">
      <Row className="align-items-stretch">
        <Col xs={3} lg={3} md={12} >
          <Card.Img
            style={{ width: "125px", height: "100%" }}
            variant="top"
            src={flag}
          />
        </Col>
        <Col xs={9} lg={9} md={12}>
          <Card.Body>
            <Card.Title>{countryName}</Card.Title>
            <Card.Text>{continent}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  ) : (
    <Card className="skeleton">
      <Row className="align-items-stretch">
        <Card.Body
          style={{ width: "125px", height: "100px" }}
          variant="top"
        />
      </Row>
    </Card>
  );
};

export default CountryCard;
