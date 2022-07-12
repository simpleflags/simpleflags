import "./App.css";
import styled from "styled-components";

import AppRouter from "./AppRouter";

function App() {
  return (
    <AppWrapper>
      <AppRouter />
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;
