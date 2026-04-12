"use client";

import Link from 'next/link';

const services = [
  { href: "/criminal-case", text: "DIFC Services" },
  { href: "/family-violence", text: "Commercial & Corporate" },
  { href: "/business-law", text: "Arbitration" },
  { href: "/health-care", text: "Employment & Labor" },
  { href: "/insurance-law", text: "Drafting & Agreements" },
  { href: "/real-estate", text: "Legal Advisory" }
];

const socialLinks = [
  { href: "https://www.facebook.com/p/Advocate-Bindu-S-Chettur-Associates-100080249942973/", iconClass: "icon-icon-4" },
  { href: "https://www.instagram.com/advocate_binduschettur/", iconClass: "icon-icon-3" },
  { href: "https://www.linkedin.com/in/adv-bindu-s-chettur-473b4384/", iconClass: "icon-icon-2" },
];

export default function Footer1() {
  return (
    <>
      {/* Start Footer One */}
      <footer className="footer-one">
        {/* Start Footer Main */}
        <div className="footer-main">
          <div className="footer-one__top">
            <div className="container">
              <div className="footer-one__top-inner">
                <div className="footer-one__top-text">
                  <h2>Cross Border <br /> Legal Expertise</h2>
                </div>

                <div className="footer-one__top-brand">
                  <ul>
                    {[
                      "/assets/img/footer/footer-v1-brand1.png",
                      "/assets/img/footer/footer-v1-brand2.png",
                      "/assets/img/footer/footer-v1-brand3.png",
                      "/assets/img/footer/footer-v1-brand4.png",
                      "/assets/img/footer/footer-v1-brand5.png"
                    ].map((src, index) => (
                      <li key={index}>
                        <div className="img-box">
                          <img src={src} alt={`Partner ${index + 1}`} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-one__bottom">
            <div className="container">
              <div className="row">
                {/* Start Single Footer Widget */}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
                  <div className="single-footer-widget footer-widget__about">
                    <div className="logo-box">
                      <Link href="/">
                        <img src="/assets/img/resource/logo-2.png" alt="Bindu S. Chettur Law Chambers" style={{ maxHeight: '60px', width: 'auto' }} />
                      </Link>
                    </div>

                    <div className="footer-widget__about-inner">
                      <div className="text-box1">
                        <p>Comprehensive Corporate Advisory <br /> and Legal Support across UAE & India.</p>
                      </div>

                      <div className="text-box2">
                        <h3>Office Hours</h3>
                        <p>Monday To Friday: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}

                {/* Start Single Footer Widget */}
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="single-footer-widget footer-widget__contact">
                    <div className="title">
                      <h2>Contact Us</h2>
                    </div>

                    <div className="footer-widget__contact-list">
                      <ul>
                        <li>
                          <p className="text1"><span className="icon-icon-24"></span> Location</p>
                          <p className="text2">#301, Al Serkal 2, Port Saeed <br /> Road, Deira, Dubai</p>
                        </li>

                        <li>
                          <p className="text1"><span className="icon-icon-25"></span> Email Us</p>
                          <p className="text2">
                            <a href="mailto:advocatebschettur@gmail.com">advocatebschettur@gmail.com</a>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}

                {/* Start Single Footer Widget */}
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                  <div className="single-footer-widget footer-widget__service">
                    <div className="title">
                      <h2>Practice Areas</h2>
                    </div>

                    <div className="footer-widget__service-box">
                      <ul>
                        {services.map((service, index) => (
                          <li key={index}>
                            <Link href={service.href}>
                              <span className={`icon-icon-501`}></span>
                              {service.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}

                {/* Start Single Footer Widget */}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="single-footer-widget footer-widget__subscribe">
                    <div className="title">
                      <h2>Subscribe</h2>
                    </div>
                    <div className="footer-widget__subscribe-box">
                      <form className="footer-widget__subscribe-form">
                        <div className="input-box">
                          <input type="email" placeholder="YOUR EMAIL*" name="email" />
                          <button type="submit" className="footer-widget__subscribe-form-btn">
                            <i className="icon-icon-26"></i>
                          </button>
                        </div>
                        <div className="footer-one__checkbox">
                          <input type="checkbox" name="checkbox" id="checkbox1" />
                          <label htmlFor="checkbox1">
                            <span></span>I Agree to terms & Condition
                          </label>
                        </div>
                      </form>

                      <div className="footer-widget__subscribe-bottom">
                        <div className="title-box">
                          <h3>Follow</h3>
                        </div>
                        <div className="social-links">
                          {socialLinks.map((link, index) => (
                            <a key={index} href={link.href}>
                              <span className={link.iconClass}></span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Main */}

        {/* Start Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom__inner">
              <div className="footer-bottom__text">
                <p>
                  Copyright &copy; 2026 | All rights reserved by Bindu S. Chettur Law Chambers.
                </p>
              </div>

              <div className="footer-bottom__menu">
                <ul>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/about">Privacy Policy</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Bottom */}
      </footer>
      {/* End Footer One */}
    </>
  );
}
