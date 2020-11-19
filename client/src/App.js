import "./App.css";
import PasswordSearch from "./components/PasswordSearch";
import useAsync from "./../src/useAsync";
import { deletePassword, getPassword } from "./api/passwords";
import PasswordDelete from "./../src/components/PasswordDelete";

function App() {
  const { data, loading, error, doFetch } = useAsync(getPassword);
  const {
    data: data2,
    loading: loading2,
    error: error2,
    doFetch: doFetch2,
  } = useAsync(deletePassword);

  return (
    <div className="App">
      <header className="App-header">
        {loading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        <PasswordSearch onSearch={(passwordName) => doFetch(passwordName)} />
        {data}
        <PasswordDelete onSearch={(passwordName) => doFetch2(passwordName)} />
        {data2}
      </header>
    </div>
  );
}

export default App;
