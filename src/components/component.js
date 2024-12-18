import React from "react";
import "./test.css";
import { useState, useRef } from "react";

export default function TestComponent() {
  //react usestate test
  const [text, setText] = useState("Hello World!");
  const ref = useRef(0);
  const [once, setOnce] = useState(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert(ref.current + "번 클릭하셨습니다!");
  }

  function clickableTimes() {
    setOnce(once + 1);
    alert(once + "번 클릭하셨습니다!");
  }

  return (
    <div className="usestate_test">
      <div className="usestate_test_inner">
        <p>{text}</p>
        <button onClick={() => setText("Hello React!")}>클릭해보세요!</button>
      </div>

      <div className="usestate_test_inner">
        <button onClick={handleClick}>클릭해보세요!</button>
      </div>

      <div className="useref_test_inner">
        <button onClick={clickableTimes}>클릭해보세요!</button>
      </div>
    </div>
  );
}
