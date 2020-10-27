import React, { Fragment,useState } from "react";
import { Link,NavLink } from "react-router-dom";
import NavBar_dropdown from "./NavBar_Dropdown";

const NavBar_Patient = () => 
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
            <Link
              to="/calendar"                
            >
              <button className ='btn btn_inch'>
             Book Appointment
            </button>
              
            </Link>
          </li>
          
          <li className="nav-item ">
          <NavBar_dropdown/>
          </li>
                  </ul>
        {/* <Button /> */}
      </nav>
    </>           
    </Fragment>
  );
};



export default NavBar_Patient;  
