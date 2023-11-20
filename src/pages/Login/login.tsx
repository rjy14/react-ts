import React from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault(); commented out so the page will reload after submit
    console.log("username:", username);
    console.log("password:", password);
    alert("welcome to HighFashion!");
    navigate('/home')
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
          <button type="submit" disabled={!username || !password}>Login</button>
        </center>
      </form>
    </>
  );
}

export default LoginForm;