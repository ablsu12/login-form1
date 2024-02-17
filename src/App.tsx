import React, { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Icon } from "./components/Icon";
import { Overlay } from "./components/Overlay";
import { Sidebar } from "./components/Sidebar";

function App() {
  const closeIcon = `${process.env.PUBLIC_URL}/assets/closeIcon.png`;
  const menuIcon = `${process.env.PUBLIC_URL}/assets/menuIcon.png`;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="App w-screen h-screen flex justify-center items-center md:justify-end bg-gradient-to-r from-cyan-500 to-blue-500">
      <Overlay isOverlayOpen={isSidebarOpen}>
        <Sidebar />
      </Overlay>
      <div className={"absolute left-0 top-0 p-6"}>
        <Icon
          src={!isSidebarOpen ? menuIcon : closeIcon}
          alt={"close"}
          clickHandler={() => {
            setIsSidebarOpen((prevState) => !prevState);
          }}
        />
      </div>
      <Card />
    </div>
  );
}

export default App;
