import React, { useRef } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Steps from './Steps';
import Features from './Features';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
import Footer from './Footer';

function Home() {
  const stepsRef = useRef(null);
  const featureRef= useRef(null)
  const HomeRef= useRef(null)

  return (
    <div>
      <Navbar ref={HomeRef} />
      <HeroSection stepsRef={stepsRef} /> {/* Pass the ref to HeroSection */}
      <Steps ref={stepsRef} /> {/* Assign ref to Steps */}
      <Features ref={featureRef}/>
      <FAQ/>
      <ContactForm/>
      <Footer featureRef={featureRef} HomeRef={HomeRef}/>
      </div>
  );
}

export default Home;
