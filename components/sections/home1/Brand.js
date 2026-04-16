"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles

export default function Brand() {
  // State for dynamic data (e.g., dynamic images)
  const [brands, setBrands] = useState([
    { img1: "/client/PRIME LOGO (1).jpg", img2: "/client/PRIME LOGO (1).jpg" },
    { img1: "/client/automerch.jpg", img2: "/client/automerch.jpg" },
    { img1: "/client/lamer.webp", img2: "/client/lamer.webp" },
    { img1: "/client/stanley-logo (1).jpg", img2: "/client/stanley-logo (1).jpg" },
    { img1: "/client/PRIME LOGO (1).jpg", img2: "/client/PRIME LOGO (1).jpg" },
    { img1: "/client/automerch.jpg", img2: "/client/automerch.jpg" },
  ]);

  return (
    <>
      {/* Start Brand One */}
      <div className="brand-one">
        <div className="container">
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              0: { spaceBetween: 30, slidesPerView: 1 },
              375: { spaceBetween: 30, slidesPerView: 1 },
              575: { spaceBetween: 30, slidesPerView: 2 },
              768: { spaceBetween: 30, slidesPerView: 3 },
              992: { spaceBetween: 30, slidesPerView: 4 },
              1200: { spaceBetween: 30, slidesPerView: 5 },
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div
                  className="img-box"
                  style={{
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={brand.img1}
                    alt={`Brand ${index + 1} Image 1`}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "160px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div
                  className="img-box2"
                  style={{
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={brand.img2}
                    alt={`Brand ${index + 1} Image 2`}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "160px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* End Brand One */}
    </>
  );
}
