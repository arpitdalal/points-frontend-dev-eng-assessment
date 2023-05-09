import styled from "styled-components";
import Form from "./components/UI/organisms/Form/Form";
import Theme from "./Theme";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
    <Theme>
      <Main>
        <Form />
      </Main>
    </Theme>
  );
}

export default App;
