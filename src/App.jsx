import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Reporting Dashboard</H1>
        <Button onClick={() => alert("Upgraded")}>Upgrade</Button>
        <Button onClick={() => alert("Build triggered")}>Build</Button>
        <Input type="number" placeholder="Number of Upgrades" />
      </StyledApp>
    </>
  );
};

export default App;
