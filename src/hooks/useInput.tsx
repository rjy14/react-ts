import { useEffect, useRef, useState } from "react";

const useInput = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    nameRef.current?.focus();
  }, []);
  function UsernameInput() {
    return (
      <>
        <br />
        <input
          placeholder="Username"
          ref={nameRef}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="rounded-input"
          required
        />
      </>
    );
  }

  function PasswordInput() {
    return (
      <>
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="rounded-input"
          required
        />
      </>
    );
  }
  return { username, password, UsernameInput, PasswordInput };
};

export default useInput;
