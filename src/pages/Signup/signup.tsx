import { useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {

  const nameRef = useRef<HTMLInputElement | null>(null) //autofocus on the first input
  
  useEffect(() => {
    nameRef.current?.focus();
  }, []);
  console.log(nameRef.current) 
  
  const navigate = useNavigate();
  const [Username, setUsername] = useState<string>('');
  const [Password, setPassword] = useState<string | number>('');
  const [Email, setEmail] = useState<string | number>('');
  const [FirstName, setFirstName] = useState<string>('');
  const [LastName, setLastName] = useState<string>('');
  const handleSubmit = () => {
    navigate('/login')
    alert("Your account has been registered successfully")
};  

  return (
    <>
    <br></br>
    <center><h1>Please enter your details!</h1></center>  
    <form onSubmit={handleSubmit}>  
    <div>
    <label>
        Email Add:
        <input ref={nameRef} type="email"  value={Email} onChange={(event) => setEmail(event.target.value)} required/>
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
      <button type="submit" disabled={!Email || !FirstName || !LastName || !Username || !Password}>Sign up!</button>
      </center>
      </div>
    </form>
     </>
  );};
export default SignUpForm;