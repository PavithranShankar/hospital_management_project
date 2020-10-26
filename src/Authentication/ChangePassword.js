import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { AvForm, AvField } from "availity-reactstrap-validation";

const ChangePassword = props => {
  const history = useHistory();
  const { addToast } = useToasts();
  const [oldPassword, setoldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

 

  const validate = () => {
    const errors = {};

    if (password !== "")
      if (
        !new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6})"
        ).test(password)
      )
        errors.passwordSyntax =
          "Please provide a password with 6 characters which contain at least one numeric digit, one uppercase, one lowercase letter and one special character.";

    return Object.keys(errors).length === 0 ? null : errors;
  };
  const OldPwdValid = error => {
    let arr = [];
    let errorMsg = "System Error...";
    let erro = JSON.stringify(error.response);
    erro = JSON.parse(erro);
    Object.keys(erro).map(key => {
      if (key === "data") arr.push(erro[key]);
    });
    if (arr.length !== 0) {
      erro = JSON.stringify(arr[0]);
      erro = JSON.parse(erro);
      errorMsg = Object.keys(erro).map(m => {
        return erro[m];
      });

      addToast(errorMsg.toString(), {
        appearance: "error",
        autoDismiss: true
      });
    } else
      addToast(errorMsg.toString(), {
        appearance: "error",
        autoDismiss: true
      });
  };
  const handleSubmit = e => {
   
      e.preventDefault();
      const erors = validate();
      if (erors) {
        Object.keys(erors).map(key => {
          addToast(erors[key], {
            appearance: "error",
            autoDismiss: true
          });
        });
      } else if (oldPassword === "") {
        addToast("Please enter the Old Password", {
          appearance: "error",
          autoDismiss: true
        });
      } else if (password === "") {
        addToast("Please enter the Password", {
          appearance: "error",
          autoDismiss: true
        });
      } else if (confirmPassword === "") {
        addToast("Please enter the Confirm Password", {
          appearance: "error",
          autoDismiss: true
        });
      } else {
        if (password === confirmPassword) {
          
              handleChangePasswordResponse();
           
        } else {
          addToast("Password and repeat password does not match!", {
            appearance: "error",
            autoDismiss: true
          });
        }
      }
    };
  

  const handleChangePasswordResponse = () => {
    addToast("Password changed successfully!", {
      appearance: "success",
      autoDismiss: true
    });
    history.push("/");
  };
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center login-container">
        <div className="login-inner">
          <div id="logreg-forms">
            <AvForm className="form-signin pro-form" onSubmit={handleSubmit}>
              <h1
                className="h3 mb-3 font-weight-normal"
                style={{ textAlign: "center" }}
              >
                {" "}
                Change your Password
              </h1>
              <AvField
                name="inputOldPwd"
                type="password"
                errorMessage="Please enter the Old Password"
                id="inputOldPwd"
                className="form-control"
                placeholder="Password"
                placeholder="Old Password"
                autoComplete="off"
                value={oldPassword}
                onChange={e => {
                  setoldPassword(e.target.value);
                }}
                validate={{
                  required: { value: true },
                  //pattern: {value: '^[A-Za-z0-9]+$'},
                  minLength: { value: 1 },
                  maxLength: { value: 35 }
                }}
              />

              <AvField
                name="inputPassword"
                type="password"
                errorMessage="Please enter the Password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                validate={{
                  required: { value: true },
                  //pattern: {value: '^[A-Za-z0-9]+$'},
                  minLength: { value: 1 },
                  maxLength: { value: 35 }
                }}
              />

              <AvField
                name="inputConfirmPassword"
                type="password"
                errorMessage="Please enter the Confirm Password "
                id="inputConfirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => {
                  setconfirmPassword(e.target.value);
                }}
                validate={{
                  required: { value: true },
                  //pattern: {value: '^[A-Za-z0-9]+$'},
                  minLength: { value: 1 },
                  maxLength: { value: 35 }
                }}
              />

              <button type="submit" className="btn btn-success btn-block">
                Change Password
              </button>
            </AvForm>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChangePassword;
