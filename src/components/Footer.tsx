import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="footer__logo">
            <Link to="/">ThakreStack</Link>
          </div>
          <p className="footer__brand-text">Helping brands grow online with smart systems.</p>
          <ul className="footer__socials">
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thakrestack.in?igsh=MWpzbno3M2hsNGFmbw==" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chetan-thakre-1a739a292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <ul className="footer__links">
            <li><Link to="/services">Services</Link></li>
            <li><a href="/#portfolio">Portfolio</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/services">Website Creation</Link></li>
            <li><Link to="/services">Brand Building</Link></li>
            <li><Link to="/services">Offline to Online</Link></li>
            <li><Link to="/contact">Free Consultation</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Legal</h4>
          <ul className="footer__links">
            <li><Link to="/legal/terms">Terms & Conditions</Link></li>
            <li><Link to="/legal/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
         © 2026 ThakreStack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
