import React from 'react';
import './App.css';
import Home from './Statup_Pages/Home';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Patient from './Patient/Patient';
import { ToastProvider } from "react-toast-notifications";
import Nav_Bar from './Statup_Pages/Nav';
import ContactUs from './Authentication/ContactUs';


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
          <Route path="/register" exact component={Register}/>
          <Route path="/patient" exact component={Patient}/>
          <Route path="/contact_us" exact component={ContactUs}/>

        </Switch>
        {/* <HomeContent/> 
         <Footer/> */}
      </Router>

      </ToastProvider>
      
    </div>
  );
}

export default App;
