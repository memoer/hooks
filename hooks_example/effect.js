import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const sayHello = () => console.log("hello");
  // componentDidMount, componentDidUpdate(state변경하면 계속 호출된다.), componentWillUnmount
  //useEffect(sayHello)
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  // deps 에 적혀져 있는 state밑에 순서를 둬야 옳바르게 작동한다.
  // didMount될때 sayHello가 호출되고, number가 변경될때만 호출된다.
  // 만약 component가 Mount될때 실행시키고, 그리고 나서 어떤 경우에도 실행시키고 싶지 않다면
  // 빈 배열([])을 넣어주면 된다.
  useEffect(sayHello, [number]);
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
