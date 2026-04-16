"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    rating: 5,
    feedback:
      "Their legal structuring and compliance expertise have been instrumental in enabling us to execute our investment strategies seamlessly while staying fully aligned with applicable regulations.",
    author: "Lamer Capital Limited",
    caseType: "Investment & Compliance",
  },
  {
    rating: 5,
    feedback:
      "We rely on their ongoing corporate, regulatory, and intellectual property advisory to support our regional expansion and ensure operational compliance across markets.",
    author: "Stanley Group (Stanley Lubricants)",
    caseType: "Corporate & IP Advisory",
  },
  {
    rating: 5,
    feedback:
      "Their team has consistently delivered comprehensive legal documentation and regulatory guidance, along with strong IP compliance support across our business operations.",
    author: "Prime Petroleum Group",
    caseType: "Regulatory & IP Compliance",
  },
  {
    rating: 5,
    feedback:
      "They played a key role in structuring our contracts and mitigating risks in complex engineering and infrastructure projects, providing us with clarity and confidence.",
    author: "Automech Group of Companies",
    caseType: "Contracts & Risk Advisory",
  },
  {
    rating: 5,
    feedback:
      "Their end-to-end legal advisory, spanning documentation, compliance, and intellectual property, has been critical in supporting our business objectives.",
    author: "Henkel International Lubricant Industry",
    caseType: "End-to-End Legal Advisory",
  },
];

const formBackgroundImage = "/assets/img/shape/testimonials-v1-shape1.png";  // Replace with the actual path to your background image
const formActionUrl = "/submit-form";  // Replace with your actual form action URL

export default function Testimonial() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    query: "YOUR QUERY*",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Start Testimonials One */}
      <section className="testimonials-one">
        <div className="shape1">
          <img src={formBackgroundImage} alt="" />
        </div>
        <div className="container">
          <div className="row">
            {/* Start Testimonials One Form */}
            <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="testimonials-one__form">
                <div
                  className="testimonials-one__form-bg"
                  style={{ backgroundImage: `url(${formBackgroundImage})` }}
                ></div>
                <div className="title-box">
                  <h2>Free Appointment</h2>
                </div>
                <form method="post" action={formActionUrl} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="icon-box"><span className="icon-icon-17"></span></div>
                    <input
                      type="text"
                      name="username"
                      placeholder="YOUR NAME*"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="icon-box"><span className="icon-icon-18"></span></div>
                    <input
                      type="email"
                      placeholder="YOUR EMAIL*"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="select-box">
                      <select
                        className="selectmenu wide"
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                      >
                        <option value="YOUR QUERY*">YOUR QUERY*</option>
                        <option value="DIFC Services">DIFC Services</option>
                        <option value="Commercial & Corporate">Commercial & Corporate</option>
                        <option value="Arbitration">Arbitration</option>
                        <option value="Employment & Labor">Employment & Labor</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="icon-box"><span className="icon-icon-19"></span></div>
                    <textarea
                      name="message"
                      placeholder="MESSAGE HERE*"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="button-box">
                        <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                          Send Request
                          <span className="thm-btn__icon">
                            <i className="icon-icon-8"></i>
                          </span>
                          <span className="thm-btn__hover-group">
                            <span className="thm-btn__hover thm-btn__hover--1"></span>
                            <span className="thm-btn__hover thm-btn__hover--2"></span>
                            <span className="thm-btn__hover thm-btn__hover--3"></span>
                            <span className="thm-btn__hover thm-btn__hover--4"></span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End Testimonials One Form */}

            {/* Start Testimonials One Content */}
            <div className="col-xl-8">
              <div className="testimonials-one__content">
                <div className="sec-title text-center">
                  <div className="sub-title center">
                    <div className="icon">
                      <img src="assets/img/icon/sec-title-img1.png" alt="Icon" />
                    </div>
                    <div className="text">
                      <p>Our Testimonials</p>
                    </div>
                  </div>
                  <h2>Clients Feedback</h2>
                </div>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 0 },
                    375: { slidesPerView: 1, spaceBetween: 30 },
                    575: { slidesPerView: 1, spaceBetween: 0 },
                    768: { slidesPerView: 1, spaceBetween: 0 },
                    992: { slidesPerView: 1, spaceBetween: 0 },
                    1200: { slidesPerView: 1, spaceBetween: 0 },
                  }}
                >
                  {testimonials.length > 0 ? (
                    testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="testimonials-one__single">
                          <div className="testimonials-one__single-inner">
                            <div className="icon-box">
                              <span className="icon-icon-20"></span>
                            </div>
                            <div className="content-box">
                              <div className="rating-box">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <i className="icon-icon-21" key={i}></i>
                                ))}
                              </div>
                              <h2>{testimonial.feedback}</h2>
                              <div className="author-box">
                                <h3>{testimonial.author}</h3>
                                <p>{testimonial.caseType}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <div>No testimonials available</div>
                  )}
                </Swiper>
              </div>
            </div>
            {/* End Testimonials One Content */}
          </div>
        </div>
      </section>
      {/* End Testimonials One */}
    </>
  );
}
