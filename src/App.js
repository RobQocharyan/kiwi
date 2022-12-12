import React, { useState, useEffect } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { LeftSection } from "./components/Sections/LeftSection/LeftSection";
import { RightSection } from "./components/Sections/RightSection/RightSection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sections">
        <div className="leftMain">
          <LeftSection />
        </div>
        <div className="rightMain">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
