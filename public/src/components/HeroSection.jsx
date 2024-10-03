import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/hero-image.png';
import '../styles/Home.css';

function HeroSection({ stepsRef }) { // Receive the ref as a prop
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate('/form-Details');
  };

  const handleExploreClick = () => {
    if (stepsRef && stepsRef.current) {
      stepsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="hero-background relative flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Content with rotating dotted circle */}
      <div className="w-full md:w-1/2 p-6 relative flex justify-center items-center">
        <div className="dotted-circle absolute"></div>
        <div className="dotted-circle2 absolute"></div>
        <div className="z-10">
          <h1 className="text-4xl font-bold text-black mb-4">Welcome to Our Project</h1>
          <p className="text-black-700 text-lg mb-6">
            This project is designed to provide cutting-edge solutions in person identification,
            real-time face detection, and crowd monitoring. We are using advanced machine learning models
            to track and analyze human presence in videos, images, and live streams.
          </p>
          <div className='flex gap-x-5'>
            <button 
              onClick={handleExploreClick}
              className="px-14 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition duration-300 cursor-pointer"
            >
              Explore 
            </button>
            <button 
              onClick={handleUploadClick}
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition duration-300 cursor-pointer"
            >
              Upload Document
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image with cloud background */}
      <div className="w-full md:w-1/2 p-6 relative">
        <div className="cloud-background"></div>
        <img src={img1} alt="Hero" className="relative z-10" style={{ width: '670px', height: '480px', maxWidth: '800px' }} />
      </div>
    </div>
  );
}

export default HeroSection;
