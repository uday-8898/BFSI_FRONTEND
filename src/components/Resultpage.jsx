// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './Resultpage.css';

// const Resultpage = () => {
//   const location = useLocation();
//   const state = location.state || {}; // Ensure location.state is checked
//   const {
//     aadhaar_comparison_result = {},
//     pan_comparison_result = {},
//     verification_status = 'Not Available',
//     form_id = 'N/A',
//     doc_id = 'N/A',
//   } = state;

//   if (!aadhaar_comparison_result || !pan_comparison_result) {
//     return <div>Loading results...</div>;
//   }

//   return (
//     <div>
//       <h2>Form Verification Results</h2>

//       <h3>Aadhaar Comparison:</h3>
//       <ul>
//         <li>First Name Match: {aadhaar_comparison_result.first_name_match_aadhaar ? 'Yes' : 'No'}</li>
//         <li>Last Name Match: {aadhaar_comparison_result.last_name_match_aadhaar ? 'Yes' : 'No'}</li>
//         <li>Date of Birth Match: {aadhaar_comparison_result.dob_match_aadhaar ? 'Yes' : 'No'}</li>
//         <li>Aadhaar No Match: {aadhaar_comparison_result.aadhar_no_match_aadhaar ? 'Yes' : 'No'}</li>
//       </ul>

//       <h3>PAN Comparison:</h3>
//       <ul>
//         <li>First Name Match: {pan_comparison_result.first_name_match_pan ? 'Yes' : 'No'}</li>
//         <li>Last Name Match: {pan_comparison_result.last_name_match_pan ? 'Yes' : 'No'}</li>
//         <li>Date of Birth Match: {pan_comparison_result.dob_match_pan ? 'Yes' : 'No'}</li>
//         <li>PAN No Match: {pan_comparison_result.pan_no_match_pan ? 'Yes' : 'No'}</li>
//       </ul>

//       <h3>Overall Verification Status: {verification_status}</h3>
//       <p>Form ID: {form_id}</p>
//       <p>Document ID: {doc_id}</p>
//     </div>
//   );
// };

// export default Resultpage;


import React from 'react';
import { useLocation } from 'react-router-dom';
import './Resultpage.css'; // Import the CSS file

const Resultpage = () => {
  const location = useLocation();
  const state = location.state || {}; // Ensure location.state is checked
  const {
    aadhaar_comparison_result = {},
    pan_comparison_result = {},
    verification_status = 'Not Available',
    form_id = 'N/A',
    doc_id = 'N/A',
  } = state;

  if (!aadhaar_comparison_result || !pan_comparison_result) {
    return <div className="loading">Loading results...</div>;
  }

  return (
    <div className="container">
      <h2>Form Verification Results</h2>

      <h3>Aadhaar Comparison:</h3>
      <ul>
        <li>First Name Match: {aadhaar_comparison_result.first_name_match_aadhaar ? 'Yes' : 'No'}</li>
        <li>Last Name Match: {aadhaar_comparison_result.last_name_match_aadhaar ? 'Yes' : 'No'}</li>
        <li>Date of Birth Match: {aadhaar_comparison_result.dob_match_aadhaar ? 'Yes' : 'No'}</li>
        <li>Aadhaar No Match: {aadhaar_comparison_result.aadhar_no_match_aadhaar ? 'Yes' : 'No'}</li>
      </ul>

      <h3>PAN Comparison:</h3>
      <ul>
        <li>First Name Match: {pan_comparison_result.first_name_match_pan ? 'Yes' : 'No'}</li>
        <li>Last Name Match: {pan_comparison_result.last_name_match_pan ? 'Yes' : 'No'}</li>
        <li>Date of Birth Match: {pan_comparison_result.dob_match_pan ? 'Yes' : 'No'}</li>
        <li>PAN No Match: {pan_comparison_result.pan_no_match_pan ? 'Yes' : 'No'}</li>
      </ul>

      <h3>Overall Verification Status: {verification_status}</h3>
      <p>Form ID: {form_id}</p>
      <p>Document ID: {doc_id}</p>
    </div>
  );
};

export default Resultpage;

