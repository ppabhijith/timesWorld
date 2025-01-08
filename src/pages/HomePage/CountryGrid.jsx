import React, { useRef } from "react";
import CountryCard from "../../component/CountryCard";
import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";

const CountryGrid = ({ displayedCountries, setDisplayedCountries }) => {
  const { countries } = useSelector((state) => state.countries);
  const { current: pageSize } = useRef(10);

  const handleLoadMore = () => {
    const currentLength = displayedCountries.length;
    const nextPageSize = Math.min(currentLength + pageSize, countries.length);
    setDisplayedCountries(countries.slice(0, nextPageSize));
  };

  return (
    <>
      <Container className="">
        <Row className="mt-5 mb-5">
          {displayedCountries.length
            ? displayedCountries.map((country) => (
                <Col md={6} lg={6} className="g-2">
                  <CountryCard
                    key={country.name}
                    countryName={country.name}
                    continent={country.region}
                    flag={country.flag}
                  />
                </Col>
              ))
            : "No country "}
        </Row>
        <div className="text-center mt-3 mb-3">
          {countries.length !== displayedCountries.length && (
            <Button
              className="btn-lg"
              variant="primary"
              onClick={handleLoadMore}
              disabled={displayedCountries.length === countries.length}
            >
              Load More
            </Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default CountryGrid;
