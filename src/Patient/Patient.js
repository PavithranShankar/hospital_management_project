import React, { useState } from "react";
import Select from "react-select";
import Calendar from 'react-calendar';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useToasts } from "react-toast-notifications";
import { AvForm, AvField } from "availity-reactstrap-validation";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";






const Patient = () => {
  const [Resonforvisit, setResonforvisit] = useState("");
  const { addToast } = useToasts();
  const [Date_value, setDate_value] = useState(new Date("Wed Oct 09 2020 23:30:00"))


  const [Doctor_List1, setDoctor_List1] = useState([{ value: 0, label: "Dr.Vignesh" }]);
  const [Reason1, setReason1] = useState([{ value: 0, label: "For FullBody Checkup" }]);


  const Doctor_List = [
    { value: 0, label: "Dr.Vignesh" },
    { value: 1, label: "Dr.Aravind" },
    { value: 2, label: "Dr.Raja" },
    { value: 3, label: "Dr.Rajinikanth" },
    { value: 4, label: "Dr.Shankar" },
    { value: 5, label: "Dr.Vinoth" }
  ];

  const Reason_List = [
    { value: 0, label: "For FullBody Checkup" },
    { value: 1, label: "For Normal Checkup" },
    { value: 2, label: "For Heart" },
    { value: 3, label: "For Depression" },
    { value: 4, label: "For Headache" },
    { value: 5, label: "For Bone" }
  ];

  console.log("Doctor_List", Doctor_List)

  const handleDocOption = Doc => {

    setDoctor_List1(Doc);

    console.log("Doctor_List1", Doc)
  };

  const handleResonOption = e => {

    setResonforvisit(e.target.value);

    console.log("Reason", e)
  };

  const handleReasonOption = ReasonSelect => {

    setReason1(ReasonSelect);

    console.log("Reason", ReasonSelect)
  };

  const ConfirmMeeting = (e) => {

    addToast("Appointment set Successfully!", {
      appearance: "success",
      autoDismiss: true
    });
  }

  const Confirm = () => {

    confirmAlert({
      title: "Confirm",
      message: "Are you sure Do you want to Schedule the Appointment",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            ConfirmMeeting();
          }
        },
        {
          label: "No",
          onClick: () => {
            window.scrollTo(0, 0);
          }
        }
      ]
    });

  }



  const handle_time_change = (date_value) => {
    setDate_value(date_value)

    console.log("datevalue", date_value);
  }

  return (
    <React.Fragment>
      <div>
        <div className="container ">
          <div className="row ">
            <div className="col-md-4 col-md-offset-4 mx-auto mt-5 p-4 loginborder">
              <div className="panel panel-default">

                <div className="panel-heading">
                  <h3 className="panel-title">Doctor Appointment</h3>
                </div>

                <div className="panel-body">
                  <AvForm className="register-form" onSubmit={Confirm}>
                    <div className="register-form-page">Patient Name
                       <br />
                      <AvField
                        name="PatientName"
                        id="PatientName"
                        type="text"
                        value="Suresh"
                        placeholder="Patient Name"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group ">Schedule Date
                       <br />
                      <DatePicker
                        className="dt_box"
                        selected={Date_value}
                        timeIntervals={30}
                        showTimeSelect
                        onChange={handle_time_change} />

                    </div>

                    <div className="form-group">Doctor
                <Select
                        className="selectWidth"
                        components={{
                          IndicatorSeparator: () => null,
                          dropdownIndicator: defaultStyles => ({
                            ...defaultStyles,
                            '& svg': { display: 'none' }
                          })
                        }}
                        value={Doctor_List1}
                        onChange={handleDocOption}
                        clearable={false}
                        searchable={true}
                        options={Doctor_List}
                      ></Select>
                    </div>


                    <div className="form-group">Reason
                <Select
                        className="selectWidth"
                        components={{
                          IndicatorSeparator: () => null,
                          dropdownIndicator: defaultStyles => ({
                            ...defaultStyles,
                            '& svg': { display: 'none' }
                          })
                        }}
                        value={Reason1}
                        onChange={handleReasonOption}
                        clearable={false}
                        searchable={true}
                        options={Reason_List}
                      ></Select>
                    </div>

                    <div className="form-group">Reason in Detail
                     <br />
                      <AvField
                        name="Reason_Box"
                        cols="3"
                        rows="3"
                        id="Reason_Box"
                        errorMessage="Please enter Reason in Detail"
                        type="textarea"
                        className="form-control"
                        placeholder="Please enter Reason in Detail"
                        value={Resonforvisit}
                        onChange={e => {
                          setResonforvisit(e.target.value);
                        }}
                        validate={{
                          required: { value: true }
                        }}
                      />
                    </div>

                    <div className="form-group mx-auto">
                      <button
                        type="submit"
                        className="btn btn-primary "
                      >
                        Set Appointment
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

export default Patient;

