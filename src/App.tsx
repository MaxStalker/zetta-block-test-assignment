import DataContainer from "./containers/DataContainer";
import { GlobalStyle, MainContainer } from "./components/common";
import Tabs from "./components/Tab";
import { Logo, Title } from "./components/common";

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
    <MainContainer>
      <GlobalStyle />

      <Logo src="/logo-animation.gif" alt="" />
      <Title>API Data Loader</Title>

      <Tabs tabs={tabs} />
    </MainContainer>
  );
}

export default App;
