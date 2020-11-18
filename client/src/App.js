import logo from "./logo.svg";
import "./App.css";
import { getPassword } from "./api/passwords";
import { useEffect } from "react";
import Search from "./components/PasswordSearch";
import useAsync from "./../src/useAsync";

function App() {
  const { data, loading, error, doFetch } = useAsync(getPassword);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        <Search onSearch={(passwordName) => doFetch(passwordName)} />
        {data}
      </header>
    </div>
  );
}

export default App;
