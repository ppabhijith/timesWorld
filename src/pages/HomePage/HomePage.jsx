import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import CarouselLite from "../../component/CarouselLite";
import CountryGrid from "./CountryGrid";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/countrySlice";

const initial = [{}, {}, {}, {}, {}];

export const HomePage = () => {
  const dispatch = useDispatch();
  const [displayedCountries, setDisplayedCountries] = useState(initial);

  const fetchCountries = async (region) => {
    try {
      const response = await dispatch(getCountries(region)).unwrap();

      setDisplayedCountries(response.slice(0, 10));
    } catch (error) {
      setDisplayedCountries([]);
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries("all");
  }, []);

  return (
    <>
      <Header fetchCountries={fetchCountries} />

      <Container>
        <Row className="align-items-center">
          <Col className="justify-content-md-center">
            <hr />
          </Col>
          <Col md="auto" className="justify-content-md-center">
            <h1>Welcome</h1>
          </Col>
          <Col className="justify-content-md-center">
            <hr />
          </Col>
        </Row>

        <Row className="align-items-stretch">
          <Col xs={12} md={8} style={{}}>
            <CarouselLite />
          </Col>
          <Col xs={12} md={4}>
            <Image
              style={{ height: "100%", width: "100%" }}
              fluid
              alt="asia"
              src="https://study.com/cimages/multimages/16/asia_phy8389925711458212575.jpg"
            />
          </Col>
        </Row>

        <CountryGrid
          displayedCountries={displayedCountries}
          setDisplayedCountries={setDisplayedCountries}
        />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
