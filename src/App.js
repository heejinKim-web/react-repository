import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./components/component.js";
import TestProps from "./components/props.js";
import StopWatch from "./components/stopwatch.js";

function App() {
  const testArray = ["프롭테스트", "프롭테스트1", "프롭테스트2"];
  return (
    <div className="App">
      <TestComponent />
      <TestProps data1={testArray} />
      <StopWatch />
    </div>
  );
}

export default App;
