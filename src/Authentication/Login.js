import React, { useState } from "react";
import { Button, FormGroup,Form,Label,Input } from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if(email==="")
    {
      alert("Please enter the usename");
    }
    else if(password==="")
    {
      alert("Please enter the password");
    }
    else{
      alert("Login sucessfully");
    }
};

  return(
    <Form className="login-form" onSubmit={handleSubmit}>
        <FormGroup>
      <Label className="login-header">Log-In</Label>
      <br />
    <Label className="login-label">Email</Label>
      <Input type="email" placeholder="Email" />
      </FormGroup>
      <br />
      <FormGroup>
        <Label className="login-label">Password</Label>
      <Input type="password" placeholder="Password" />
      </FormGroup>
      <br />
      <Button className="btn-lg btn-dark btn-block">
        Log-In
      </Button>
      <br />
      <div className="text-center pt-3" style={{textAlign:"center"}}>
        <a href="/sign-up">Sign up</a>
        <span className="p-2"> | </span>
        <a href="/forgetpassword">Forgot Password</a>
      </div>
    </Form>
  );
};

export default Login;
