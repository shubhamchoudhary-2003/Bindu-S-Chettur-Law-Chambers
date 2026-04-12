"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <nav className="menu-box">
          <div className="close-btn" onClick={handleMobileMenu}>
            <i className="fas fa-times"></i>
          </div>
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/img/resource/logo-3.png" alt="Bindu S. Chettur Law Chambers" style={{ maxHeight: '60px', width: 'auto' }} />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation">
              {/* Home Menu */}
              <li>
                <Link href="/" onClick={handleMobileMenu}>Home</Link>
              </li>

              {/* About Menu */}
              <li>
                <Link href="/about" onClick={handleMobileMenu}>About</Link>
              </li>

              {/* Services Menu */}
              <li className={isActive.key === 2 ? "menu-item-has-children active" : "menu-item-has-children"}>
                <Link href="#" onClick={handleMobileMenu}>Services</Link>
                <ul className="sub-menu" style={{ display: isActive.key === 2 ? "block" : "none" }}>
                  <li><Link href="/service" onClick={handleMobileMenu}>All Services</Link></li>
                  <li><Link href="/criminal-case" onClick={handleMobileMenu}>DIFC Services</Link></li>
                  <li><Link href="/family-violence" onClick={handleMobileMenu}>Commercial & Corporate</Link></li>
                  <li><Link href="/business-law" onClick={handleMobileMenu}>Arbitration</Link></li>
                  <li><Link href="/health-care" onClick={handleMobileMenu}>Employment & Labor</Link></li>
                  <li><Link href="/insurance-law" onClick={handleMobileMenu}>Drafting & Agreements</Link></li>
                  <li><Link href="/real-estate" onClick={handleMobileMenu}>Legal Advisory</Link></li>
                </ul>
                <div className={isActive.key === 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}>
                  <span className="fa fa-angle-right"></span>
                </div>
              </li>

              {/* Pages Menu */}
              <li className={isActive.key === 3 ? "menu-item-has-children active" : "menu-item-has-children"}>
                <Link href="#" onClick={handleMobileMenu}>Pages</Link>
                <ul className="sub-menu" style={{ display: isActive.key === 3 ? "block" : "none" }}>
                  <li><Link href="/case" onClick={handleMobileMenu}>Press & Media</Link></li>
                  <li><Link href="/team" onClick={handleMobileMenu}>Our Team</Link></li>
                  <li><Link href="/faq" onClick={handleMobileMenu}>FAQ</Link></li>
                </ul>
                <div className={isActive.key === 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}>
                  <span className="fa fa-angle-right"></span>
                </div>
              </li>

              {/* Blog Menu */}
              <li>
                <Link href="/blog" onClick={handleMobileMenu}>Blog</Link>
              </li>

              {/* Contact Menu */}
              <li>
                <Link href="/contact" onClick={handleMobileMenu}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="icon-box">
              <span className="icon-icon-48"></span>
            </div>
            <p><a href="tel:+971544778569">+971 54 477 8569</a></p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix list-wrap">
              <li><a href="https://www.facebook.com/p/Advocate-Bindu-S-Chettur-Associates-100080249942973/"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.instagram.com/advocate_binduschettur/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/in/adv-bindu-s-chettur-473b4384/"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Menu Backdrop */}
      <div className="menu-backdrop" onClick={handleMobileMenu}></div>
    </>
  );
};

export default MobileMenu;
