'use client';
import CaseOne from "@/components/common/CaseOne"
import CounterOne from "@/components/common/CounterOne"
import TeamOne from "@/components/common/TeamOne"
import TestimonialsTwo from "@/components/slider/TestimonialsTwo"
import CountUp from 'react-countup';
import Layout from "@/components/layout/Layout"



export default function Home() {

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
                                        <img src="/assets/img/about/about-v3-img1.jpg" alt="About Image" />

                                        <div className="overlay-content">
                                            <div className="counter-box">
                                                <h2 className="count">
                                                    <CountUp end={24} />
                                                </h2>
                                            </div>
                                            <div className="text-box">
                                                <h3>years of <br /> experience</h3>
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
                                                <img src="/assets/img/icon/sec-title-img1.png" alt="Section Title Icon" />
                                            </div>
                                            <div className="text">
                                                <p>Bindu S. Chettur Law Chambers</p>
                                            </div>
                                        </div>
                                        <h2>Personalised & Result <br /> Oriented Legal Advisory</h2>
                                    </div>

                                    <div className="about-three__content-text">
                                        <p>Advocate Bindu S. Chettur is the Founder and Managing Director of Chanakyatse Consultancy, a comprehensive end-to-end management consultancy firm operating in the UAE and India. She holds the position of Senior Associate at Mohamed Salman Advocate & Legal Consultants in Dubai. With over 32 years of distinctive experience spanning the Asia-Pacific and the Middle East, she served as a senior lawyer at the Indian Consulate, Dubai, for more than two decades.</p>
                                    </div>

                                    <div className="about-three__content-list">
                                        <ul>
                                            <li>
                                                <h3><span className="icon-icon-16"></span> Cross-border expertise across UAE and India</h3>
                                            </li>
                                            <li>
                                                <h3><span className="icon-icon-16"></span> Audience rights in DIFC and ADGM Courts</h3>
                                            </li>
                                            <li>
                                                <h3><span className="icon-icon-16"></span> Landmark victory in Sharjah Court for 17 Indian nationals</h3>
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
                                    <img src="/assets/img/icon/sec-title-img1.png" alt="Section Title Icon" />
                                </div>
                                <div className="text">
                                    <p>our journey</p>
                                </div>
                            </div>
                            <h2>milestones & achievements</h2>
                        </div>
                        <div className="row">
                            {/* Start Company History Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="company-history__single text-center">
                                    <div className="company-history__single-content">
                                        <h2>began practice</h2>
                                        <p>Started legal career with focus <br /> on cross-border law across <br />
                                            Asia-Pacific region</p>
                                        <div className="date-box">
                                            1992
                                        </div>
                                    </div>
                                    <div className="company-history__single-img">
                                        <img src="/assets/img/resource/company-history-img1.jpg" alt="Start Journey" />
                                    </div>
                                </div>
                            </div>
                            {/* End Company History Single */}

                            {/* Start Company History Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="company-history__single style2 text-center">
                                    <div className="company-history__single-img">
                                        <img src="/assets/img/resource/company-history-img2.jpg" alt="Firm of the Year" />
                                    </div>
                                    <div className="company-history__single-content">
                                        <div className="date-box">
                                            2002
                                        </div>
                                        <h2>Indian Consulate</h2>
                                        <p>Appointed senior lawyer at the <br /> Indian Consulate in Dubai, <br />
                                            serving for over two decades</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Company History Single */}

                            {/* Start Company History Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="company-history__single text-center">
                                    <div className="company-history__single-content">
                                        <h2>Landmark Victory</h2>
                                        <p>Secured acquittals for 17 Indian <br /> nationals accused of murder <br />
                                            in Sharjah Court</p>
                                        <div className="date-box">
                                            2017
                                        </div>
                                    </div>
                                    <div className="company-history__single-img">
                                        <img src="/assets/img/resource/company-history-img3.jpg" alt="Open Branch" />
                                    </div>
                                </div>
                            </div>
                            {/* End Company History Single */}

                            {/* Start Company History Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="company-history__single style2 text-center">
                                    <div className="company-history__single-img">
                                        <img src="/assets/img/resource/company-history-img4.jpg" alt="Global Awards" />
                                    </div>
                                    <div className="company-history__single-content">
                                        <div className="date-box">
                                            2020
                                        </div>
                                        <h2>Chanakyatse Founded</h2>
                                        <p>Founded Chanakyatse Consultancy, <br /> comprehensive management <br />
                                            consultancy in UAE & India</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Company History Single */}
                        </div>
                    </div>
                </section>
                {/* End Company History */}
                <CaseOne/>
                <CounterOne/>
                <TestimonialsTwo/>
                <TeamOne
                    className="team-one team-one--about"
                    sectionTitle="Our Legal Team"
                    subTitle="Meet Our Experts"
                    teamData={[
                        {
                        name: 'Adv. Bindu S. Chettur',
                        position: 'Founder & Managing Director',
                        image: '/assets/img/team/team-v1-img1.png',
                        social: [
                            { url: 'https://www.facebook.com/p/Advocate-Bindu-S-Chettur-Associates-100080249942973/', iconClass: 'icon-icon-4' },
                            { url: 'https://www.instagram.com/advocate_binduschettur/', iconClass: 'icon-icon-3' },
                            { url: 'https://www.linkedin.com/in/adv-bindu-s-chettur-473b4384/', iconClass: 'icon-icon-2' },
                        ]
                        },
                        {
                        name: 'Ashwin Chaturvedi',
                        position: 'Lawyer & Head of Business Strategy',
                        image: '/assets/img/team/team-v1-img2.png',
                        social: [
                            { url: '#', iconClass: 'icon-icon-4' },
                            { url: '#', iconClass: 'icon-icon-3' },
                            { url: '#', iconClass: 'icon-icon-2' },
                        ]
                        },
                        {
                        name: 'Adv. Amjith M Anandhan',
                        position: 'Senior Legal Associate',
                        image: '/assets/img/team/team-v1-img3.png',
                        social: [
                            { url: '#', iconClass: 'icon-icon-4' },
                            { url: '#', iconClass: 'icon-icon-3' },
                            { url: '#', iconClass: 'icon-icon-2' },
                        ]
                        }
                    ]}
                />

                </div>
            </Layout>
        </>
    )
}