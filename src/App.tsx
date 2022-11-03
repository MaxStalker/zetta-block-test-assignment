import DataContainer from "./containers/DataContainer";
import DataRender from "./components/DataRender";

function App() {
  return (
    <>
      <DataContainer render={DataRender} />
      <DataContainer render={DataRender} />
    </>
  );
}

export default App;
