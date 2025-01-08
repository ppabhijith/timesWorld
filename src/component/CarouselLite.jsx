import React, { useState } from "react";
import { Carousel, Image,  } from "react-bootstrap";

const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    alt: "Slide 1",
  },
  {
    src: "https://img.freepik.com/premium-vector/gradient-asia-map-illustration_23-2151731864.jpg?semt=ais_hybrid",
    alt: "Slide 2",
  },
  {
    src: "https://cdn.kastatic.org/ka-content-images/bf99276c340e1b2202b44732a2b9395f6c9a078f.jpg",
    alt: "Slide 3",
  },
];

function MyControlledCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, event) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      data-bs-theme="dark"
      className="d-flex"
      style={{ height: "100%", objectFit: "cover",}}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index} >
          <Image
            style={{ objectFit: "cover" }}
            alt={image.alt}
            src={image.src}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyControlledCarousel;
