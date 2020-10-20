import React, { useState } from "react";
import { Button, FormGroup,Form,Label,Input } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {Link} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if(email==="")
    {
      alert("Please enter the usename");
    }
    else if(password==="")
    {
      alert("Please enter the password");
    }
    else{
      alert("Login sucessfully");
    }
};


  return(

    <React.Fragment>
    <div>
    <div className="container ">
    <div className="row ">
    	<div className="col-md-4 col-md-offset-4 mx-auto mt-5 p-4 loginborder">
    		<div className="panel panel-default">
			  	<div className="panel-heading">
			    	<h3 className="panel-title">Login</h3>
			 	</div>
			  	<div className="panel-body">
        <AvForm className="register-form" >

        <div className="form-group">
        <AvField
                  name="UserName"
                  id="UserName"
                  type="text"
                  placeholder="UserName"
                  className="form-control"               
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
        <div className="checkbox">
			    	    	<label>
                  <AvField
                  name="remember"
                  id="PatientName"
                  type="checkbox"
                  placeholder="Ramesh"
                  className="form-control"               
                />
			    	    	
			    	    	</label> Remember Me
			    	    </div>

&nbsp;       
        <div>

             
                <button 
                    type="submit" 
                    className="btn btn-lg btn-success btn-block"
                                     
                >
                   Login
                </button>
                </div>
        </AvForm>
        <hr/>
                    <center><h4>OR</h4></center>
                    Don't have an account?
                    <Link to="/register">
                    <button className="btn btn-lg btn-facebook btn-block btn_color" type="submit">Sign-Up</button>
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

export default Login;
