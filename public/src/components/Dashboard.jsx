import React from 'react';
import Navbar from './Navbar';

function Dashboard() {
  return (
    <div className="">
      {/* Sidebar stays on the left */}
      <Navbar />
      
      {/* Main Content (Dashboard) */}
      <div className="">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>This is the content of the dashboard, shown to the right of the sidebar.</p>
      </div>
    </div>
  );
}

export default Dashboard;
