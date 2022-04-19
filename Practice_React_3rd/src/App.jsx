import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Box bgColor="red" />
      <Circle bgColor="blue" />
    </Father>
  );
}

export default App;
