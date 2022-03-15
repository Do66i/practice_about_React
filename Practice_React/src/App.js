import react, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  let [title, setTitle] = useState(['레포데하고싶다', '옵치하고싶다', '눕고싶다']);
  let [modal, setModal] = useState(false); //useState(false) = on/off 스위치역할, 사이트 로드시 모달창 안보임
  let [count, setCount] = useState([0, 0, 0]);
  let [pushTitle, setPushTitle] = useState(0);
  let [inputData, setInPutData] = useState(''); // input 입력값 저장공간
  let 이것도가능 = { fontSize: "30px" };
  // function changeTitle() {
  //   let newArr = [...title];
  //   newArr[1] = '사실은 롤하고싶다';
  //   setTitle(newArr);
  // }
  function titleCount(num) {
    const newCount = [...count]
    newCount[num] += 1;
    setCount(newCount)
  }

  function changeTitle() {
    let newArr = [...title];
    newArr.unshift(inputData);
    setTitle(newArr);
  }

  function changeCount() {
    let newArrOfCount = [...count]
    newArrOfCount.unshift(0);
    setCount(newArrOfCount)
  }


  return ( // html을 여기에 짜고있다는것
    <div className="App">
      <div className="black-nav">
        <div style={이것도가능}>개발 Blog</div>
      </div>


      {
        title.map((a, titleNum) => {
          return (
            <div className="list">
              <h4 onClick={() => { setModal(!modal); setPushTitle(titleNum) }} >
                {a}{console.log('타이틀?', pushTitle)} </h4>
              <span className="btn" onClick={() => { titleCount(titleNum) }}>🐘</span> {count[titleNum]}{console.log('성공적일까요 ?', count)}
              <p>03월 10일</p>
              <hr />
            </div>
          )
        })
      }
      <div className="publish">
        <input onChange={(e) => { setInPutData(e.target.value) }}></input>
        {/* 영구 저장은 안된다 왜? DB나 뭐 서버 이런거 없자나 ! */}
        <button onClick={(e) => { changeTitle(e); changeCount() }}>저장 안되는 저장버튼!</button>
      </div>
      {console.log(inputData)}
      {console.log(title)}

      {modal ? <Modal title={title} pushTitle={pushTitle} /> : null}
    </div >
  );
  /*
  return안에 return을 만들고 그 안에 div 평행하게 못만듬 */
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.pushTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p></div>
  )
}

export default App;
