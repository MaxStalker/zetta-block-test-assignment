import DataContainer from "./containers/DataContainer";
import DataRender from "./components/DataRender";

// We will hardcode endpoint here
const endpoint = "https://62a6bb9697b6156bff7e6251.mockapi.io/v1";

function App() {
  return (
    <>
      <DataContainer endpoint={endpoint} />
    </>
  );
}

export default App;
