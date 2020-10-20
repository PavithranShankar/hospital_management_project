import React from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {Link} from "react-router-dom";



const Register=()=>
{


    
    return(
        <React.Fragment>
    <div>
    <div className="container ">
    <div className="row ">
    	<div className="col-md-4 col-md-offset-4 mx-auto mt-5 p-4 loginborder">
    		<div className="panel panel-default">
			  	<div className="panel-heading">
			    	<h3 className="panel-title">Sign Up</h3>
			 	</div>
			  	<div className="panel-body">
        <AvForm className="register-form" >

        <div className="form-group">
        <AvField
                  name="FirstName"
                  id="FirstName"
                  type="text"
                  placeholder="FirstName"
                  className="form-control"               
                />
			    		    
			  </div>
              <div className="form-group">
        <AvField
                  name="LastName"
                  id="LastName"
                  type="text"
                  placeholder="LastName"
                  className="form-control"               
                />
			    		    
			  </div>
              

              <div className="form-group">
              <AvField
              name="emailProp"
              type="email"
              errorMessage="Please enter the Valid E-MailID "
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              
              
            />
            </div>
        <div className="form-group">
        <AvField
                  name="Password"
                  id="Password"
                  type="Password"
                  placeholder="Password"
                  className="form-control"               
                />
			    		    
			  </div>
              <div className="form-group">
        <AvField
                  name="ConfirmPassword"
                  id="ConfirmPassword"
                  type="Password"
                  placeholder="ConfirmPassword"
                  className="form-control"               
                />
			    		    
			  </div>

        
        <div>
            
                <button 
                    type="submit" 
                    className="btn btn-lg btn-success btn-block"
                                     
                >
                   Sign Up
                </button>
                </div>
        </AvForm>
        <hr/>
                    <center><h4>OR</h4></center>
                    Already have an account?
                    <Link to="/login">
                    <button className="btn btn-lg btn-facebook btn-block btn_color" type="submit">Login</button>
                    </Link>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      
        </React.Fragment>

       
    );
};

export default Register;