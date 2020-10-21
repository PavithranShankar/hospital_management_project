import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {Link,useHistory} from "react-router-dom"
import { useToasts } from "react-toast-notifications";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToast } = useToasts();
  const history =useHistory();

  const redirect=()=>
  {
    history.push({
      pathname: "/",
     
    });
  }

  const handleSubmit = async e => {
    
    e.preventDefault();
    if(email==="")
    {
      addToast("Plz Enter the Valid UserName!", {
        appearance: "error",
        autoDismiss: true
      });
    }
    else if(password==="")
    {
      addToast("Plz Enter the Valid UserName!", {
        appearance: "error",
        autoDismiss: true
      });
    }
    else if((email!=="")&&(password!==""))
    {
      addToast("Logged In Successfully!", {
      appearance: "success",
      autoDismiss: true
    });
    redirect();

    }
    else 
    {
       addToast("Plz Check the UserName and Password!", {
      appearance: "error",
      autoDismiss: true
    });

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
                  onChange={(e)=>{setEmail(e.target.value)}}
                  className="form-control"               
                />
			    		    
			  </div>
        <div className="form-group">
        <AvField
                  name="Password"
                  id="Password"
                  type="Password"
                  placeholder="Password"
                  onChange={(e)=>{setPassword(e.target.value)}}
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
                    onClick={handleSubmit}
                                     
                >
                   Login
                </button>
                </div>
        </AvForm>
        <hr/>
                    <center><h4>OR</h4></center>
                    Don't have an account?
                    <Link to="/Register_as_Patient">
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
