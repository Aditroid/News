// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// export default class NavBar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
//           <div className="container-fluid">
//             <Link className="navbar-brand text-dark" to="/">NewsAPK</Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 {/* <li className="nav-item">
//                   <a className="nav-link active text-dark" aria-current="page" href="/home">Home</a>
//                 </li> */}
//                 <li className="nav-item"><Link to="/business" className="nav-link text-dark">Business</Link></li>
//                 <li className="nav-item"><Link to="/science" className="nav-link text-dark">Science</Link></li>
//                 <li className="nav-item"><Link to="/sports" className="nav-link text-dark">Sports</Link></li>
//                 <li className="nav-item"><Link to="/health" className="nav-link text-dark">Health</Link></li>
//                 <li className="nav-item"><Link to="/entertainment" className="nav-link text-dark">Entertainment</Link></li>
//                 <li className="nav-item"><Link to="/technology" className="nav-link text-dark">Technology</Link></li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }


// Now its function based components

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark" to="/">NewsAPK</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/business" className="nav-link text-dark">Business</Link></li>
              <li className="nav-item"><Link to="/science" className="nav-link text-dark">Science</Link></li>
              <li className="nav-item"><Link to="/sports" className="nav-link text-dark">Sports</Link></li>
              <li className="nav-item"><Link to="/health" className="nav-link text-dark">Health</Link></li>
              <li className="nav-item"><Link to="/entertainment" className="nav-link text-dark">Entertainment</Link></li>
              <li className="nav-item"><Link to="/technology" className="nav-link text-dark">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;