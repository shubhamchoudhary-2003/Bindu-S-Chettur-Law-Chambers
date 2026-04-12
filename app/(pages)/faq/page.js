'use client'
import Link from "next/link"
import TestimonialOne from "@/components/slider/TestimonialOne";
import Layout from "@/components/layout/Layout"
import { useState } from 'react'

export default function Home() {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Dynamic FAQ data
    const faqData = [
        {
            id: 1,
            question: "What areas of law does your firm specialize in?",
            answer: "We specialize in DIFC Services, Commercial & Corporate law, Arbitration, Employment & Labor law, Drafting & Agreements, and Legal Advisory. Our expertise spans mainland UAE law with audience rights in DIFC and ADGM Courts, as well as cross-border matters between UAE and India."
        },
        {
            id: 2,
            question: "Do you handle cross-border legal matters between UAE and India?",
            answer: "Yes, with over 32 years of experience spanning the Asia-Pacific and Middle East, we are uniquely positioned to handle cross-border legal matters. Our firm operates in both UAE and India through Chanakyatse Consultancy, providing seamless legal support across jurisdictions."
        },
        {
            id: 3,
            question: "What should I bring to the initial consultation?",
            answer: "Please bring all relevant documents related to your matter, including contracts, correspondence, court documents, and any other supporting materials. Having a clear summary of your situation and key dates will help us provide more focused advice during the consultation."
        },
        {
            id: 4,
            question: "Do you offer services in the DIFC and ADGM Courts?",
            answer: "Yes, Advocate Bindu S. Chettur holds audience rights in both DIFC and ADGM Courts. We provide specialized guidance for matters within the Dubai International Financial Centre and Abu Dhabi Global Market jurisdictions."
        },
        {
            id: 5,
            question: "Can you register wills within the DIFC Wills and Probate Registry?",
            answer: "Yes, Adv. Bindu is one of the very few and oldest Indian lawyers registered as a Will Draftsman with the DIFC Wills and Probate Registry. Our team is fully equipped to assist with the drafting, registration, and overall management of wills within the DIFC framework, ensuring your assets and interests are protected in accordance with the applicable laws."
        },
        {
            id: 6,
            question: "Can you assist with business setup and corporate structuring in UAE?",
            answer: "Absolutely. We assist with company establishment across mainland UAE, free zones, and offshore entities. Our services include corporate structuring, compliance advisory, and cross-border transaction support to ensure seamless business operations."
        },
        {
            id: 7,
            question: "Do you provide pro bono legal services?",
            answer: "Yes, since 2002, Advocate Bindu S. Chettur has provided pro-bono legal counsel to distressed expatriate Indians as a panel lawyer. She currently serves as the senior-most panel lawyer at Pravasi Bharatiya Sahaya Kendra (PBSK), operating under India's Ministry of External Affairs."
        },
        {
            id: 8,
            question: "What is your approach to dispute resolution?",
            answer: "We offer comprehensive dispute resolution services including litigation, mediation, and arbitration. As appointed arbitrators with DIAC, DIFC-LCIA, and LCIA, we tailor our approach to each case, always aiming for the most effective and efficient resolution for our clients."
        },
        {
            id: 9,
            question: "How can I schedule a consultation?",
            answer: "You can schedule a consultation by calling us at +971 54 477 8569, emailing advocatebschettur@gmail.com, or by filling out the contact form on our website. Our office hours are Monday to Friday, 9:00 AM to 5:00 PM. We are located at #301, Al Serkal 2, Port Saeed Road, Deira, Dubai."
        }
    ];

    const blogData = [
        {
          id: 1,
          date: '15',
          month: 'Mar',
          category: 'corporate law',
          comments: '(02) Comment',
          imageSrc: '/assets/img/blog/blog-v2-img1.jpg',
          author: 'by Adv. Bindu S. Chettur',
          title: 'Navigating DIFC regulations for cross-border businesses in the UAE',
          link: '/blog-details',
        },
        {
          id: 2,
          date: '22',
          month: 'Feb',
          category: 'employment',
          comments: '(02) Comment',
          imageSrc: '/assets/img/blog/blog-v2-img2.jpg',
          author: 'by Adv. Bindu S. Chettur',
          title: 'Key changes in UAE labor law every employer should know about',
          link: '/blog-details',
        },
        {
          id: 3,
          date: '10',
          month: 'Jan',
          category: 'arbitration',
          comments: '(02) Comment',
          imageSrc: '/assets/img/blog/blog-v2-img3.jpg',
          author: 'by Adv. Bindu S. Chettur',
          title: 'Understanding commercial arbitration procedures in DIAC and DIFC-LCIA',
          link: '/blog-details',
        },
      ];
      
    return (
        <Layout breadcrumbTitle="essential FAQ">
            <section className="faq-page">
                <div className="container">
                    <div className="faq-page__inner">
                        <div className="sec-title">
                            <div className="sub-title">
                                <div className="icon">
                                    <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
                                </div>
                                <div className="text">
                                    <p>Bindu S. Chettur Law Chambers</p>
                                </div>
                            </div>
                            <h2>Every general question is listed here</h2>
                        </div>

                        <ul className="accrodion-grp faq-one__accrodion">
                            {faqData.map((faq, index) => (
                                <li
                                    className={`accrodion ${activeFaq === index ? 'active' : ''}`}
                                    key={index}
                                >
                                    <div
                                        className="accrodion-title"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <h3>{faq.question}</h3>
                                    </div>
                                    {activeFaq === index && (
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <TestimonialOne />
            <section className="blog-two blog-two--faq">
                <div className="container">
                    <div className="sec-title text-center">
                    <div className="sub-title center">
                        <div className="icon">
                        <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
                        </div>
                        <div className="text">
                        <p>latest insights</p>
                        </div>
                    </div>
                    <h2>legal news & articles</h2>
                    </div>
                    <div className="row">
                    {blogData.map((blog) => (
                        <div key={blog.id} className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-two__single">
                            <div className="blog-two__single-top">
                            <div className="date-box">
                                <h2>{blog.date}</h2>
                                <p>{blog.month}</p>
                            </div>

                            <div className="meta-box">
                                <ul>
                                <li>
                                    <Link legacyBehavior href="#">
                                        <a><span className="icon-icon-23"></span> {blog.category}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="#">
                                        <a><span className="icon-icon-19"></span> {blog.comments}</a>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>

                            <div className="blog-two__single-img">
                            <div className="inner">
                                <img src={blog.imageSrc} alt="Blog Image" />
                            </div>
                            </div>

                            <div className="blog-two__single-content">
                            <div className="meta-box2">
                                <ul>
                                <li>
                                    <Link legacyBehavior href="#">
                                        <a><span className="icon-icon-36"></span> {blog.author}</a>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            <h2>
                                <Link legacyBehavior href={blog.link}>
                                    <a>{blog.title}</a>
                                </Link>
                            </h2>

                            <div className="btn-box">
                                <Link legacyBehavior href={blog.link}>
                                    <a>read More <span className="icon-icon-8"></span></a>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
            
        </Layout>
    );
}
