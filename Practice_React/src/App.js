import react from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let posts = "뿌엥!";
  let 이것도가능 = { color: "blue", fontSize: "30px" };

  return (
    <div className="App">
      <div className="black-nav">
        <div style={이것도가능}>개발 Blog</div>
      </div>
      <h4> {posts} </h4>
    </div>
  );
}

export default App;
