import React, { useEffect, useRef, useState  } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      // Check if entered username and password match stored values
      if (userData.username === username && userData.password === password) {
        console.log("Login successful");
        alert("Welcome to HighFashion!");
        navigate("/home");
      } else {
        console.log("Invalid username or password");
        alert("Invalid username or password");
      }
    } else {
      alert("Account not found, please sign up.");
    }
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
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="rounded-input"
          required
        />
        <br />
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