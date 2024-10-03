// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';

// function ShowResult() {
//   const location = useLocation();
//   const { result } = location.state || {}; // Get the result from location state

//   return (
//     <div>
//       <h1>Submission Result</h1>
//       {result ? (
//         <div>
//           <pre>{JSON.stringify(result, null, 2)}</pre>
//           <h2>View Detailed Results</h2>
//           <ul>
//             <li>
//               <a href="http://127.0.0.1:8000/view_adhar_file" target="_blank" rel="noopener noreferrer">
//                 View Aadhaar
//               </a>
//             </li>
//             <li>
//               <a href="http://127.0.0.1:8000/view_pan_file" target="_blank" rel="noopener noreferrer">
//                 View PAN 
//               </a>
//             </li>
//             <li>
//               <a href="http://127.0.0.1:8000/view_bank_statement" target="_blank" rel="noopener noreferrer">
//                 View Bank Statement 
//               </a>
//             </li>
//           </ul>
//         </div>
//       ) : (
//         <p>No result available.</p>
//       )}
//     </div>
//   );
// }

// export default ShowResult;




import React from 'react';
import { useLocation } from 'react-router-dom';
import './Resultpage.css'; // Import the CSS file

function ShowResult() {
  const location = useLocation();
  const { result } = location.state || {}; // Get the result from location state

  return (
    <div className="container">
      <h1>Submission Result</h1>
      {result ? (
        <div>
          <pre className="pre">{JSON.stringify(result, null, 2)}</pre>
          <div className="result-links">
            <h2>View Detailed Results</h2>
            <ul>
              <li>
                <a href="https://bfsi.azurewebsites.net//view_adhar_file" target="_blank" rel="noopener noreferrer">
                  View Aadhaar
                </a>
              </li>
              <li>
                <a href="https://bfsi.azurewebsites.net//view_pan_file" target="_blank" rel="noopener noreferrer">
                  View PAN
                </a>
              </li>
              <li>
                <a href="https://bfsi.azurewebsites.net//view_bank_statement" target="_blank" rel="noopener noreferrer">
                  View Bank Statement
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <p className="info">No result available.</p>
      )}
    </div>
  );
}

export default ShowResult;
