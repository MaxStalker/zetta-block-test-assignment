import DataContainer from "./containers/DataContainer";
import { GlobalStyle } from "./components/styled";
import Tabs from "./components/Tab";

// We will hardcode endpoint here
const endpoint = "https://62a6bb9697b6156bff7e6251.mockapi.io/v1";

function App() {
  const tabs = {
    full: <DataContainer endpoint={endpoint} key={"full"} />,
    pokemon: (
      <DataContainer endpoint={endpoint} filter={"pokemon"} key={"pokemon"} />
    ),
  };
  return (
    <>
      <GlobalStyle />
      <Logo src="/logo-animation.gif" alt=""/>
      <Title>API Data Loader</Title>
        <Tabs tabs={tabs} />
    </>
  );
}

export default App;
