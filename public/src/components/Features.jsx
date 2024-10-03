import React, { forwardRef } from 'react';
import '../styles/Features.css';
import img1 from '../assets/bg2.jpg';

const Features = forwardRef((props, ref) => {
    return (
        <div ref={ref}>

       
        <div 
            className="relative py-16 px-8 bg-gray-100 mt-16"
            style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark Overlay */}
            <div
                className="absolute inset-0 bg-black opacity-70"
                style={{ zIndex: 0 }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
                {/* Heading */}
                <div className="text-center mb-2">
                    <h2 className="text-3xl font-bold text-gray-100 mt-[-1.6rem]">
                        Reliable, efficient delivery
                    </h2>
                    <h3 className="text-2xl text-blue-300">Powered by Technology</h3>
                    <p className="mt-2 text-gray-300">
                        Our Artificial Intelligence powered tools use millions of project data points
                        to ensure that your project is successful.
                    </p>
                </div>

                {/* Main Container */}
                <div className="flex flex-col lg:flex-row gap-8 mt-3">
                    {/* Feature Cards */}
                    <div className="mt-3 lg:w-1/2">
                        {/* Supervisor Card */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-3 border-t-4 border-green-500 mb-2">
                            <div className="flex items-center">
                                <div className="p-2 bg-green-100 rounded-full">
                                    {/* Icon */}
                                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m7-7v14" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 ml-4">Supervisor</h4>
                            </div>
                            <p className="mt-3 text-gray-600">
                                Monitors activity to identify project roadblocks.
                            </p>
                        </div>

                        {/* Team Builder Card */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-3 border-t-4 border-red-500 mb-2">
                            <div className="flex items-center">
                                <div className="p-2 bg-red-100 rounded-full">
                                    {/* Icon */}
                                    <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V5a1 1 0 00-1-1H9a1 1 0 00-1 1v6m6 0h1a2 2 0 012 2v4H8v-4a2 2 0 012-2h1" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 ml-4">Team Builder</h4>
                            </div>                           
                            <p className="mt-3 text-gray-600">
                                Scans our talent network to create the optimal team for your project.
                            </p>
                        </div>

                        {/* Calculator Card */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-2 border-t-4 border-blue-500 mb-2">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-full">
                                    {/* Icon */}
                                    <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m7-7v14" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 ml-4">Calculator</h4>
                            </div>
                            <p className="mt-3 text-gray-600">
                                Uses data from past projects to provide better delivery estimates.
                            </p>
                        </div>

                        {/* Karma Card */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-2 border-t-4 border-yellow-500 mb-2">
                            <div className="flex items-center">
                                <div className="p-2 bg-yellow-100 rounded-full">
                                    {/* Icon */}
                                    <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V5a1 1 0 00-1-1H9a1 1 0 00-1 1v6m6 0h1a2 2 0 012 2v4H8v-4a2 2 0 012-2h1" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 ml-4">Karma</h4>
                            </div>
                            <p className="mt-3 text-gray-600">
                                Regularly evaluates our talent to ensure quality.
                            </p>
                        </div>
                    </div>

                    {/* Lottie Animation */}
                    <div className="flex items-center justify-center w-full lg:w-1/2">
                        <dotlottie-player
                            src="https://lottie.host/88466066-13be-478a-ab15-1be8a6c0b651/hDaqpTpC33.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                            style={{ maxWidth: '500px', maxHeight: '500px', width: '100%', height: 'auto' }}
                        ></dotlottie-player>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
})

export default Features;
