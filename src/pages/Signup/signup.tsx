import React from 'react';
import { useState} from "react";
import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState<string>('');
  const [Password, setPassword] = useState<string | number>('');
  const [Email, setEmail] = useState<string | number>('');
  const [FirstName, setFirstName] = useState<string>('');
  const [LastName, setLastName] = useState<string>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault(); commented out so page will reload after submit
    console.log('Username:', Username);
    console.log('password:', Password);
    console.log('Email:', Email);
    console.log('FirstName:', FirstName);
    console.log('LastName:', LastName);
    navigate('/login')
    alert("Your account has been registered successfully")
};  
  return (
    <>
    <br></br>
    <center><h1>Please enter your details!</h1></center>  
    <form onSubmit={handleSubmit}>  
    <label>
        Email:
        <input type="email" value={Email} onChange={(event) => setEmail(event.target.value)} required/>
      </label>
      <label>
        FirstName:
        <input type="text" value={FirstName} onChange={(event) => setFirstName(event.target.value)} required/>
      </label>
      <label>
        LastName:
        <input type="text" value={LastName} onChange={(event) => setLastName(event.target.value)} required/>
      </label>
      <label>
        Username:
        <input type="text" value={Username} onChange={(event) => setUsername(event.target.value)} required/>
      </label>
      <label>
        Password:
        <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} required/>
      </label>
    <center>
      <button type="submit">Sign up!</button>
      </center>
    </form>
     </>
  );};
export default SignUpForm;