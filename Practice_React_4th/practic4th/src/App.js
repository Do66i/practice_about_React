import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: teal;
`;

function App() {
  return (
    <Father>
      <div></div>
      <div></div>
    </Father>
  );
}

export default App;
