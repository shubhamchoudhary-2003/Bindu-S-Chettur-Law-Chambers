"use client"; // Add this line at the top

import Link from "next/link";
import { useState } from "react";

export default function Banner() {
  // State for dynamic data (e.g., dynamic images or text)
  const [bannerContent, setBannerContent] = useState({
    description:
      "With over 32 years of distinctive experience spanning the Asia-Pacific and the Middle East, we provide comprehensive corporate advisory and legal support tailored to your business needs.",
    socialLinks: [
      {
        icon: "icon-icon-4",
        url: "https://x.com/bsc_lawchambers",
      },
      {
        icon: "icon-icon-3",
        url: "https://www.instagram.com/binduschettur_lawchambers?igsh=b3I3MmlvdHcxamNt",
      },
      {
        icon: "icon-icon-2",
        url: "https://www.linkedin.com/company/bindu-s-chettur-law-chambers-of-chanakyatse-group/",
      },
    ],
    backgroundImage: "/assets/img/pattern/banner-v1-pattern.png",
    bannerImage: "/assets/img/background/banner-v1-bg.jpg",
  });

  return (
    <>
      {/* Start Banner One */}
      <section className="banner-one">
        <div className="banner-one__img" style={{ minHeight: '720px' }}>
          <div
            className="banner-one__img-bg"
            style={{ backgroundImage: `url(${bannerContent.bannerImage})` }}
          ></div>
        </div>
        <div className="banner-one__content">
          <div className="banner-one__social-links">
            <div className="banner-one__social-links-inner">
              {bannerContent.socialLinks.map((link, index) => (
                <Link href={link.url} key={index}>
                  <span className={link.icon}></span>
                </Link>
              ))}
            </div>
          </div>
          <div
            className="banner-one__content-pattern"
            style={{ backgroundImage: `url(${bannerContent.backgroundImage})` }}
          ></div>
          <div className="container">
            <div className="banner-one__content-inner">
              <div className="banner-one__content-left">
                <h2>
                  TRUSTED <br /> LEGAL SOLUTIONS
                </h2>
              </div>
              <div className="banner-one__content-right">
                <p>{bannerContent.description}</p>
                <div className="btn-box">
                  <Link href="#">
                    Learn More <span className="icon-icon-8"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner One */}
    </>
  );
}
