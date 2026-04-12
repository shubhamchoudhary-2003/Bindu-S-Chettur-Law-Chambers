"use client";

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import ServicesTwo from '@/components/common/ServicesTwo';
import AboutOne from '@/components/common/AboutOne';
import Layout from "@/components/layout/Layout";

const services = [
    {
        id: 1,
        imgSrc: '/assets/img/service/services-v2-img1.jpg',
        icon: 'icon-icon-30',
        title: 'DIFC Services',
        description: 'Specialized Dubai International Financial Centre guidance and representation',
        link: '/criminal-case'
    },
    {
        id: 2,
        imgSrc: '/assets/img/service/services-v2-img2.jpg',
        icon: 'icon-icon-31',
        title: 'Commercial & Corporate',
        description: 'Company establishment, free zones, offshore entities, cross-border transactions',
        link: '/family-violence'
    },
    {
        id: 3,
        imgSrc: '/assets/img/service/services-v2-img3.jpg',
        icon: 'icon-icon-32',
        title: 'Arbitration',
        description: 'Commercial institutional arbitrations, DIAC/DIFC-LCIA/LCIA procedures',
        link: '/business-law'
    },
    {
        id: 4,
        imgSrc: '/assets/img/service/services-v2-img4.jpg',
        icon: 'icon-icon-33',
        title: 'Employment & Labor',
        description: 'UAE mainland and free zones labor compliance and advisory',
        link: '/health-care'
    },
    {
        id: 5,
        imgSrc: '/assets/img/service/services-v2-img5.jpg',
        icon: 'icon-icon-38',
        title: 'Drafting & Agreements',
        description: 'Tailored contracts ensuring compliance and legal protection',
        link: '/insurance-law'
    },
    {
        id: 6,
        imgSrc: '/assets/img/service/services-v2-img6.jpg',
        icon: 'icon-icon-39',
        title: 'Legal Advisory',
        description: 'Practical guidance and in-depth legal analysis across jurisdictions',
        link: '/real-estate'
    }
];

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const sectionClassName = 'about-one';
    const content = {
        subtitle: 'Bindu S. Chettur Law Chambers',
        title: 'Personalised & Result Oriented Legal Advisory',
        text: 'As a highly skilled and experienced lawyer, I am dedicated to providing exceptional legal services to my clients. With a deep understanding of the legal system and a commitment to delivering results across UAE and India.',
        buttonText: 'Learn More',
        buttonLink: '/about',
        signature: 'Adv. Bindu S. Chettur, Founder'
    };
    const imageSrc = '/assets/img/about/about-v1-img1.jpg';
    const counterData = [
        {
            icon: 'icon-icon-13',
            count: 32,
            suffix: '+',
            text: 'Years of Service',
        },
        {
            icon: 'icon-icon-14',
            count: 5,
            suffix: 'k+',
            text: 'Satisfied Clients',
        },
        {
            icon: 'icon-icon-15',
            count: 50,
            suffix: '+',
            text: 'Legal Experts',
        },
    ];
    const dynamicClassName = 'services-two services-two--service';

    return (
        <>
            <Layout breadcrumbTitle="Services">
                <div>
                    <AboutOne
                        sectionClassName={sectionClassName}
                        content={content}
                        imageSrc={imageSrc}
                        counterData={counterData}
                    />
                    {/* Start Success One Content */}
                    <section className="success-one success-one--service">
                        <div className="shape1">
                            <img src="/assets/img/shape/success-v1-shape1.png" alt="Shape" />
                        </div>
                        <div className="container">
                            <div className="row">
                                {/* Start Success One Content */}
                                <div className="col-xl-5">
                                    <div className="success-one__content">
                                        <div className="sec-title">
                                            <div className="sub-title">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
                                                </div>
                                                <div className="text">
                                                    <p>Skill Percentage</p>
                                                </div>
                                            </div>
                                            <h2 className="">
                                                Delivering solutions <br />
                                                across borders
                                            </h2>
                                        </div>

                                        <div className="success-one__content-text">
                                            <p>
                                                Our team combines legal knowledge with innovative strategies to serve clients
                                                across the UAE and India with comprehensive solutions.
                                            </p>
                                        </div>

                                        <div className="success-one__progress">
                                            <div className="success-one__progress-single">
                                                <div className="title">
                                                    <p>Corporate & Commercial</p>
                                                </div>
                                                <div className="bar">
                                                    <div className="bar-inner-one count-bar" data-percent="90%">
                                                        <div className="count-text">90%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="success-one__progress-single">
                                                <div className="title">
                                                    <p>Arbitration & Dispute</p>
                                                </div>
                                                <div className="bar">
                                                    <div className="bar-inner-two count-bar" data-percent="80%">
                                                        <div className="count-text">80%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="success-one__progress-single mb0">
                                                <div className="title">
                                                    <p>DIFC & ADGM Services</p>
                                                </div>
                                                <div className="bar">
                                                    <div className="bar-inner-three count-bar" data-percent="90%">
                                                        <div className="count-text">90%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Success One Content */}

                                {/* Start Success One Img */}
                                <div className="col-xl-7">
                                    <div className="success-one__img clearfix">
                                        <img src="/assets/img/resource/success-v1-img1.jpg" alt="Success Image" />
                                    </div>
                                </div>
                                {/* End Success One Img */}
                            </div>
                        </div>
                    </section>
                    {/* End Success One Content */}

                    <section className={dynamicClassName}>
                        <ServicesTwo services={services} />
                    </section>

                    {/* Start Video One */}
                    <section className="video-one">
                        <div className="video-one__bg" style={{ backgroundImage: 'url(/assets/img/background/video-v1-bg.jpg)' }}></div>
                        <div className="container">
                            <div className="video-one__inner">
                                <div className="video-one__video-btn">
                                    <button 
                                        className="video-one__icon video-popup" 
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <span className="icon-icon-40"></span>
                                    </button>
                                </div>
                                <div className="title-box text-center">
                                    <p>intro video</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Video One */}
                </div>

                {/* ModalVideo component initialization */}
                <ModalVideo
                    channel='youtube'
                    isOpen={isOpen}
                    videoId='pVE92TNDwUk'
                    onClose={() => setIsOpen(false)}
                />
            </Layout>
        </>
    );
}
