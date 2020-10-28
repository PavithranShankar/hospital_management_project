import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {Link,useHistory} from "react-router-dom"
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import config from "../Config.json";
import qs from "qs";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToast } = useToasts();
  const history =useHistory();

  let Response;



  const redirect=()=>
  {
    history.push({
      pathname: "/",     
    });
  }

  let request_data=
  {
    username:email,
    password:password,
    grant_type:"password"
  }

  const Header = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  console.log("reqdata",qs.stringify(request_data))



  const handleSubmit =  e => {
    debugger;
    
    // e.preventDefault();
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
    // else if((email!=="")&&(password!==""))
    // {
    //   addToast("Logged In Successfully!", {
    //   appearance: "success",
    //   autoDismiss: true
    // });
    // redirect();

    // }

   
    else 
    {
      debugger;
      let fd=new FormData();
      
      let auth= localStorage.setItem("isAuthenticated", "True");

      let User= localStorage.setItem("User", "Patient");
     

      console.log("auth",auth)
      console.log("User",User)


      fd.append("username",email);
      fd.append("password",password);
      fd.append("grant_type","password")

      console.log("FD",request_data);
      Response= axios.post(`${config.BASEURL}${config.LOGIN}`,qs.stringify(request_data),Header)
      .then(res=>
        {


          addToast("Logged In Successfully!!!", {
              appearance: "success",
              autoDismiss: true
            });

            redirect();

            window.location.reload();
            
            console.log("Login_Success_Response",res.data)

        })
        .catch(err=>
          {
            console.log("Login_Error_Response",err.response)


            addToast("Plz Check the UserName and Password!", {
              appearance: "error",
              autoDismiss: true
            });
          });     
    }
       
};
console.log("Login_Response",Response);

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
        <AvForm className="register-form"  onSubmit={handleSubmit}>

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
