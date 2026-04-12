"use client";  // Add this line at the top

import Link from "next/link";
import { useState } from "react";

export default function Banner() {
    // State for dynamic data (e.g., dynamic images or text)
    const [bannerContent, setBannerContent] = useState({
        description: "With over 32 years of distinctive experience spanning the Asia-Pacific and the Middle East, we provide comprehensive corporate advisory and legal support tailored to your business and personal needs.",
        socialLinks: [
            { icon: "icon-icon-4", url: "https://www.facebook.com/p/Advocate-Bindu-S-Chettur-Associates-100080249942973/" },
            { icon: "icon-icon-3", url: "https://www.instagram.com/advocate_binduschettur/" },
            { icon: "icon-icon-2", url: "https://www.linkedin.com/in/adv-bindu-s-chettur-473b4384/" },
        ],
        backgroundImage: "/assets/img/pattern/banner-v1-pattern.png",
        bannerImage: "/assets/img/background/banner-v1-bg.jpg"
    });

    return (
        <>
            {/* Start Banner One */}
            <section className="banner-one">
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
                                <h2>CROSS BORDER <br /> LEGAL EXPERTISE</h2>
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

                <div className="banner-one__img">
                    <div 
                        className="banner-one__img-bg" 
                        style={{ backgroundImage: `url(${bannerContent.bannerImage})` }}
                    ></div>
                </div>
            </section>
            {/* End Banner One */}
        </>
    );
}
