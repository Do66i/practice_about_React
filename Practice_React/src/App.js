import react, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  let [title, setTitle] = useState(['레포데하고싶다', '옵치하고싶다', '눕고싶다']);
  let [count, setCount] = useState(0);
  let [modal, setModal] = useState(false); //useState(false) = on/off 스위치역할, 사이트 로드시 모달창 안보임
  let 이것도가능 = { fontSize: "30px" };
  // function changeTitle() {
  //   let newArr = [...title];
  //   newArr[1] = '사실은 롤하고싶다';
  //   setTitle(newArr);
  // }




  return ( // html을 여기에 짜고있다는것
    <div className="App">
      <div className="black-nav">
        <div style={이것도가능}>개발 Blog</div>
      </div>
      <div className="list">
        <h4> {title[0]} <span onClick={() => { setCount(count + 1) }}>🐘</span> {count} </h4>
        <p>03월 10일</p>
        <hr />
      </div>
      <div className="list">
        <h4> {title[1]}</h4>
        <p>03월 10일</p>
        <hr />
      </div>
      <div className="list">
        <h4> {title[2]} </h4>
        <p>03월 10일</p>
        <hr />
      </div>

      {
        title.map((a) => {
          return (
            <div className="list">
              <h4> {a} <span onClick={() => { setCount(count + 1) }}>🐘</span> {count} </h4>
              <p>03월 10일</p>
              <hr />
            </div>
          )
        })
      }

      <button onClick={() => { setModal(!modal) }}>뿌엥!{console.log(modal)}</button>
      {modal ? <Modal title={title} /> : null}
    </div>
  );
  /*
  return안에 return을 만들고 그 안에 div 평행하게 못만듬 */
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p></div>
  )
}

export default App;
