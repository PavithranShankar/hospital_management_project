import React,{useEffect, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from "react-bootstrap/Modal";
import { AvForm, AvField } from "availity-reactstrap-validation";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { confirmAlert } from "react-confirm-alert";
import "react-datepicker/dist/react-datepicker.css";
import { useToasts } from "react-toast-notifications";
import Config from "../Config.json";
import axios from "axios";
import EventIcon from '@material-ui/icons/Event';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Doctorlist from "./Doctorlist";

const Calendarform = () => { 

  const [dateselect, setdateselect] = React.useState(false);
  const [eventselect, seteventselect] = React.useState(false);
  const[Resonforvisit,setResonforvisit]=useState("");
  const{addToast}=useToasts();
  const [Doctor_List1, setDoctor_List1] = useState([]);
  const [Reason1, setReason1] = useState([{ value: 0, label: "For FullBody Checkup" }]);
  const [start_date,setstart_date] = useState("");
  const [end_date,setend_date]= useState("");
  const [title,settitle] = useState("");
  const [doctor,setdoctor] = useState("");
  const [doctorname,setdoctorname] = useState("");
  const [startdateval,setstartdateval] = useState("");
  const [dsstarttime,setdstarttime] = useState("");
  const [dsendtime,setdsendtime] = useState("");
  const [eventedit,seteventedit]= useState(false);
  const [pastdate,setpastdate] = useState(false);
  const CURRENT_DATE = new Date();
  const [patientevent,setpatientevent] = useState([]);
  const [event,setevent] = useState({});
  const [initialized, setInitialized] = useState(false);
  const [count, setCount] = useState(0);
  const [notes,setnotes] = useState("");
  const [invalidfield,setinvalidfield] = useState(false);
  const [selectdoctor,setselectdoctor] = useState(false);
  const [appointmentid,setappointmentid] = useState("");
  const [active,setactive] = useState("");
  const [patientval,setpatientval] = useState("");
  const [blockevent,setblockevent] = useState(false);

  const [doctorlist, setdoctorlist] = useState(null);
  //console.log("curdate",CURRENT_DATE);

  let UserData = {};

  UserData = JSON.parse(localStorage.getItem("UserData"));

  //console.log("token",UserData.access_token);

  const hideModals = () => {
    setblockevent(false);
    setpatientval("");
    setdateselect(false);
    seteventselect(false);
    seteventedit(false);
    seteventedit(false);
    setpastdate(false);
    setinvalidfield(false);
    setselectdoctor(false);
    setstart_date("");
    setend_date("");
    settitle("");
    setdoctor("");
    setstartdateval("");
    setdstarttime("");
    setdsendtime("");
    setnotes("");
    setappointmentid("");
    setdoctorname("");
    setResonforvisit("");
  };

  const handelcancel = () => {
    setdateselect(false);
    setblockevent(false);
    seteventselect(false);
    seteventedit(false);
    setstart_date("");
    setend_date("");
    settitle("");
    setdoctor("");
    setstartdateval("");
    setdstarttime("");
    setdsendtime("");
    setdoctorname("");
    setResonforvisit("");
    setpatientval("");
  }

    const handleDateSelect = (arg) => {
      
      const date = arg.start;
        if(date >= CURRENT_DATE){
          if(doctorlist != null){
            setdateselect(true);
            setstart_date(arg.start);
            setend_date(arg.end);
            //console.log("arg",arg);
          } else {
            setselectdoctor(true);
          }
      } else {
        setpastdate(true);
      }
      }
    
      const handleEventClick = (arg) => {
        
        const title = arg.event.title;
        const Notes = arg.event.extendedProps.Notes;
        const Doctor = arg.event.extendedProps.DoctorID;
        const appointmentidval = arg.event.extendedProps.AppointmentID;
        const activeval = arg.event.extendedProps.IsActive;
        const reason = arg.event.extendedProps.ShortDescription;
        const startdate = arg.event.start;
        const enddate = arg.event.end;
        const dname = arg.event.extendedProps.DoctorName;
        console.log("argvalue",arg);
        if(startdate < CURRENT_DATE){
            const value = new Date(startdate);
              const endtime = new Date(enddate);
              const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
              const day = days[ value.getDay() ];
              const month = new Array();
                month[0] = "Jan";
                month[1] = "Feb";
                month[2] = "Mar";
                month[3] = "Apr";
                month[4] = "May";
                month[5] = "Jun";
                month[6] = "Jul";
                month[7] = "Aug";
                month[8] = "Sep";
                month[9] = "Oct";
                month[10] = "Nov";
                month[11] = "Dec";
                const n = month[value.getMonth()];   
              const stdate = value.getDate();
              const styear = value.getFullYear();
              //console.log("valuedate",styear);
              const v1 = value.getHours(); // => 9
              const v2 = value.getMinutes();

              const startamorpm = v1 >= 12 ? "pm" : "am";
              const hours = v1 % 12 || 12;

              var e1 = endtime.getHours();
              var e2 = endtime.getMinutes();

              var endamorpm = e1 >= 12 ? "pm" : "am";
              var hours1 = e1 % 12 || 12;
              //console.log("h",hours1);
              setstartdateval( day+", " + n + 
                " " + 
              stdate + 
              ", " + 
              styear + 
              ", " + 
              ('0' + hours).slice(-2) + 
              ":" + 
              ('0' + v2).slice(-2) + 
              " " +
              startamorpm + " - " + ('0' + hours1).slice(-2) + ":" + ('0' + e2).slice(-2) + " " + endamorpm);
              settitle(title);
              setdoctor(Doctor);
              setstart_date(startdate);
              setend_date(enddate);
              setnotes(Notes);
              setappointmentid(appointmentidval);
              setactive(activeval);
              setResonforvisit(reason);
              setdoctorname(dname);
              //console.log("dateclick11", value);
              seteventselect(true);
      }
      else{
        const value = new Date(startdate);
        const endtime = new Date(enddate);
        const v1 = value.getHours(); // => 9
          const v2 = value.getMinutes();

          const startamorpm = v1 >= 12 ? "pm" : "am";
          const hours = v1 % 12 || 12;
          setdstarttime(('0' + hours).slice(-2) + 
            ":" + 
            ('0' + v2).slice(-2) + 
            " " +
            startamorpm);

            const v3 = endtime.getHours(); // => 9
          const v4 = endtime.getMinutes();

          const endamorpm = v3 >= 12 ? "pm" : "am";
          const hours1 = v3 % 12 || 12;
          setdsendtime(('0' + hours1).slice(-2) + 
            ":" + 
            ('0' + v4).slice(-2) + 
            " " +
            endamorpm);
        settitle(title);
        setdoctor(Doctor);
        setnotes(Notes);
        setstart_date(startdate);
        setend_date(enddate);
        setappointmentid(appointmentidval);
        seteventedit(true);
        setactive(activeval);
        setResonforvisit(reason);
        setdoctorname(dname);
      }
      }
  
        const handleStartChange = (date) => {
          const day = new Date(date).getDay();
          const v1 = date.getHours(); // => 9
          const v2 = date.getMinutes();

          const startamorpm = v1 >= 12 ? "pm" : "am";
          const hours = v1 % 12 || 12;
          setdstarttime(('0' + hours).slice(-2) + 
            ":" + 
            ('0' + v2).slice(-2) + 
            " " +
            startamorpm);
          // console.log("edate",v1);
           console.log("date",date);
          setstart_date(date);
        };
        const handleEndChange = (date) => {
          const day = new Date(date).getDay();
          const v1 = date.getHours(); // => 9
          const v2 = date.getMinutes();

          const startamorpm = v1 >= 12 ? "pm" : "am";
          const hours = v1 % 12 || 12;
          setdsendtime(('0' + hours).slice(-2) + 
            ":" + 
            ('0' + v2).slice(-2) + 
            " " +
            startamorpm);
          console.log("edate",date);
          setend_date(date);
        };
  
        const Confirm = async (ev) => 
        {
          ev.preventDefault();
          const doctorname = doctorlist.value;
          const startdval = start_date;
          const enddval = end_date;
          const reason =  title;
          const reasondetails = Resonforvisit;
          const requestbody = { PatientId: "", DoctorId: "", StartTime: "", EndTime: "", ShortDescription: "",Notes: "" };
          requestbody.PatientId = UserData.Id;
          requestbody.DoctorId = doctorname;
          requestbody.StartTime = startdval;  
          requestbody.EndTime = enddval;
          requestbody.ShortDescription = reason;
          requestbody.Notes = reasondetails;
          const header = {
            Authorization: UserData.token_type + " " + UserData.access_token
          };
          //console.log("reuestbody",requestbody);
          //console.log("reuestbodyheader",header);
              if(reason !== ""){
                if(reasondetails !== ""){
                  axios.post(`${Config.BASEURL}${Config.ADD_APPOINTMENT}`,requestbody,{
                    headers:header
                  } )
                  .then((res)=> {
                    const data = res.data;
                    //console.log("added",data);
                  });
                  
                  setdateselect(false);
                  ShowEvent();
                  addToast("Appointment set Successfully!", {
                    appearance: "success",
                    autoDismiss: true
                  });
                } else {
                  setinvalidfield(true);
                }
              } else {
                setinvalidfield(true);
              }
        }
        const invalid = () => {
          setinvalidfield(false);
          setdateselect(true);
        }
        const confirmupdate =async (ev) => {
          ev.preventDefault();
          //const doctorname = doctorlist.value;
          const startdval = start_date;
          const enddval = end_date;
          const reason =  title;
          const reasondetails = Resonforvisit;
          const requestbody = { AppointmentID: "",PatientId: "", DoctorId: "", StartTime: "", EndTime: "",IsActive: "",
                               ShortDescription: "",Notes: "",CreatedDate: new Date() };
          requestbody.AppointmentID = appointmentid;
          requestbody.PatientId = UserData.Id;
          requestbody.DoctorId = doctor;
          requestbody.StartTime = startdval;
          requestbody.EndTime = enddval;
          requestbody.IsActive = active;
          requestbody.ShortDescription = reason;
          requestbody.Notes = reasondetails;
          console.log("update",requestbody);
          const header = {
            Authorization: UserData.token_type + " " + UserData.access_token
          };

          axios.post(`${Config.BASEURL}${Config.UPDATE_APPOINTMENT}`,requestbody,{
            headers:header
          } )
          .then((res)=> {
            const data = res.data;
            console.log("Update",data);
          });
          
          ShowEvent();
          addToast("Appointment Updated Successfully!", {
            appearance: "success",
            autoDismiss: true
          });
          seteventedit(false);

        }


          const ShowEvent = async () => {

            const header = {
              Authorization: UserData.token_type + " " + UserData.access_token
            };
            if(doctorlist != null){
            const data = doctorlist.value;
            axios.get(`${Config.BASEURL}${Config.DOCTOR_APPOINTMENT}${data}`,
            {
              headers:header
            })
            .then((res) => {
              const value = 
              res.data.map((d) => {
                return{
                  ...d,
                  id:d.AppointmentID,
                  title:d.ShortDescription,
                  description:d.Notes,
                  start:d.StartTime,
                  end:d.EndTime,
                  IsActive:d.IsActive,
                  PatientID:d.PatientID,
                  DoctorID:d.DoctorID
                }
              });
              const patid = value.map(item => {return item.PatientID});
              const did = value.map(item => {return item.DoctorID});
              let color = "";
              if(patid === UserData.Id){
                color = "blue";
              } 
              if(patid != UserData.Id) {
                color = "red";
              }
              setpatientval(patid);
              setpatientevent(value);
            });
            
          } else {
            const data = UserData.Id;
            axios.get(`${Config.BASEURL}${Config.PATIENT_APPOINTMENT}${data}`, 
            {
              headers:header
            })
            .then((res) => {
              const value = 
              res.data.map((d) => {
                return{
                  ...d,
                  id:d.AppointmentID,
                  title:d.ShortDescription,
                  description:d.Notes,
                  start:d.StartTime,
                  end:d.EndTime,
                  IsActive:d.IsActive,
                  PatientID:d.PatientID,
                  DoctorID:d.DoctorID
                }
              });
               setpatientevent(value);
            });
          }
            setInitialized(true);
          }

          const handleTitleChange = (ev) => settitle(ev.target.value);


          // useEffect(()=>{
          //   if (!initialized) {
          //     ShowEvent();
          //     getdoctorlist();
          //   }
          // },[doctorlist]);
          useEffect(()=>{
              ShowEvent();
          },[doctorlist]);
          //console.log("event",doctorlist);          
          //console.log("eventpatient",patientevent);
        

    return (
      <div>
        
        <div id='calendar-container'>
          <div style={{marginTop:"20px",marginLeft:"197px",marginRight:"197px"}}>
                  <Doctorlist values={doctorlist} onChange={(val) => setdoctorlist(val)} />
                </div>
            <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                select={handleDateSelect}
                eventClick={handleEventClick}
                events={patientevent}
                //eventContent={patientevent}
            />
            <div>
              <p>Footer</p>
            </div>
      </div>
      <div>
      <Modal show={dateselect} onHide={hideModals} className="sch-modal">
        <Modal.Header closeButton>
          <h5>Create Doctor Appointment</h5>
        </Modal.Header>
        <Modal.Body style={{paddingLeft: "30px"}}>
        <AvForm className="register-form" onSubmit={Confirm} >
                
                <div className="form-group">
              <label style={{marginBottom:"-0.5rem"}}><b>Start</b></label>
                <br />
                <DatePicker
                        className="dt_box"
                        selected={start_date}
                        timeIntervals={30}
                        showTimeSelect
                        required
                        onChange={handleStartChange}
                         ></DatePicker>
                         <EventIcon />
                         <input 
                         className="lb_box"
                         type="text"
                         value={dsstarttime || "12:00 am"}
                         readOnly={true}
                          /><AccessTimeIcon />
                </div>
                
                <div className="form-group">
              <label style={{marginBottom:"-0.5rem"}}><b>End</b></label>
                <br />
                <DatePicker
                        className="dt_box"
                        selected={end_date}
                        timeIntervals={30}
                        showTimeSelect
                        required
                        onChange={handleEndChange} 
                        />
                        <EventIcon />
                        <input
                          className="lb_box"
                          type="text"
                          value={dsendtime || "12:00 am"}
                          readOnly={true}
                          /><AccessTimeIcon />
                </div>

                <div className="form-group"><b>Reason</b>
                  <input type="text" 
                    className="Title"
                    placeholder="Enter Reason"
                    value={title || ""}
                    onChange={handleTitleChange} />
                </div>
              <br/>

        <div className="form-group">
        <AvField
                name="Reason_Box"
                cols="3"
                rows="3"
                id="Reason_Box"
                errorMessage="Please enter Reason in Detail"
                type="textarea"
                className="form-control"
                placeholder="Please enter Reason in Detail"
                value={notes}
                onChange={e => {
                    setResonforvisit(e.target.value);
                }}
                validate={{
                  required: { value: true }
                }}
              />
              </div>
              <div className="form-group mx-auto" style={{textAlign:"end"}}> 
              <button style={{backgroundColor:" #0078d4"}}
                    type="submit" 
                    className="btn btn-primary "        
                >
                    Set Appointment
                </button>
                <button
                  type="button" 
                  style={{backgroundColor:" #0078d4", width: "91px",height: "38px", marginLeft: "15px"}}
                  onClick={handelcancel} 
                  className="btn btn-primary "
                  >Cancel</button>
              </div>
        </AvForm>
        </Modal.Body>
      </Modal>
      </div>
      <div>
      <Modal show={eventselect} onHide={hideModals} className="sch-modal">
        <Modal.Header closeButton>
          <h5>Schedule Info</h5>
        </Modal.Header>
        <Modal.Body style={{paddingLeft: "30px"}}>
        <AvForm className="register-form" onSubmit={handelcancel} >

                <div className="form-group">
                <span><b>Reason   :</b> {title} </span>{" "}
                </div>
                <div className="form-group">
                <span><b>Reason in Detail   :</b> {notes} </span>{" "}
                </div>
                <div className="form-group">
                <span><b>Doctor :</b> {doctorname} </span>{" "}
                </div>

                <div className="form-group">
                <span><b>Appointment Timing :</b> {startdateval} </span>{" "}
                </div>
                <div className="form-group">
                </div>
              <div className="form-group mx-auto" style={{textAlign:"center"}}> 
              <button style={{backgroundColor:" #0078d4"}}
                    type="submit" 
                    className="btn btn-primary "  
                    onClick={handelcancel}      
                >
                    Cancel
                </button>
              </div>
        </AvForm>
        </Modal.Body>
      </Modal>
      </div>
      <div>
      <Modal show={eventedit} onHide={hideModals} className="sch-modal">
        <Modal.Header closeButton>
          <h5>Edit Doctor Appointment</h5>
        </Modal.Header>
        <Modal.Body style={{paddingLeft: "30px"}}>
        <AvForm className="register-form" onSubmit={confirmupdate} >
                <div className="form-group">
              <label style={{marginBottom:"-0.5rem"}}><b>Start</b></label>
                <br />
                <DatePicker
                        className="dt_box"
                        selected={start_date}
                        timeIntervals={30}
                        showTimeSelect
                        required
                        onChange={handleStartChange}
                         /><EventIcon />
                         <input 
                         type="text"
                         className="lb_box"
                         value={dsstarttime || "12:00 am"}
                         readOnly={true}
                         disabled={true}
                          /><AccessTimeIcon />
                </div>
                
                <div className="form-group">
              <label style={{marginBottom:"-0.5rem"}}><b>End</b></label>
                <br />
                <DatePicker
                        className="dt_box"
                        selected={end_date}
                        timeIntervals={30}
                        showTimeSelect
                        required
                        onChange={handleEndChange} 
                        /><EventIcon />
                        <input 
                          type="text"
                          className="lb_box"
                          value={dsendtime || "12:00 am"}
                          readOnly={true}
                          /><AccessTimeIcon />
                </div>
                <div className="form-group"><b>Reason</b>
                  <input type="text" 
                    className="Title"
                    placeholder="Schedule Info"
                    value={title || ""}
                    onChange={handleTitleChange} />
                </div>
              <br/>
        <div className="form-group">
        <AvField
                name="Reason_Box"
                cols="3"
                rows="3"
                id="Reason_Box"
                errorMessage="Please enter Reason in Detail"
                type="textarea"
                className="form-control"
                placeholder="Please enter Reason in Detail"
                value={notes || ""}
                onChange={e => {
                    setResonforvisit(e.target.value);
                }}
                validate={{
                  required: { value: true }
                }}
              />
              </div>
              <div className="form-group mx-auto" style={{textAlign:"end"}}> 
              <button style={{backgroundColor:" #0078d4", width:"100px"}}
                    type="submit" 
                    className="btn btn-primary"        
                >
                    Update 
                </button>
                <button
                  type="button" 
                  style={{backgroundColor:" #0078d4", width: "91px",height: "38px", marginLeft: "15px"}}
                  onClick={handelcancel} 
                  className="btn btn-primary "
                  >Cancel</button>
              </div>
        </AvForm>
        </Modal.Body>
      </Modal>
      </div>
      <div>
      <Modal show={pastdate} onHide={hideModals} className="sch-modal">
        <Modal.Header closeButton>
          <h5>Warning !</h5>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ color: "blue" }}>
            Schedule cannot create for past date.
          </h5>
        </Modal.Body>
      </Modal>
      </div>
      <div>
      <Modal show={invalidfield} className="sch-modal">
        <Modal.Header>
          <h5>Warning !</h5>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ color: "blue" }}>
            Schedule cannot create for past date.
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={invalid}
            >Cancel</button>
        </Modal.Footer>
      </Modal>
      </div>
      <div>
      <Modal show={selectdoctor} onHide={hideModals} className="sch-modal">
        <Modal.Header closeButton>
          <h5>Warning !</h5>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ color: "blue" }}>
            Please select a doctor
          </h5>
        </Modal.Body>
      </Modal>
      </div>
      <div>
      <Modal show={blockevent} onHide={hideModals} className="sch-modal">
        <Modal.Header closeButton>
          <h5>Warning !</h5>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ color: "blue" }}>
            Event already booked
          </h5>
        </Modal.Body>
      </Modal>
      </div>
      </div>
      
    )
  }

export default Calendarform;