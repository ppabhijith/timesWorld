import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import faceBook from "../images/facebook.png";
import twiter from "../images/twiter.png";
import google from "../images/google.png";
import { Link } from "react-router";

const SocialLogin = ({ socials }) => {
  return (
    <div className="d-flex justify-content-center">
      {socials.map((x) => (
        <Link key={x.alt} to={x.to} className="mx-2">
          <img width={30} src={x.icon} alt={x.alt} title={x.alt} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLogin;
