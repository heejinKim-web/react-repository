import React from "react";
import "./test.css";

export default function TestProps(props) {
  //react props test
  const prop = props.data1;

  return (
    <div className="prop_test">
      {prop.map((pr) => (
        <p key={pr}>{pr}</p>
      ))}
    </div>
  );
}
