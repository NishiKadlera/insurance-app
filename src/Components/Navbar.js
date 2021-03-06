import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{color:'orange', fontWeight: 'bold'}}>
            SafeSure Insurance
          </a>
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
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li> 
              &nbsp;&nbsp;&nbsp;<li className="nav-item">
                <Link className="nav-link active" to="login">
                  Login
                </Link>
              </li>
              &nbsp;&nbsp;&nbsp;<li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Insure
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="HomeInsurance">
                      Home Insurance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="VehicleInsurance">
                    Vehicle Insurance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="HealthInsurance">
                      Health Insurance
                    </Link>
                  </li>
                </ul>
              </li>
              &nbsp;&nbsp;&nbsp;<li className="nav-item">
                <Link className="nav-link active" to="register">Register</Link>
              </li>
              &nbsp;&nbsp;&nbsp;<li className="nav-item">
                <Link className="nav-link active" to="mypolicy">
                  My Policies
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
