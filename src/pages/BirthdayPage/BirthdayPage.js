import React from "react";
import { Card, Container } from "react-bootstrap";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const confettiStyle = {
  fontSize: "2rem",
  margin: "0 0.2rem",
  animation: "bounce 1.2s infinite alternate",
};

const BirthdayPage = () => {
  const { width, height } = useWindowSize();

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Confetti width={width} height={height} numberOfPieces={250} recycle={true} />
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "80vh",
          background: "linear-gradient(135deg, #f5f6fa 60%, #e3f2fd 100%)",
        }}
        fluid
      >
        <Card
          style={{
            width: "100%",
            maxWidth: 380,
            boxShadow: "0 8px 32px rgba(25, 118, 210, 0.18)",
            borderRadius: 24,
            border: "none",
            background: "rgba(255,255,255,0.95)",
            zIndex: 2,
            margin: "1rem",
          }}
        >
          <Card.Body className="text-center">
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
              <span style={confettiStyle}>🎉</span>
              <span style={confettiStyle}>🎂</span>
              <span style={confettiStyle}>🎈</span>
              <span style={confettiStyle}>🥳</span>
              <span style={confettiStyle}>🎊</span>
            </div>
            <Card.Title as="h1" className="mb-3" style={{ color: "#1976d2", fontWeight: 700, fontSize: "2rem" }}>
              Happy Birthday!
            </Card.Title>
            <Card.Text className="mb-4" style={{ color: "#444", fontSize: "1.1rem" }}>
              Wishing you a day filled with joy, laughter, and unforgettable moments.<br />
              <span style={{ color: "#ff9800", fontWeight: 500 }}>Enjoy your special day!</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <style>
          {`
            @media (max-width: 500px) {
              .card {
                min-width: 90vw !important;
                padding: 0.5rem !important;
              }
              h1 {
                font-size: 1.5rem !important;
              }
            }
            @keyframes bounce {
              0% { transform: translateY(0);}
              100% { transform: translateY(-10px);}
            }
          `}
        </style>
      </Container>
    </div>
  );
};

export default BirthdayPage;