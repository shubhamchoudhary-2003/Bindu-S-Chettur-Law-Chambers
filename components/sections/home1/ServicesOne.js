"use client"; // Ensures the component runs on the client side

import Link from "next/link";
import { useState } from "react";

export default function ServicesOne() {
  // State for dynamic data (e.g., dynamic images, text, links)
  const [servicesContent, setServicesContent] = useState({
    backgroundImage: "/assets/img/background/services-v1-bg.jpg",
    sectionTitleIcon: "/assets/img/icon/sec-title-img1.png",
    sectionTitleText: "our practice areas",
    sectionMainTitle: "Comprehensive legal and business solutions",
    services: [
      {
        id: 1,
        title: "DIFC Services",
        description: "Specialized Dubai International Financial Centre guidance",
        link: "criminal-case",
      },
      {
        id: 2,
        title: "Commercial & Corporate",
        description: "Company establishment, free zones, cross-border transactions",
        link: "family-violence",
      },
      {
        id: 3,
        title: "Arbitration",
        description: "Commercial institutional arbitrations, DIAC/DIFC-LCIA procedures",
        link: "business-law",
      },
      {
        id: 4,
        title: "Employment & Labor",
        description: "UAE mainland and free zones labor compliance",
        link: "health-care",
      },
    ],
  });

  return (
    <>
      {/* Start Services One */}
      <section className="services-one">
        <div
          className="services-one__bg wow fadeInRight"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
          style={{ backgroundImage: `url(${servicesContent.backgroundImage})` }}
        ></div>
        <div className="container">
          <div className="services-one__content">
            <div className="sec-title">
              <div className="sub-title">
                <div className="icon">
                  <img src={servicesContent.sectionTitleIcon} alt="Section Icon" />
                </div>
                <div className="text">
                  <p>{servicesContent.sectionTitleText}</p>
                </div>
              </div>
              <h2>{servicesContent.sectionMainTitle}</h2>
            </div>

            <ul className="services-one__content-list">
              {servicesContent.services.map((service) => (
                <li key={service.id}>
                  <div className="content-box">
                    <div className="count-box">
                      <h2>{service.id.toString().padStart(2, "0")}/</h2>
                    </div>
                    <div className="text-box">
                      <h2>
                        <Link href={service.link}>{service.title}</Link>
                      </h2>
                      <p>{service.description}</p>
                    </div>
                  </div>

                  <div className="btn-box">
                    <Link href={service.link}>
                      read More <span className="icon-icon-8"></span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* End Services One */}
    </>
  );
}
