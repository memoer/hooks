import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useClick = onClick => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  // componentWillUnmount될때 event를 지워줘야 한다.
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  // [](deps)를 넣지않고 없애버린다면 매번 update될때마다 addEvenet가 될 것이다.
  // didMount될때만 딱 한 번 실행되게끔
  return element;
};

function App() {
  const onClick = () => {
    console.log("say hello");
  };
  const title = useClick(onClick);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
