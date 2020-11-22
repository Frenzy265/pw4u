import "./App.css";
import PasswordSearch from "./components/PasswordSearch";
import useAsync from "./../src/useAsync";
import { deletePassword, getPassword } from "./api/passwords";
import PasswordDelete from "./../src/components/PasswordDelete";

function App() {
  const { data, loading, error, doFetch } = useAsync(getPassword);
  const {
    data: deletedName,
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
        {loading2 && <div>Loading...</div>}
        {error2 && <div>{error2.message}</div>}
        <PasswordDelete onSearch={(passwordName) => doFetch2(passwordName)} />
        {deletedName}
      </header>
    </div>
  );
}

export default App;
