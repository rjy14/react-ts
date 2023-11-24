import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const nameRef = useRef<HTMLInputElement | null>(null); // autofocus on the first input

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const navigate = useNavigate();
  const [Username, setUsername] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [FirstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");

  const handleSubmit = () => {
    // Store user data in local storage
    const userData = {
      username: Username,
      password: Password,
      email: Email,
      firstName: FirstName,
      lastName: LastName,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(userData)
    // Navigate to login page
    navigate("/login");
    alert("Your account has been registered successfully");
  };

  return (
    <>
      <br />
      <center>
        <h1>Please enter your details!</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          ref={nameRef}
          type="email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <input
          placeholder="First Name"
          type="text"
          value={FirstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <br />
        <input
          placeholder="Last Name"
          type="text"
          value={LastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        <br />
        <input
          placeholder="Username"
          type="text"
          value={Username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={Password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <center>
          <button
            type="submit"
            disabled={!Email || !FirstName || !LastName || !Username || !Password}
          >
            Sign up!
          </button>
        </center>
      </form>
    </>
  );
}

export default SignUpForm;