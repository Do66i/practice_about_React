import styled from "styled-components";
import Tag from "./Tag";

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
    <div>
      하이!
      <Tag />
    </div>
  );
}

export default App;
