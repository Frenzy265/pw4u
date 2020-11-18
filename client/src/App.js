import logo from "./logo.svg";
import "./App.css";
import { getPassword } from "./api/passwords";
import { useEffect, useState } from "react";

function App() {
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      try {
        setLoading(true);
        const newPassword = await getPassword("lala");
        setPassword(newPassword);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {password}
      </header>
    </div>
  );
}

export default App;
