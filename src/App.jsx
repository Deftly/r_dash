import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Reporting Dashboard</Heading>

        <Heading as="h2">Buttons</Heading>
        <Button onClick={() => alert("Upgraded")}>Upgrade</Button>
        <Button onClick={() => alert("Build triggered")}>Build</Button>

        <Heading as="h3">Forms</Heading>
        <Input type="number" placeholder="Number of Upgrades" />
      </StyledApp>
    </>
  );
};

export default App;
