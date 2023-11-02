import React from 'react';
import { useState } from "react";
import "./login.css"
import TopNavbar from '../../components/Navbar/navbar';
// function LoginForm() {
//   const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string | number>('');
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     // event.preventDefault(); commented out so page will reload after submit
//     console.log('username:', username);
//     console.log('password:', password);
//     alert("Account registered successfully")
//   };
//   return (
//     <>
//     <br></br>
//     <h1>Please enter your account details!</h1>
//     <form onSubmit={handleSubmit}>  
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="rounded-input" required/>
//       </label>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="rounded-input" required/>
//       </label>
//     <center><button type="submit">Login</button></center>
//     </form>
//      </>
//   );};
interface InputProps {
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  required: boolean;
}
function Input({ type, value, onChange, className, required }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      required={required}
    />
  );
}
// Usage of Input component in your LoginForm
function LoginForm() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string | number>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault(); commented out so the page will reload after submit
    console.log('username:', username);
    console.log('password:', password);
    alert("Account registered successfully");
  };
  return (
    <>
      <br />
      
      <h1>Please enter your account details!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <Input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="rounded-input"
            required
          />
        </label>
        <label>
          Password:
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-input"
            required
          />
        </label>
        <center>
          <button type="submit">Login</button>
        </center>
      </form>
    </>
  );
}
export default LoginForm;




