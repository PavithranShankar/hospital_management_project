import React,{useState,Fragment} from "react";
import {Link} from "react-router-dom";


const NavBar_dropdown=()=>
{

    let con_val='Consumer';

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <Fragment>

<>

          
          <li className="nav-item ">
          <a
            className="dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
              <img
          src="data:image/png;base64,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"
          width="40"
          height="40"
          className="rounded-circle"
        />
            
            &ensp;
          </a>
          <div className="dropdown drp_left"> 
            <div
              className="dropdown-menu dropdown-menu-right drp_trans"
              aria-labelledby="dropdownMenuButton"
            >
              <div className="dropdown-container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                  <div className="card crd_widht">
                    <div className="card-header crd_brdr">
                      <div className="profile_pic">
                      <img
                         src="data:image/png;base64,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"
                         width="40"
                         height="40"
                         className="rounded-circle"
                        />
        
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-lfex justify-content-center flex-column">
                        <div className="name_container"></div>
                        <div className="address"></div>
                      </div>

                      <div className="">                        
                          <Link
                            to={{
                              pathname: "/ProfileForPatient",
                              
                            }}
                            className="profile_font"
                          >
                            Profile
                            <span className="glyphicon glyphicon-cog pull-right"></span>
                          </Link>
                                                
                        {/* <li className="divider"></li> */}
                        <br></br>
                        <Link  
                          to={{
                            pathname: "/ChangePassword",
                            
                          }}
                          className="password_font"
                        >
                          Change Password
                          <span className="glyphicon glyphicon-eye-close pull-right"></span>
                          
                        </Link>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="view_profile" >
                        <Link to="/login">
                        Logout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
          
          
               
    </>           
    </Fragment>
        
            
            

       
    )
}

export default NavBar_dropdown;