```js

import { useState } from "react";

const heavyWork = () => {
  // 초기 값을 얻기 위한 함수
  console.log("엄청 무거운 작업!!!");
  return ["홍길동", "김민수"];
};

function App() {
  const [names, setNames] = useState(() => heavyWork());
  heavyWork()
  값을 저장하지만 그 함수를 계속 호출함

  () => heavyWork() 초기값 가져와야할때 함수 호출해야한다면 무조건 이렇게
  초기에 한번만 실행이 되서 더이상 실행되지 않음

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state: ", prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;

```

출처 : 별코딩, 현민님

1일 1커밋
