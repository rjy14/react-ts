import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

function InputComponent() {
  const navigate = useNavigate();
  const { username, password, UsernameInput, PasswordInput } = useInput();
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
    <div>
      <h1>Login (using custom hook)</h1>
      <form onSubmit={handleSubmit}>
        <div>{UsernameInput()}</div>
        <div> {PasswordInput()} </div>
        <button type="submit" disabled={!username || !password}>
          Login
        </button>
      </form>
    </div>
  );
}

export default InputComponent;
