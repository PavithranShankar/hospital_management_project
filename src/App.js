import React from 'react';
import './App.css';
import Home from './Statup_Pages/Home';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Authentication/Login';
import Patient from './Patient/Patient';
import { ToastProvider } from "react-toast-notifications";
import Nav_Bar from './Statup_Pages/Nav';
import ContactUs from './Authentication/ContactUs';
import DatePickerPage from './Patient/calender';
import Register_as_Doctor from './Authentication/Register_as_Doctor';
import Register_as_Patient from './Authentication/Register_as_Patient';
import Doctor_page from './Doctor/Doctor';


const App=()=>
 {
  return (
    <div >
      <ToastProvider>
      <Router>
      <Nav_Bar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>         
          <Route path="/patient" exact component={Patient}/>
          <Route path="/contact_us" exact component={ContactUs}/>
          <Route path="/DatePickerPage" exact component={DatePickerPage}/>
          <Route path="/Register_as_Doctor" exact component={Register_as_Doctor}/>
          <Route path="/Register_as_Patient" exact component={Register_as_Patient}/>
          <Route path="/Doctor_page" exact component={Doctor_page}/>






        </Switch>
        {/* <HomeContent/> 
         <Footer/> */}
      </Router>

      </ToastProvider>
      
    </div>
  );
}

export default App;
