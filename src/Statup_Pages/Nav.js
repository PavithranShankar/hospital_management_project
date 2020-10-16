import React, { Fragment,useState } from "react";
import { Link,NavLink } from "react-router-dom";

const Nav_Bar = () => 
{

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Fragment>

<>
<nav className="navbar">
        <Link to="/" className="navbar-logo  mb-4">
          Health Center 
          <i className='fab fa-firstdraft'></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
                   
          <li className="nav-item">
            <Link
              to="/contact_us"
              className="nav-links"
              
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
          <Link to='/register'>
            <button className ='btn'>
                Sign up
            </button>
        </Link>
          </li>
          <li className="nav-item">
          <Link to='/login'>
            <button className ='btn'>
                Log in
            </button>
        </Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>           
    </Fragment>
  );
};



export default Nav_Bar;  
