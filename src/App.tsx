import React from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center md:justify-end bg-gradient-to-r from-cyan-500 to-blue-500">
      <Card />
    </div>
  );
}

export default App;
