import React, { Fragment,useState } from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <Fragment>

<header>
        <Link to="/">
        <p>Health Center</p>
        </Link>
        <nav>
        <NavLink 
                exact
                  to="/"
                    >
                  Home
                </NavLink>
                      
                <NavLink
                  to="/register"
                 
                >
                  Register
                </NavLink>
           

                <NavLink
                  to="/login"
                  
                >
                  Log In
                </NavLink>
                  
         
          {/* <button href="#">Make an appointment</button>  */}
        </nav>
      </header>
            
           
                
    </Fragment>
  );
};


export default Navbar;  