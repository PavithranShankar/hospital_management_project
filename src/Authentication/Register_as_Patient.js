import React,{useState} from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {Link,useHistory} from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import config from "../Config.json";




const Register_as_Patient=()=>
{
  const [Firstname,setFirstname]=useState("");
  const [Lastname,setLastname]=useState("");
  const [Email,setEmail]=useState("");  
  const [Password,setPassword]=useState("");
  const [Confirmpassword,setConfirmpassword]=useState("");
  const {addToast}=useToasts();
  const history=useHistory();


  console.log("Register",(`${config.BASEURL}${config.PATIENT_REGISTER}`));

  const redirect=()=>
  {
    history.push({
      pathname: "/calendar",
     
    });
  }


  let request_data=
  {
    firstname:Firstname,
    lastname:Lastname,
    username:Email,
    pwd:Password
  }
  


  const handle_Submit=(e)=>
  {
    
    debugger;
    
    e.preventDefault();
    if(Firstname==="")
  {
    addToast("Plz Enter the Valid Firstname!", {
      appearance: "error",
      autoDismiss: true
    });
  }
  else if(Lastname==="")
  {
    addToast("Plz Enter the Valid Lastname!", {
      appearance: "error",
      autoDismiss: true
    });
  }
  else if(Email==="")
  {
    addToast("Plz Enter the Valid Email!", {
      appearance: "error",
      autoDismiss: true
    });
  }
  else if (Email === "") {
   
    addToast("Plz Enter the Valid Email!", {
      appearance: "error",
      autoDismiss: true
    });
     
  }
  else if(Password==="")
  {
    addToast("Plz Enter the Password", {
      appearance: "error",
      autoDismiss: true
    });
  }
  else if(Confirmpassword==="")
  {
    addToast("Plz Enter the Confirmpassword", {
      appearance: "error",
      autoDismiss: true
    });
  }
  else{

      Response= axios.post(`${config.BASEURL}${config.PATIENT_REGISTER}`,request_data)
      .then(res=>
        {
          addToast("Registration Successfully Completed!!!", {
              appearance: "success",
              autoDismiss: true
            });

            console.log("Registration_Success_Response",res.data)

            redirect();
            

        })
        .catch(err=>
          {
            console.log("Registration_Error_Response",err.response)


            addToast("Error in registering as Patient. Please try again after some time ", {
              appearance: "error",
              autoDismiss: true
            });
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
          <h3 className="panel-title">Sign Up as Patient</h3>
       </div>
        <div className="panel-body">
      <AvForm className="register-form" >

      <div className="form-group">
      <AvField
                name="FirstName"
                id="FirstName"
                type="text"
                value={Firstname}
                onChange={(e)=>
                {
                  setFirstname(e.target.value)
                }}
                placeholder="FirstName"
                className="form-control"               
              />
                
      </div>
            <div className="form-group">
      <AvField
                name="LastName"
                id="LastName"
                type="text"
                value={Lastname}
                onChange={(e)=>
                {
                  setLastname(e.target.value)
                }}
                placeholder="LastName"
                className="form-control"               
              />
                
      </div>
            

            <div className="form-group">
            <AvField
            name="emailProp"
            type="email"
            value={Email}
                onChange={(e)=>
                {
                  setEmail(e.target.value)
                }}
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
                value={Password}
                onChange={(e)=>
                {
                  setPassword(e.target.value)
                }}
                placeholder="Password"
                className="form-control"               
              />
                
      </div>
            <div className="form-group">
      <AvField
                name="ConfirmPassword"
                id="ConfirmPassword"
                type="Password"
                value={Confirmpassword}
                onChange={(e)=>
                {
                  setConfirmpassword(e.target.value)
                }}
                placeholder="ConfirmPassword"
                className="form-control"               
              />
                
      </div>
  
      <div>
          
              <button 
                  type="submit" 
                  className="btn btn-lg btn-success btn-block"        
                  onClick={handle_Submit}                             
              >
                 Sign Up as Patient
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

export default Register_as_Patient;