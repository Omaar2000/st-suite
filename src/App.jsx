import { useState } from "react";
import Leftbar from "./assets/Leftbar";
import Body from "./assets/Body";
import "./index.css";
import Filter from "./assets/Filter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex" style={{ background: "#202020" }}>
      <Leftbar />
      <Body />
      <Filter />
    </div>
  );
}

export default App;
