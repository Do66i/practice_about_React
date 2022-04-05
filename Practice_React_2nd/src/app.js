/* @jsx createElement */
import { createElement, render, Component } from "./react";
//번들파일이 실행되기 때문에 createElement 를 import해야함! 그래야 runtime 오류 없음 ! 

class Title extends Component {
  render() {
    return <h1>{props.children}</h1>
  }
}

function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>
}
const App = () => <p>
  <Title>React 즈엉말 만들기</Title>
  <ul>
    <Item color="red">첫 번째 아이템</Item>
    <Item color="blue">두 번째 아이템</Item>
    <Item color="green">세 번째 아이템</Item>
  </ul>
</p>


render(<App />, document.querySelector('#root'));