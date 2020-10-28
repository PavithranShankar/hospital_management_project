import React from "react";
import Navbar from "./Nav";
import Patient from "../Patient/Patient";
import Home_Prelogin from "./Home_Prelogin";
import Calendarform from "../Scheduler/Calendarform";
import Doctor_page from "../Doctor/Doctor";


const Home=()=>
{

 
  debugger;
    let isAuthenticated = "False";

    let User= localStorage.getItem("User");


    let Authentication= localStorage.getItem("isAuthenticated");

  

  if (Authentication === "True") {
    isAuthenticated = "True";
  }

    console.log("Authentication",Authentication);

    if(isAuthenticated==="True")
    {
      if(User==="Patient")
      {
        return <Calendarform/>
      }
      else if(User==="Doctor")
      {
        return <Doctor_page/>
      }
      
      else
      {
        return <Home_Prelogin/>
      }
    }
    else
      {
        return <Home_Prelogin/>
      }
  
   
}

export default Home;