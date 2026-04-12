import Layout from "@/components/layout/Layout";

// Sample data for demonstration
async function fetchCaseData() {
    // Replace this with actual data fetching logic
    return {
        category: "Landmark Sharjah Court Victory",
        description: "Advocate Bindu S. Chettur secured acquittals for seventeen Indian nationals accused of murder in a landmark case that received international recognition.",
        info: [
            { label: "Client", value: "17 Indian Nationals" },
            { label: "Category", value: "Criminal Defense" },
            { label: "Location", value: "Sharjah, UAE" },
            { label: "Date", value: "2017" },
            { label: "Status", value: "Acquitted" },
            { label: "Duration", value: "12 Months" },
        ],
        images: [
            { src: "/assets/img/resource/case-details-img1.jpg", alt: "Sharjah Court Case" },
            { src: "/assets/img/resource/case-details-img2.jpg", alt: "Legal Proceedings" },
        ],
        challenge: "Seventeen Indian nationals faced murder charges in Sharjah Court, with potential death row sentencing. The case required navigating complex UAE criminal law while coordinating with the Indian Government.",
        challengeDetails: "The Indian Government appointed Advocate Bindu S. Chettur as the defense advocate, recognizing her expertise in UAE law and her decades of service at the Indian Consulate in Dubai.",
        included: "Comprehensive legal defense strategy involving cross-border coordination and expert criminal law representation.",
        inclusions: [
            ["Cross-border legal coordination", "Expert criminal defense", "Government liaison support"],
            ["Evidence analysis and preparation", "Court representation in Sharjah", "Post-acquittal legal support"]
        ],
        result: "All seventeen Indian nationals were acquitted of murder charges, marking a landmark victory that garnered international media coverage across Gulf News, Hindustan Times, and other major publications.",
        resultImage: { src: "/assets/img/resource/case-details-img3.jpg", alt: "Landmark Victory" }
    };
}

export default async function CaseDetails() {
    // Fetch the case data
    const caseData = await fetchCaseData();

    return (
        <>
            <Layout breadcrumbTitle="Case Details">
                {/* Start Case Details */}
                <section className="case-details">
                    <div className="container">
                        <div className="row">
                            {/* Sidebar */}
                            <div className="col-xl-4">
                                <div className="case-details__sidebar">
                                    <div className="case-details__sidebar-text">
                                        <h2>{caseData.category}</h2>
                                        <p>{caseData.description}</p>
                                    </div>

                                    <div className="case-details__sidebar-project">
                                        <div className="title-box">
                                            <div className="shape-box">
                                                <div className="line"></div>
                                                <div className="round"></div>
                                            </div>
                                            <div className="text">
                                                <h3>Project info</h3>
                                            </div>
                                        </div>

                                        <div className="case-details__sidebar-project-list">
                                            <ul>
                                                {caseData.info.map((item, index) => (
                                                    <li key={index}>
                                                        <div className="text-box">
                                                            <p>{item.label}</p>
                                                            <h3>{item.value}</h3>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="col-xl-8">
                                <div className="case-details__content">
                                    <div className="case-details__content-img1">
                                        <div className="row">
                                            {caseData.images.map((img, index) => (
                                                <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="case-details__content-img1-single">
                                                        <img src={img.src} alt={img.alt} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="case-details__content-text1">
                                        <h2>Challenge of the case</h2>
                                        <p>{caseData.challenge}</p>
                                        <h3>{caseData.challengeDetails}</h3>
                                    </div>

                                    <div className="case-details__content-text2">
                                        <h2>What's Included in case</h2>
                                        <p>{caseData.included}</p>
                                        <div className="case-details__content-text2-list">
                                            <div className="row">
                                                {caseData.inclusions.map((item, index) => (
                                                    <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                                                        <ul>
                                                            {item.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <h3>
                                                                        <span className="icon-icon-16"></span> {subItem}
                                                                    </h3>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="case-details__content-text3">
                                        <h2>Result of case</h2>
                                        <p>{caseData.result}</p>
                                        <div className="img-box">
                                            <img src={caseData.resultImage.src} alt={caseData.resultImage.alt} />
                                        </div>
                                    </div>

                                    <div className="case-details__form">
                                        <div className="title-box">
                                            <h2>Send Us a Message</h2>
                                        </div>
                                        <div className="contact-one__form">
                                            <form action="assets/inc/sendemail.php" className="contact-page__form contact-form-validated">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div className="contact-page__input-box">
                                                            <input type="text" placeholder="NAME*" name="name" />
                                                            <div className="icon-box">
                                                                <span className="icon-icon-17"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div className="contact-page__input-box">
                                                            <input type="text" placeholder="PHONE*" name="phone" />
                                                            <div className="icon-box">
                                                                <span className="icon-icon-37"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div className="contact-page__input-box">
                                                            <input type="email" placeholder="EMAIL*" name="email" />
                                                            <div className="icon-box">
                                                                <span className="icon-icon-18"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div className="contact-page__input-box">
                                                            <input type="text" placeholder="SUBJECT*" name="subject" />
                                                            <div className="icon-box">
                                                                <span className="icon-icon-23"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                        <div className="contact-page__input-box">
                                                            <textarea name="message" placeholder="COMMENT*"></textarea>
                                                            <div className="icon-box">
                                                                <span className="icon-icon-19"></span>
                                                            </div>
                                                        </div>
                                                        <div className="contact-page__btn">
                                                            <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                                Send Message
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Case Details */}
            </Layout>
        </>
    );
}
