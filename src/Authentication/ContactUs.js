import React from "react";
import Datepicker from 'react-date-picker'
import { AvForm, AvField } from "availity-reactstrap-validation";
import {Link} from "react-router-dom";



const ContactUs=()=>
{


    
    return(
        <React.Fragment>
    <div>
    <div className="container ">
    <div className="row ">
    	<div className="col-md-4 col-md-offset-4 mx-auto mt-5 p-4 loginborder">
    		<div className="panel panel-default">
			  	<div className="panel-heading">
			    	<h3 className="panel-title">Contact Us</h3>
			 	</div>
			  	<div className="panel-body">
        <AvForm className="register-form" >

        <div className="form-group">
        <AvField
                  name="Name"
                  id="Name"
                  type="text"
                  placeholder="Name"
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
                  name="PhoneNumber"
                  id="PhoneNumber"
                  type="number"
                  placeholder="PhoneNumber"
                  className="form-control"               
                />
			    		    
			  </div>
              <div className="form-group">
              <AvField
                name="message"
                cols="3"
                rows="3"
                id="message"
                errorMessage="Please enter the Message"
                type="textarea"
                className="form-control"
                placeholder="Please enter the Message"
                
              />
			    		    
			  </div>

        
        <div>
            
                <button 
                    type="submit" 
                    className="btn btn-lg btn-success btn-block"
                                     
                >
                   Submit
                </button>
                </div>
        </AvForm>
       
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      
        </React.Fragment>

       
    );
};

export default ContactUs;