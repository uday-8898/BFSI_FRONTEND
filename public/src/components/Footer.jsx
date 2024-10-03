import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll\
import { useNavigate } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = ({featureRef, HomeRef}) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    if (featureRef && featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    if (HomeRef && HomeRef.current) {
      HomeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick = () => {
    navigate('/about');
  };


  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__content flex flex-col justify-between lg:flex-row">
          {/* <Link to="/" smooth={true} duration={500} className="footer__logo">Home</Link> */}
          <button 
              onClick={handleHomeClick}
              className="footer__logo"
            >
              Home 
            </button>
          <ul className="footer__links text-center">
            <button 
              onClick={handleAboutClick}
               className="footer__link"
            >
              About Us 
            </button>
            {/* <li>
              <Link to="steps" smooth={true} duration={500}>Features</Link>
            </li> */}
            <button 
              onClick={handleExploreClick}
               className="footer__link"
            >
              Features 
            </button>
            <li>
              <a target="_blank" href="" className="footer__link">Privacy Policy</a>
            </li>
          </ul>

          <div className="footer__social">
            <a href="https://www.youtube.com/channel/UCUu7tZJBEom0EHpXXWg45Vg" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/onmeridian/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FaInstagram />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FOn_Meridian" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/on-meridian/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className='flex flex-col mt-4 md:flex-row justify-center'>
          <div className='flex py-4 px-5 flex-col border-b-2 border-white md:border-b-0 md:border-r-2 md:border-white'>
            <div className='flex items-center gap-x-3 mb-3'>
              <img className='w-8' src="https://onmeridian.com/wp-content/uploads/2023/07/India-flag-removebg-preview.png" alt="India Flag" />
              <p className='text-2xl font-semibold'>India</p>
            </div>
            <p className='text-sm'>Tower B, Office No 1103 & 1104,<br />11th Floor, Spaze IT Tech Park,<br />Sohna Road, Gurugram, India</p>
          </div>
          <div className='flex py-4 px-5 flex-col'>
            <div className='flex items-center gap-x-3 mb-3'>
              <img className='w-8' src="https://onmeridian.com/wp-content/uploads/2024/04/united-arab-emirates-svgrepo-com.svg" alt="UAE Flag" />
              <p className='text-2xl font-semibold'>UAE</p>
            </div>
            <p className='text-sm'>Unique World Business Centre,</p><p><span>Al Karama, Dubai, UAE</span></p>
          </div>
        </div>
        <span className="footer__copy">
          &#169; Meridian Solutions Pvt Ltd 2024. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
