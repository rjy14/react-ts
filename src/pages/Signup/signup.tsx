import React from 'react';
import { useState} from "react";
import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string | number>('');
  const [email, setemail] = useState<string | number>('');
  const [FirstName, setFirstName] = useState<string>('');
  const [LastName, setLastName] = useState<string>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault(); commented out so page will reload after submit
    console.log('username:', username);
    console.log('password:', password);
    console.log('email:', email);
    console.log('FirstName:', FirstName);
    console.log('LastName:', LastName);
    navigate('/login')
    alert("Account registered successfully")
};  
  return (
    <>
    <br></br>
    <center><h1>Plese enter your details!</h1></center>  
    <form onSubmit={handleSubmit}>  
    <label>
        Email:
        <input type="text" value={email} onChange={(event) => setemail(event.target.value)} required/>
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
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} required/>
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
      </label>
    <center>
      <button type="submit">Sign up!</button>
      </center>
    </form>
     </>
  );};
export default SignUpForm;