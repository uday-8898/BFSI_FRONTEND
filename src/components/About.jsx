import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <div className="">
      {/* Sidebar stays on the left */}
      <Navbar /><br/>
      
      {/* Main Content (About) */}
      <div className="">
        <h1 className="">About Page</h1>
        <p>This is the content of the About page, shown to the right of the sidebar.</p>
      </div>
    </div>
  );
}

export default About;
