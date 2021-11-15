
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import logo from '../../image/logo.png';
import '../Header/Header.css'
const Header = () => {
  const {user,logOut}=useAuth()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img src={logo} alt="" style={{
            height:"60px",
            width:"160px"
          }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 me-auto justify-content-end">

              <li className="nav-item">
                <Link to ="/home">Home</Link>
              </li>

              <li className="nav-item">
                <Link to ="/explore">Explore</Link>
              </li>

              {
                user.email && <li className="nav-item">
                <Link to ="/dashboard">Dashboard</Link>
              </li>
              }
              <li className="nav-item">
                  { user?.email?

                          <span><button className="btn btn-primary" onClick={logOut}>Logout as </button>
                            {user.displayName}
                          </span>
                          :
                          <Link as Link  to="/signin">Login</Link>
                  }
              </li>
            
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Header;