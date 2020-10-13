import React from "react";
import Datepicker from 'react-date-picker'



const Register=()=>
{
    return(
       <form className="register-form" >
           <h4 className="tack-subheader-h4">Registration Form</h4>
           <br />
           <div className="register-form-page">
                    <label htmlFor="exampleInputfname">First name</label>
                    <input type="fname" 
                        className="register-text" 
                        id="fname" 
                        placeholder="First name"
                    />
                </div>
                <div className="register-form-page">
                    <label htmlFor="exampleInputlname">Last name</label>
                    <input type="lname" 
                        className="register-text" 
                        id="lname" 
                        placeholder="Last name"
                    />
                  </div>

                     <div className="register-form-page">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" 
                       className="register-text" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
                </div>
                {/* <div className="register-form-page">
                    <label htmlFor="exampleInputDate">Date of birth</label>

                <Datepicker
                 name="DOB"
                 errorMessage="Please enter the DOB"
                 type="date"
                 id="dob"
                 required
                 className="register-text"
                 placeholder="DOB" 
                />
                </div>

           */}
                <div className="register-form-page">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="register-text" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="register-form-page">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="register-text" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <br />
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
    );
};

export default Register;