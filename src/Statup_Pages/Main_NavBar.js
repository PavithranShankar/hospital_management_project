import React from "react";
import Nav_Bar from "./Nav";
import NavBar_Patient from "./NavBar_Patient";
import NavBar_Doctor from "./NavBar_Doctor";


const Main_NavBar=()=>
{
    
    debugger;
   // let isAuthenticated = "False";

    let User= localStorage.getItem("User");


    let Authentication= localStorage.getItem("isAuthenticated");

  

//   if (Authentication === "True") {
//     isAuthenticated = "True";
//   }

    console.log("Authentication",Authentication);

    
    if(Authentication==="True")
    {
        if(User==="Patient")
        {
        return <NavBar_Patient/>
        }
        else if(User==="Doctor")
        {
            return <NavBar_Doctor/>
        }
        else
        {
            return <Nav_Bar/>
        }
    }
    else
    {
        return <Nav_Bar/>
    }

}

export default Main_NavBar;