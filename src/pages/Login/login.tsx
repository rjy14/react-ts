import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("username:", username);
    console.log("password:", password);
    alert("Welcome to HighFashion!");
    navigate("/home");
  };

  return (
    <>
      <br />
      <h1>Please enter your account details!</h1>
      <form onSubmit={handleSubmit}>
        
          <input
          placeholder="Username"
          ref={nameRef} 
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="rounded-input"
            required
          />
          <br></br>
          <input
          placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-input"
            required
          />
           <br></br>
        <center>
          <button type="submit" disabled={!username || !password}>
            Login
          </button>
        </center>
      </form>
    </>
  );
}

export default LoginForm;