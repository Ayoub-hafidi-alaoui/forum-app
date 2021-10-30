import styled from "styled-components";
import Header from "./components/Header";
function App() {
  return (
    <Wrapper>
      <Header/>
    </Wrapper>
  );
}

export default App;
const Wrapper=styled.div`
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

`
