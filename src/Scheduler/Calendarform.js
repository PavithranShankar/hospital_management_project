import React,{useState} from 'react';
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

const Calendarform = () => { 

  const [dateselect, setdateselect] = React.useState(false);
  const [eventselect, seteventselect] = React.useState(false);
  const[Resonforvisit,setResonforvisit]=useState("");
  const{addToast}=useToasts();
  const [Doctor_List1, setDoctor_List1] = useState([{ value: 0, label: "Dr.Vignesh" }]);
  const [Reason1, setReason1] = useState([{ value: 0, label: "For FullBody Checkup" }]);
  const [start_date,setstart_date] = useState("");
  const [end_date,setend_date]= useState("");
  const [title,settitle] = useState("");
  const [doctor,setdoctor] = useState("");
  const [startdateval,setstartdateval] = React.useState("");

  const hideModals = () => {
    setdateselect(false);
    seteventselect(false);
  };

    const handleDateSelect = (arg) => {
        setdateselect(true);
        setstart_date(arg.start);
        setend_date(arg.end);
        console.log("dateclick", arg);
      }
    
      const handleEventClick = (arg) => {
        seteventselect(true);
        const title = arg.event.title;
        const Doctor = arg.event.extendedProps.Doctor;
        const startdate = arg.event.start;
        const enddate = arg.event.end;
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
        console.log("h",hours1);
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
        console.log("dateclick11", value);
      }
  
  
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
  
        console.log("Doctor_List",Doctor_List)
  
        const handleDocOption = Doc => {
             
          setDoctor_List1(Doc);
  
          console.log("Doctor_List1",Doc)
        };
  
  
        const handleReasonOption = ReasonSelect => {
             
          setReason1(ReasonSelect);
  
          console.log("Reason",ReasonSelect)
        };
        const handleStartChange = (date) => {
          const day = new Date(date).getDay();
          console.log("edate",date);
          setstart_date(date);
        };
        const handleEndChange = (date) => {
          const day = new Date(date).getDay();
          console.log("edate",date);
          setend_date(date);
        };
  
        const Confirm = () => 
        {
          setdateselect(false);
          addToast("Appointment set Successfully!", {
            appearance: "success",
            autoDismiss: true
          });
        }
        const eventcancel = () => {
          seteventselect(false);
        }


    return (
      <div>
        <div id='calendar-container'>
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
                events={[
                    { title: 'For Heart',Doctor: 'Ramesh',color: 'yellow', start: '2020-10-01T14:30:00',end:'2020-10-01T15:30:00' },
                    { title: 'High Sugar',Doctor: 'Arunkumar',color: 'Blue', start: '2020-10-01T15:30:00',end:'2020-10-01T16:30:00' },
                ]}
            />
      </div>
      <div>
      <Modal show={dateselect} onHide={hideModals} className="sch-modal">
        <Modal.Header closeButton>
          <h5>Doctor Appointment</h5>
        </Modal.Header>
        <Modal.Body style={{paddingLeft: "30px"}}>
        <AvForm className="register-form" onSubmit={Confirm} >

                <div className="form-group">
              <label>Start {' '}</label>
                <br />
                <DatePicker
                        className="dt_box"
                        selected={start_date}
                        timeIntervals={30}
                        showTimeSelect
                        onChange={handleStartChange}
                         />
                </div>
                <div className="form-group">
              <label>End {' '}</label>
                <br />
                <DatePicker
                        className="dt_box"
                        selected={end_date}
                        timeIntervals={30}
                        showTimeSelect
                        onChange={handleEndChange} 
                        />
                </div>

        <div className="form-group">Doctor
                <Select
                              className="selectWidth"
                              components={{
                                IndicatorSeparator:()=>null,
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
                                IndicatorSeparator:()=>null,
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
                value={Resonforvisit}
                onChange={e => {
                    setResonforvisit(e.target.value);
                }}
                validate={{
                  required: { value: true }
                }}
              />
              </div>
              <div className="form-group mx-auto" style={{textAlign:"center"}}> 
              <button style={{backgroundColor:" #23497c"}}
                    type="submit" 
                    className="btn btn-primary "        
                >
                    Set Appointment
                </button>
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
        <AvForm className="register-form" onSubmit={eventcancel} >

                <div className="form-group">
                <span><b>Title   :</b> {title} </span>{" "}
                </div>
                <div className="form-group">
                <span><b>Doctor :</b> {doctor} </span>{" "}
                </div>

                <div className="form-group">
                <span><b>Appointment Timing :</b> {startdateval} </span>{" "}
                </div>
                <div className="form-group">
                </div>
              <div className="form-group mx-auto" style={{textAlign:"center"}}> 
              <button style={{backgroundColor:" #23497c"}}
                    type="submit" 
                    className="btn btn-primary "        
                >
                    Cancel
                </button>
              </div>
        </AvForm>
        </Modal.Body>
      </Modal>
      </div>
      </div>
      
    )
  }

export default Calendarform;