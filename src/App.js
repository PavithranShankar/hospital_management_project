import React from 'react';
import './App.css';
import Home from './Statup_Pages/Home';
import{BrowserRouter,Switch,Route} from "react-router-dom";
import Login from './Authentication/Login';
import Patient from './Patient/Patient';
import { ToastProvider } from "react-toast-notifications";
import Nav_Bar from './Statup_Pages/Nav';
import ContactUs from './Authentication/ContactUs';
import DatePickerPage from './Patient/calender';
import Register_as_Doctor from './Authentication/Register_as_Doctor';
import Register_as_Patient from './Authentication/Register_as_Patient';
import Doctor_page from './Doctor/Doctor';
import Calendarform from './Scheduler/Calendarform';
import NavBar_Doctor from './Statup_Pages/NavBar_Doctor';
import NavBar_Patient from './Statup_Pages/NavBar_Patient';
import NavBar_dropdown from './Statup_Pages/NavBar_Dropdown';
import ProfileForPatient from './Profile_Screen/Profile_Patient';
import ChangePassword from './Authentication/ChangePassword';
import Header from './Statup_Pages/Header';
import ProfileForDoctor from './Profile_Screen/Profile_Doctor';
import NavBar_dropdown_Doctor from './Statup_Pages/NavBar_Dropdown_Doctor';


const App=()=>
 {
   
 
  return (
    <div >
      <ToastProvider>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          {/* <Route path="/H" exact component={Header}/> */}
          <Route path="/login" exact component={Login}/>       
          <Route path="/patient" exact component={Patient}/>
          <Route path="/contact_us" exact component={ContactUs}/>
          <Route path="/DatePickerPage" exact component={DatePickerPage}/>
          <Route path="/Register_as_Doctor" exact component={Register_as_Doctor}/>
          <Route path="/Register_as_Patient" exact component={Register_as_Patient}/>
          <Route path="/Doctor_page" exact component={Doctor_page}/>
          <Route path="/calendar" exact component={Calendarform} />
          <Route path="/NavBar_Doctor" exact component={NavBar_Doctor} />
          <Route path="/NavBar_Patient" exact component={NavBar_Patient} />
          <Route path="/NavBar_dropdown" exact component={NavBar_dropdown} />
          <Route path="/NavBar_dropdown_Doctor" exact component={NavBar_dropdown_Doctor} />
          <Route path="/ProfileForPatient" exact component={ProfileForPatient} />
          <Route path="/ProfileForDoctor" exact component={ProfileForDoctor} />
          <Route path="/ChangePassword" exact component={ChangePassword} />

          ProfileForDoctor

        </Switch>
        {/* <HomeContent/>
         <Footer/> */}
      </BrowserRouter>

      </ToastProvider>
            
    </div>
  );
}

export default App;
