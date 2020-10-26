import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useToasts } from "react-toast-notifications";
import Select from "react-select";

const ProfileForPatient = (props) => {
  
  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userid,setuserid]=useState("");
  // const [age,setage]=useState("");
  const [age, setage] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [imagee, setimage] = useState("");
  const [imagefilename, setimagefilename] = useState("");
  const [newimage, setnewimage] = useState("");

  const[gender,setgender]=useState([{value:0,label:"Male"}]);

  const gender_list=[
      {value:0,label:"Male"},
      {value:1,label:"Female"}
  ]

  const { addToast } = useToasts();


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

 

  const MainFunction = (e) =>
   {
   
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
    } else if (age.length > 110 || age.length < 110 || age==null) {
      addToast("Please enter the valid Mobile Number", {
        appearance: "error",
        autoDismiss: true,  
      });
    } else {

      setimagefilename("");
      setimage("");

      addToast("Profile updated successfully!", {
        appearance: "success",
        autoDismiss: true,
      });
      history.push("/");
    }
  };
  
  

  return (
    <div className="d-flex justify-content-center align-items-center login-container">
      <div className="login-inner">
        <div id="logreg-forms" className="pro-form">
          <AvForm className="form-signin" >
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
            <button className="btn btn-primary btn-block" type="submit">
              Update
            </button>
          </AvForm>
        </div>
      </div>
    </div>
  );
};

export default ProfileForPatient;
