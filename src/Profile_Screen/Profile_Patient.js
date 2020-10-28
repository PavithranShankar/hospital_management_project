import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useToasts } from "react-toast-notifications";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactTooltip from "react-tooltip";
import Moment from "moment";
import axios from "axios";
import config from "../Config.json";


const ProfileForPatient = (props) => {
  
  const history = useHistory();

  let User_Data=JSON.parse(localStorage.getItem("UserData"));

  console.log("User_Data",User_Data)
  const [firstname, setFirstname] = useState(User_Data.Firstname);
  const [lastname, setLastname] = useState(User_Data.Lastname);
  const [userid,setuserid]=useState(User_Data.Id);
  // const [age,setage]=useState("");
  const [age, setage] = useState("25");
  const [email, setEmail] = useState(User_Data.Username);
  const [token, setToken] = useState(User_Data.access_token);
  const [imagee, setimage] = useState("");
  const [imagefilename, setimagefilename] = useState("");
  const [newimage, setnewimage] = useState("");
  const [Date_value, setDate_value] = useState("");
  const today = new Date();
  const dateMDY = Moment(today).format("YYYY-MM-DD");
  const min_date = new Date("1900-01-01");
  const min_dob = Moment(min_date).format("YYYY-MM-DD");

  const[gender,setgender]=useState([
    {value:0,label:User_Data.Gender}]);

  const gender_list=[
      {value:0,label:"Male"},
      {value:1,label:"Female"}
  ]

  const { addToast } = useToasts();

  const handle_time_change = (date_value) => {
    setDate_value(date_value.target.value);

    //console.log("datevalue", date_value);
  }

  console.log("datevalue", Date_value);

  const handleGenOption = Gen => {

    setgender(Gen);

    console.log("gender", Gen)
  };

  const imageselect = (e) => {
    
    if (e.target.files[0] !== undefined) {
      setimage(e.target.files[0]);
      setimagefilename(e.target.files[0].name);
      setnewimage(URL.createObjectURL(e.target.files[0]));
    
  }
  
  };

  const mob_num = (e) => {
    setage(e.target.value);
  };

 

  const handleSubmit = (e) =>
   {
     e.preventDefault();
   
    if (firstname === "") {
      addToast("Please enter the First Name", {
        appearance: "error",
        autoDismiss: true,
      });
    } else if (lastname === "") {
      addToast("Please enter the Last Name", {
        appearance: "error",
        autoDismiss: true,
      });
    } else if (age.length > 2 || age.length < 2 || age==null) {
      addToast("Please enter the valid Mobile Number", {
        appearance: "error",
        autoDismiss: true,  
      });
    }
      else if (Date_value === "") {
        addToast("Please enter the Date Of Birth", {
          appearance: "error",
          autoDismiss: true,
        });
      
      
    } else {
      
      let gen=gender.map((i)=>
      {
       return i.label
      })


      console.log("gen",gen);

      let gen1=gen[0];
    
      console.log("gen1",gen1);

      let requestBody={};

      requestBody={
        AccountID:userid,
        Firstname:firstname,
        Lastname:lastname,
        DoB:Date_value,
        Age:age,
        Gender:gen[0]
      }

      axios.post(`${config.BASEURL}${config.UPDATE_PROFILE}`,requestBody)
      .then(res=>
        {
          console.log("requestBody",requestBody)
          setimagefilename("");
          setimage("");
          
          console.log("Profile_Update_Success_Response",res.data);

          addToast("Profile updated successfully!", {
            appearance: "success",
            autoDismiss: true,
          });
          history.push("/");
        })
        .catch(err=>
          {

            console.log("Response",err.response);

            addToast("Profile Not Updated!", {
              appearance: "error",
              autoDismiss: true,
            });

          })

     
    }
  };
  
  

  return (
    <div className="d-flex justify-content-center align-items-center login-container">
      <div className="login-inner">
        <div id="logreg-forms" className="pro-form">
          <AvForm className="form-signin" onSubmit={handleSubmit} >
            <h1 className="h3" style={{ textAlign: "center" }}>
              Profile
            </h1>
            <AvField
              name="firstname"
              type="text"
              errorMessage="Please enter the First Name"
              id="firstname"
              className="form-control"
              placeholder="First Name"
              autoFocus
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              validate={{
                required: { value: true },
                //pattern: {value: '^[A-Za-z0-9]+$'},
                minLength: { value: 1 },
                maxLength: { value: 150 },
              }}
            />

            <AvField
              name="lastname"
              type="text"
              errorMessage="Please enter the Last Name"
              id="lastname"
              className="form-control"
              placeholder="Last Name"
              required
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              validate={{
                required: { value: true },
                //pattern: {value: '^[A-Za-z0-9]+$'},
                minLength: { value: 1 },
                maxLength: { value: 150 },
              }}
            />
            
            <div className="form-group row col-sm-12">
              <div className="col-sm-11 pr-0"> 

              
            <AvField
                    name="DOB"
                    errorMessage="Please enter the DOB"
                    type="date"
                    id="dob"
                    required
                    className="form-control"
                    placeholder="DOB"
                    value={Date_value}
                    onChange= {handle_time_change
                      
                    }
                    
                    validate={{
                      required: { value: true },
                      dateRange: {
                        // format: "MM/DD/YYYY",
                        start: { value: "01/01/1900" },
                        end: { value: today }
                      }
                    }}
                    
                  />
                  </div>
                  <div className="col-sm-1 px-1">
                  <label
                    style={{ marginTop: ".5rem" }}
                    data-tip
                    data-for="DoBTip"
                  >
                    <i className="fa fa-question-circle fa-2x"></i>
                  </label>

                  <ReactTooltip id="DoBTip" place="top" effect="solid">
                    Date of Birth
                  </ReactTooltip>
                  </div>
                  </div>

                {/* <div className="form-group ">                    
                      <DatePicker
                      placeholder="Date Of Birth"
                        className="form-control"
                        selected={Date_value}
                        onChange={handle_time_change} />
                        &nbsp;
                        <label
                    style={{ marginTop: ".5rem" }}
                    data-tip
                    data-for="DoBTip"
                  >
                    <i className="fa fa-question-circle fa-2x"></i>
                  </label>

                  <ReactTooltip id="DoBTip" place="top" effect="solid">
                    Date of Birth
                  </ReactTooltip>


                    </div> */}

            <AvField
              name="age"
              type="number"
              errorMessage="Please enter the valid age"
              id="age"
              required
              className="form-control"
              placeholder="Age"
              required
              value={age}
              onChange={(e) => {
                setage(e.target.value);  
              }}
              // max={9999999999}
              validate={{
                required: { value: true },
                pattern: { value: "^[0-9]+$" },
                minLength: { value: 10 },
                maxLength: { value: 10 },
              }}
            />
            <div className="form-group">
                <Select
                        className="selectWidth"
                        components={{
                          IndicatorSeparator: () => null,
                          dropdownIndicator: defaultStyles => ({
                            ...defaultStyles,
                            '& svg': { display: 'none' }
                          })
                        }}
                        
                        placeholder="Gender"
                        onChange={handleGenOption}
                        clearable={false}
                        value={gender}
                        searchable={true}
                        options={gender_list}
                      ></Select>
                    </div>
            <div className="user-vale alert alert-primary">
              {" "}
              <input
                id="user-email"
                className="form-control lblEmail"
                value={email}
                readOnly
              />
            </div>
            <div className="skp-service-box">
              <div className="d-flex justify-content-between bd-highlight mb-3 profile-service-bottom">
                <div className="p-2 bd-highlight">
                  <span>
                    <img
                      src={newimage}
                      width="100"
                      height="100"
                      className="rounded-circle"
                    ></img>
                    {/* {userimg()} */}
                    <br />
                  </span>
                </div>
                <div className="p-2 bd-highlight d-flex align-items-center btn-orange">
                  <label>
                    <input
                      type="file"
                      id="image"
                      style={{ display: "none" }}
                      accept="image/png, image/jpeg"
                      onChange={imageselect}
                    />

                    <span htmlFor="image" className="btn btn-primary mx-auto">
                      Profile Photo Upload
                    </span>
                  </label>
                  <br />
                  <span>
                    <label>{imagefilename}</label>
                  </span>
                </div>
              </div>
            </div>
            <br />
            <button className="btn btn-primary btn-block" type="submit" >
              Update
            </button>
          </AvForm>
        </div>
      </div>
    </div>
  );
};

export default ProfileForPatient;
