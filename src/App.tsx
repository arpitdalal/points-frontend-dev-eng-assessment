import styled from "styled-components";
import Form from "./components/UI/organisms/Form";
import Theme from "./Theme";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem 1.25rem;
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
