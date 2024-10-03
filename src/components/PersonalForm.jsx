import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import img1 from '../assets/bg2.jpg';

function PersonalForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    email: '',
    aadharNumber: '',
    panNumber: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    aadharFile: null,
    panFile: null,
    bankStatementFile: null,
  });

  const [isUpload, setIsUpload] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setUploadedFiles((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleNext = () => {
    setIsUpload(true);
  };

  const handlePrevious = () => {
    setIsUpload(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const data = new FormData();

    // Append form fields from state
    data.append('first_name', formData.firstName);
    data.append('last_name', formData.lastName);
    data.append('email', formData.email);
    data.append('dob', formData.dob);
    data.append('phone', formData.phoneNumber);
    data.append('aadhar', formData.aadharNumber);
    data.append('pan', formData.panNumber);

    // Append files from uploadedFiles state
    if (uploadedFiles.aadharFile) {
      data.append('aadhar_file', uploadedFiles.aadharFile);
    }
    if (uploadedFiles.panFile) {
      data.append('pan_file', uploadedFiles.panFile);
    }
    if (uploadedFiles.bankStatementFile) {
      data.append('bank_statement_file', uploadedFiles.bankStatementFile);
    }

    try {
      // Send the request to the backend
      const response = await fetch('https://bfsi.azurewebsites.net//submit', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      console.log('hello result')
      console.log(result)
      navigate('/result', { state: { result } });
  // Redirect to results page and pass the result as state
 
} catch (error) {
  console.error('Error submitting the form', error);
}
};

  

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
      <Navbar />
      <section>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black rounded-none border-none m-3">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Personal Details</p>
                      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        {!isUpload ? (
                          <>
                            {/* Personal Details Inputs */}
                            <div className="grid md:grid-cols-2 md:gap-6 mb-5">
                              <div className="relative z-0 w-full group">
                                <input
                                  type="text"
                                  name="firstName"
                                  id="first_name"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500 focus:bg-transparent focus:ring-0"
                                  placeholder=" "
                                  required
                                  value={formData.firstName}
                                  onChange={handleChange}
                                  autoComplete="off" // Prevents autocomplete suggestions
                                />

                                <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
                                  First Name
                                </label>
                              </div>
                              <div className="relative z-0 w-full group">
                                <input
                                  type="text"
                                  name="lastName"
                                  id="last_name"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
                                  placeholder=" "
                                  required
                                  value={formData.lastName}
                                  onChange={handleChange}
                                  autoComplete="off" // Prevents autocomplete suggestions
                                />
                                <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
                                  Last Name
                                </label>
                              </div>
                            </div>

                            {/* Date of Birth, Phone Number, and Email Inputs */}
                            <div className="grid md:grid-cols-2 md:gap-6 mb-5">
                              <div className="relative z-0 w-full group">
                                <input
                                  type="date"
                                  name="dob"
                                  id="dob"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
                                  required
                                  value={formData.dob}
                                  onChange={handleChange}
                                  autoComplete="off" // Prevents autocomplete suggestions
                                />
                                <label htmlFor="dob" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
                                  Date of Birth
                                </label>
                              </div>
                              <div className="relative z-0 w-full group">
                                <input
                                  type="tel"
                                  name="phoneNumber"
                                  id="phone_number"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
                                  placeholder=" "
                                  required
                                  value={formData.phoneNumber}
                                  onChange={handleChange}
                                  autoComplete="off" // Prevents autocomplete suggestions
                                />
                                <label htmlFor="phone_number" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
                                  Phone Number
                                </label>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6 mb-5">
                              <div className="relative z-0 w-full group">
                              <input
                                type="text"
                                name="panNumber"
                                id="pan_number"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
                                placeholder=" "
                                required
                                value={formData.panNumber}
                                onChange={handleChange}
                                autoComplete="off" // Prevents autocomplete suggestions
                              />
                              <label htmlFor="pan_number" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
                                PAN Number
                              </label>
                              </div>
                              <div className="relative z-0 w-full group">
                                <input
                                  type="text"
                                  name="aadharNumber"
                                  id="aadhar_number"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
                                  placeholder=" "
                                  required
                                  value={formData.aadharNumber}
                                  onChange={handleChange}
                                  autoComplete="off" // Prevents autocomplete suggestions
                                />
                                <label htmlFor="aadhar_number" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
                                  Aadhar Number
                                </label>
                              </div>
                            </div>

                            <div className="relative z-0 w-full group mb-5">
                              
                              <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
                                  placeholder=" "
                                  required
                                  value={formData.email}
                                  onChange={handleChange}
                                  autoComplete="off" // Prevents autocomplete suggestions
                                />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
                                  Email
                                </label>
                            </div>

                            <button
                              type="button"
                              onClick={handleNext}
                              className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                            >
                              Next
                            </button>
                          </>
                        ) : (
                          <>
                            {/* File Uploads */}
                            <div className="mb-3">
                              <label htmlFor="aadhar_file" className="form-label">Upload Aadhar</label>
                              <input
                                className="form-control"
                                type="file"
                                name="aadharFile"
                                id="aadhar_file"
                                multiple
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="pan_file" className="form-label">Upload PAN</label>
                              <input
                                className="form-control"
                                type="file"
                                name="panFile"
                                id="pan_file"
                                multiple
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="bank_statement_file" className="form-label">Upload Bank Statement</label>
                              <input
                                className="form-control"
                                type="file"
                                name="bankStatementFile"
                                id="bank_statement_file"
                                multiple
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="flex justify-between mt-5">
                              <button
                                type="button"
                                onClick={handlePrevious}
                                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                              >
                                Previous
                              </button>
                              <button
                                type="submit"
                                className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                              >
                                Submit
                              </button>
                            </div>
                          </>
                        )}
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <dotlottie-player
                        src="https://lottie.host/dc9a2e76-9941-434b-8073-6b9e9ae7a83d/7D5byeP6Kj.json"
                        background="transparent"
                        border="2px solid black"
                        speed="1"
                        loop
                        autoplay
                        style={{  width: '95%', height: '95%' }}
                      ></dotlottie-player>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PersonalForm;
