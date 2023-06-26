import { useState } from "react";
import { SideBar, Home, AboutMe, Porfolio,Contact } from "../src/assets/Components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App h-[100vh] overflow-x-hidden flex">
        <SideBar className="sticky" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutme" element={<AboutMe />} />
          <Route path="/Portfolio" element={<Porfolio />} />
          {/* <Route path="/Resume" element={<Resume />} /> */}
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
