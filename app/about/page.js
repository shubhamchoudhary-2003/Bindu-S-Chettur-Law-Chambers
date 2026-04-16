"use client";
import { useState } from "react";
import CaseOne from "@/components/common/CaseOne";
import CounterOne from "@/components/common/CounterOne";
import TeamOne from "@/components/common/TeamOne";
import TestimonialsTwo from "@/components/slider/TestimonialsTwo";
import CountUp from "react-countup";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Layout breadcrumbTitle="About US">
        <div>
          {/* Start About Three */}
          <section className="about-three">
            <div className="container">
              <div className="row">
                {/* Start About Three Img */}
                <div className="col-xl-6">
                  <div className="about-three__img">
                    <div className="about-three__img-inner">
                      <img
                        src="/assets/img/about/about-v3-img1.jpg"
                        alt="About Image"
                      />

                      <div className="overlay-content">
                        <div className="counter-box">
                          <h2 className="count">
                            <CountUp end={24} />
                          </h2>
                        </div>
                        <div className="text-box">
                          <h3>
                            years of <br /> experience
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End About Three Img */}

                {/* Start About Three Content */}
                <div className="col-xl-6">
                  <div className="about-three__content">
                    <div className="sec-title">
                      <div className="sub-title">
                        <div className="icon">
                          <img
                            src="/assets/img/icon/sec-title-img1.png"
                            alt="Section Title Icon"
                          />
                        </div>
                        <div className="text">
                          <p>Bindu S. Chettur Law Chambers</p>
                        </div>
                      </div>
                      <h2>
                        Efficient & Result <br /> Oriented Legal Advisory
                      </h2>
                    </div>

                    <div className="about-three__content-text">
                      <p>
                        After three decades across jurisdictions and
                        cross-border matters, our Founder Adv. Bindu Chettur
                        believes businesses today need more than legal
                        advice—they need legal strategy and foresight. With this
                        conviction, she launched Bindu S Chettur Law Chambers of
                        Chanakyatse Group.
                      </p>
                      {isExpanded && (
                        <>
                          <p>
                            Built on Chanakyatse Consultancy&apos;s cross-border
                            expertise, the chamber is a dedicated, full-spectrum
                            legal platform serving businesses with depth,
                            precision, and focus.
                          </p>
                          <p>
                            From corporate structuring and compliance to
                            intellectual property, documentation, and strategic
                            counsel, we deliver integrated, end-to-end legal
                            solutions aligned with business realities.
                          </p>
                          <p>
                            Having advised corporates, institutions, and
                            individuals across the UAE, India, and international
                            markets for 30 years, Adv. Bindu has seen firsthand
                            the value of clarity, foresight, and strong legal
                            foundations.
                          </p>
                          <p>
                            This is not just an entity—it is a commitment to
                            elevating how legal services are delivered to modern
                            enterprises. We partner with businesses that value
                            precision, strategy, and long-term vision.
                          </p>
                          <p>
                            <strong>
                              Comprehensive Law. Strategic Advantage.
                            </strong>
                          </p>
                        </>
                      )}
                      <button
                        type="button"
                        onClick={() => setIsExpanded(!isExpanded)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#c9a876",
                          fontWeight: 600,
                          cursor: "pointer",
                          padding: 0,
                          marginTop: "8px",
                          textDecoration: "underline",
                        }}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>

                    <div className="about-three__content-list">
                      <ul>
                        <li>
                          <h3>
                            <span className="icon-icon-16"></span> Cross-border
                            expertise across UAE and India
                          </h3>
                        </li>
                        <li>
                          <h3>
                            <span className="icon-icon-16"></span> Rights of
                            Audience & Representation before DIFC and ADGM
                            Courts
                          </h3>
                        </li>
                        <li>
                          <h3>
                            <span className="icon-icon-16"></span> Landmark
                            victory in Sharjah Court for 17 Indian nationals
                          </h3>
                        </li>
                        <li>
                          <h3>
                            <span className="icon-icon-16"></span> Registered
                            DIFC Wills Draftsman
                          </h3>
                        </li>
                        <li>
                          <h3>
                            <span className="icon-icon-16"></span> Senior
                            Empanelled Counsel to the Indian Embassy & Consulate
                          </h3>
                        </li>
                      </ul>
                    </div>

                    <div className="about-three__content-btn">
                      <a className="thm-btn" href="#">
                        schedule consultation
                        <span className="thm-btn__icon">
                          <i className="icon-icon-8"></i>
                        </span>
                        <span className="thm-btn__hover-group">
                          <span className="thm-btn__hover thm-btn__hover--1"></span>
                          <span className="thm-btn__hover thm-btn__hover--2"></span>
                          <span className="thm-btn__hover thm-btn__hover--3"></span>
                          <span className="thm-btn__hover thm-btn__hover--4"></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End About Three Content */}
              </div>
            </div>
          </section>
          {/* End About Three */}
          {/* Start Company History */}
          <section className="company-history">
            <div className="container">
              <div className="border-box"></div>
              <div className="sec-title text-center">
                <div className="sub-title center">
                  <div className="icon">
                    <img
                      src="/assets/img/icon/sec-title-img1.png"
                      alt="Section Title Icon"
                    />
                  </div>
                  <div className="text">
                    <p>our journey</p>
                  </div>
                </div>
                <h2>milestones & achievements</h2>
              </div>

              <div className="bsc-timeline">
                <div className="bsc-timeline__rail" />
                {[
                  {
                    year: "1992",
                    title: "Began Practice",
                    text: "Lawyer for Panchayats, semi-government and government bodies. Started practice with a drive to create impact across civil and criminal matters.",
                  },
                  {
                    year: "1999",
                    title: "UAE Career Begins",
                    text: "Joined Mohamed Salman Advocate and Legal Consultants as a Legal Consultant, marking the start of a cross-border career.",
                  },
                  {
                    year: "2002",
                    title: "Invoking Indian Law in the UAE",
                    text: "Among the first Indian lawyers to invoke Indian law in personal matters within the UAE jurisdiction.",
                  },
                  {
                    year: "2003",
                    title: "Indian Consulate & Embassy Panel",
                    text: "Appointed to the panel of the Indian Consulate and Embassy, serving the Indian community in the UAE.",
                  },
                  {
                    year: "2004",
                    title: "Interpol Cross-Border Suits",
                    text: "Commenced handling Interpol criminal matters and complex cross-border litigation.",
                  },
                  {
                    year: "2007",
                    title: "Top Airline Pilot Acquittal",
                    text: "Secured a landmark acquittal for a top airline pilot in a high-profile proceeding.",
                  },
                  {
                    year: "2008",
                    title: "Arbitration Practice Established",
                    text: "Began dedicated arbitration practice during the recession, with a focus on real estate disputes.",
                  },
                  {
                    year: "2009",
                    title: "High-Profile Rape & Murder Acquittal",
                    text: "Achieved acquittal in a widely reported rape and murder case.",
                  },
                  {
                    year: "2010",
                    title:
                      "Seventeen Indian Nationals — Death Penalty Acquittal",
                    text: "Represented and secured acquittals for 17 Indian nationals facing the death penalty in Sharjah.",
                  },
                  {
                    year: "2015",
                    title: "First Female Board Member — IBPC",
                    text: "Became the first female Board Member of the Indian Business & Professional Council.",
                  },
                  {
                    year: "2015",
                    title: "Chanakyatse Consultancy — UAE & India",
                    text: "Founded Chanakyatse Consultancy, a comprehensive end-to-end management consultancy operating in the UAE and India.",
                  },
                  {
                    year: "2017",
                    title: "First & Only Lady President — IBPC",
                    text: "Elected the first and only woman President of the Indian Business & Professional Council.",
                  },
                  {
                    year: "2017",
                    title: "Speaker — Pravasi Bhartiya Divas",
                    text: "Invited as a Speaker at Pravasi Bhartiya Divas, addressing the global Indian diaspora.",
                  },
                  {
                    year: "2018",
                    title: "WEA & WISE Launched",
                    text: "Founded WEA and Women Inspired Sustainable Empowerment (WISE) to champion women in enterprise and leadership.",
                  },
                  {
                    year: "2020",
                    title: "AED 500 Million Arbitration",
                    text: "Successfully conducted and represented parties in an AED 500 million arbitration.",
                  },
                  {
                    year: "2022",
                    title: "High-Stake ADGM Litigation",
                    text: "Successfully conducted and represented in a high-stake litigation matter before the ADGM Courts.",
                  },
                  {
                    year: "2023",
                    title: "Chemical Industry Acquisition — UAE",
                    text: "Conducted, led and managed the successful high-stake acquisition of a chemical industry company in the UAE.",
                  },
                  {
                    year: "2025",
                    title: "Gulf Business — Icons of Business, Top 100 Indians",
                    text: "Recognised among Gulf Business Top 100 Indians 2025 — visionaries whose innovation and leadership continue to define the business landscape across economic contribution, influence, expansion, and community impact.",
                  },
                  {
                    year: "2026",
                    title: "Bindu S. Chettur Law Chambers of Chanakyatse Group",
                    text: "Establishment of Bindu S. Chettur Law Chambers of Chanakyatse Group, consolidating three decades of practice under a unified firm.",
                  },
                ].map((item, idx) => (
                  <div
                    key={`${item.year}-${idx}`}
                    className={`bsc-timeline__item ${idx % 2 === 0 ? "is-left" : "is-right"}`}
                  >
                    <div className="bsc-timeline__dot" />
                    <div className="bsc-timeline__card">
                      <div className="date-box">{item.year}</div>
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <style jsx>{`
              .bsc-timeline {
                position: relative;
                padding: 40px 0 10px;
                max-width: 1100px;
                margin: 0 auto;
              }
              .bsc-timeline__rail {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 50%;
                width: 2px;
                background: #e5ded2;
                transform: translateX(-50%);
              }
              .bsc-timeline__item {
                position: relative;
                width: 50%;
                padding: 0 40px 50px;
                box-sizing: border-box;
              }
              .bsc-timeline__item.is-left {
                margin-left: 0;
                text-align: right;
              }
              .bsc-timeline__item.is-right {
                margin-left: 50%;
                text-align: left;
              }
              .bsc-timeline__dot {
                position: absolute;
                top: 18px;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: var(--thm-primary);
                box-shadow:
                  0 0 0 4px #fff,
                  0 0 0 5px #e5ded2;
              }
              .bsc-timeline__item.is-left .bsc-timeline__dot {
                right: -7px;
              }
              .bsc-timeline__item.is-right .bsc-timeline__dot {
                left: -7px;
              }
              .bsc-timeline__card {
                position: relative;
                display: inline-block;
                background: #fff;
                border: 1px solid #eee3cf;
                padding: 26px 28px;
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
                max-width: 460px;
              }
              .bsc-timeline__item.is-left .bsc-timeline__card {
                text-align: left;
              }
              .bsc-timeline__card .date-box {
                margin: 0 0 14px;
              }
              .bsc-timeline__card h2 {
                font-size: 22px;
                line-height: 30px;
                font-weight: 400;
                text-transform: capitalize;
                margin-bottom: 10px;
              }
              .bsc-timeline__card p {
                margin: 0;
              }
              @media (max-width: 768px) {
                .bsc-timeline__rail {
                  left: 18px;
                  transform: none;
                }
                .bsc-timeline__item,
                .bsc-timeline__item.is-left,
                .bsc-timeline__item.is-right {
                  width: 100%;
                  margin-left: 0;
                  padding: 0 0 40px 46px;
                  text-align: left;
                }
                .bsc-timeline__item.is-left .bsc-timeline__card,
                .bsc-timeline__item.is-right .bsc-timeline__card {
                  text-align: left;
                }
                .bsc-timeline__item.is-left .bsc-timeline__dot,
                .bsc-timeline__item.is-right .bsc-timeline__dot {
                  left: 11px;
                  right: auto;
                }
              }
            `}</style>
          </section>
          {/* End Company History */}
          <CaseOne />
          <CounterOne />
          <TestimonialsTwo />
          <TeamOne
            className="team-one team-one--about"
            sectionTitle="Our Legal Team"
            subTitle="Meet Our Experts"
            teamData={[
              {
                name: "Adv. Bindu S. Chettur",
                position: "Founder & Managing Director",
                image: "/assets/img/team/team-v1-img1.png",
                social: [
                  {
                    url: "https://www.facebook.com/p/Advocate-Bindu-S-Chettur-Associates-100080249942973/",
                    iconClass: "icon-icon-4",
                  },
                  {
                    url: "https://www.instagram.com/advocate_binduschettur/",
                    iconClass: "icon-icon-3",
                  },
                  {
                    url: "https://www.linkedin.com/in/adv-bindu-s-chettur-473b4384/",
                    iconClass: "icon-icon-2",
                  },
                ],
              },
              {
                name: "Adv. Ashwin Chaturvedi",
                position: "Lawyer & Head of Business Strategy",
                image: "/client/Ashwin Professional Photo.jpg",
                social: [
                  { url: "#", iconClass: "icon-icon-4" },
                  { url: "#", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                ],
              },
              {
                name: "Adv. Amjith M Anandhan",
                position: "Senior Legal Associate",
                image: "/assets/img/team/team-v1-img3.png",
                social: [
                  { url: "#", iconClass: "icon-icon-4" },
                  { url: "#", iconClass: "icon-icon-3" },
                  { url: "#", iconClass: "icon-icon-2" },
                ],
              },
            ]}
          />
        </div>
      </Layout>
    </>
  );
}
