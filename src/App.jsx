import React from "react";
import Desktop from "./components/Desktop";
import "./App.css";

const App = () => {
  /*useEffect(() => {
    addCursorTrail();
  }, []);*/
  return (
    <div className="app">
      <Desktop />
    </div>
  );
};

export default App;
