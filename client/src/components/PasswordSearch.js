import { useState } from "react";
import styled from "styled-components/macro";

const Input = styled.input`
  box-shadow: 5px 10px 20px blueviolet;
  border-radius: 10px;
  background: darkblue;
  color: white;
  width: 250px;
  height: 60px;
  border: none;
  text-align: center;
`;

export default function Search({ onSearch }) {
  const [passwordName, setPasswordName] = useState("");

  function handlePasswordName(event) {
    setPasswordName(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSearch(passwordName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <Input
          type="text"
          placeholder="Enter password name"
          value={passwordName}
          onChange={handlePasswordName}
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
