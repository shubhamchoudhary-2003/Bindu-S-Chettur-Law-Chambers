import React from 'react';
import Layout from '@/components/layout/Layout';
import TestimonialsTwo from '@/components/slider/TestimonialsTwo';

// Example of dynamic data for the component
Home.defaultProps = {
    pricingPackages: [
      {
        title: 'Standard Consultation',
        price: 'Contact Us',
        iconClass: 'icon-icon-12',
        buttonText: 'get started',
        features: [
          'Initial Legal Consultation',
          'Legal Opinion & Advice',
          'Document Review',
          'Case Assessment',
          'Email Support',
        ],
      },
      {
        title: 'Business Retainer',
        price: 'Custom',
        iconClass: 'icon-icon-42',
        buttonText: 'get started',
        features: [
          '24/7 Legal Assistance',
          'Contract Drafting & Review',
          'Corporate Compliance',
          'Dispute Resolution Support',
          'Priority Response',
        ],
      },
      {
        title: 'Corporate Advisory',
        price: 'Custom',
        iconClass: 'icon-icon-43',
        buttonText: 'get started',
        features: [
          'Full Legal Retainership',
          'Cross-Border Advisory',
          'M&A Support',
          'DIFC & ADGM Representation',
          'Dedicated Legal Team',
        ],
      },
    ],
    whyChooseUs: {
      subtitle: 'why choose us',
      title: 'Trusted legal counsel across borders',
      description:
        "With over 32 years of distinctive experience spanning the Asia-Pacific and the Middle East, we provide comprehensive corporate advisory and legal support. Our expertise covers mainland UAE law with audience rights in DIFC and ADGM Courts.",
      images: [
        { src: '/assets/img/resource/why-choose-v2-img1.jpg', alt: 'Legal Expertise' },
        { src: '/assets/img/resource/why-choose-v2-img2.jpg', alt: 'Cross Border Advisory' },
      ],
      features: [
        { title: 'Cross-border expertise', iconClass: 'icon-icon-9' },
        { title: 'DIFC & ADGM Courts', iconClass: 'icon-icon-10' },
        { title: '32+ years experience', iconClass: 'icon-icon-11' },
        { title: '24/7 client support', iconClass: 'icon-icon-12' },
      ],
    },
  };  

export default function Home({ pricingPackages, whyChooseUs }) {
  return (
    <>
      <Layout breadcrumbTitle="Pricing plan">
        {/* Start Pricing One */}
        <section className="pricing-one">
          <div className="container">
            <div className="sec-title text-center">
              <div className="sub-title center">
                <div className="icon">
                  <img src="/assets/img/icon/sec-title-img1.png" alt="Affordable Price" />
                </div>
                <div className="text">
                  <p>consultation packages</p>
                </div>
              </div>
              <h2 className="">our service packages</h2>
            </div>
            <div className="row">
              {pricingPackages.map((pkg, index) => (
                <div key={index} className="col-xl-4 col-lg-4">
                  <div className="pricing-one__single">
                    <div className="table-header text-center">
                      <div className="icon-box">
                        <span className={pkg.iconClass}></span>
                      </div>
                      <div className="table-header__inner">
                        <div className="text-box">
                          <h3>{pkg.title}</h3>
                          <h2>{pkg.price}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="table-content text-center">
                      <ul>
                        {pkg.features.map((feature, i) => (
                          <li key={i}>
                            <p>
                              <span className="icon-icon-16"></span> {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="table-footer text-center">
                      <div className="btn-box">
                        <a className="thm-btn" href="#">
                          {pkg.buttonText}
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
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End Pricing One */}

        {/* Start Why Choose Two */}
        <section className="why-choose-two">
          <div className="shape1">
            <img src="/assets/img/shape/why-choose-v2-shape1.png" alt="Shape 1" />
          </div>
          <div className="shape2 float-bob-y">
            <img src="/assets/img/shape/why-choose-v2-shape2.png" alt="Shape 2" />
          </div>
          <div className="container">
            <div className="row">
              {/* Start Why Choose Two Img */}
              <div className="col-xl-6">
                <div className="why-choose-two__img">
                  <ul>
                    {whyChooseUs.images.map((img, i) => (
                      <li key={i}>
                        <div className="img-box">
                          <img src={img.src} alt={img.alt} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End Why Choose Two Img */}

              {/* Start Why Choose Two Content */}
              <div className="col-xl-6">
                <div className="why-choose-two__content">
                  <div className="sec-title">
                    <div className="sub-title">
                      <div className="icon">
                        <img src="/assets/img/icon/sec-title-img1.png" alt="Why Choose Us" />
                      </div>
                      <div className="text">
                        <p>{whyChooseUs.subtitle}</p>
                      </div>
                    </div>
                    <h2>{whyChooseUs.title}</h2>
                  </div>

                  <div className="why-choose-two__content-text">
                    <p>{whyChooseUs.description}</p>
                  </div>

                  <div className="why-choose-two__content-bottom">
                    <div className="row">
                      {whyChooseUs.features.map((feature, i) => (
                        <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                          <div className="single-box">
                            <div className="icon-box">
                              <span className={feature.iconClass}></span>
                            </div>
                            <div className="title-box">
                              <h2>{feature.title}</h2>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* End Why Choose Two Content */}
            </div>
          </div>
        </section>
        
        {/* End Why Choose Two */}
        {/* Testimonial Section */}
        <TestimonialsTwo />
      </Layout>
    </>
  );
}

