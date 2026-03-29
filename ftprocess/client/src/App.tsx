import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>

      {/* Navbar sab pages pe show hoga */}
      

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;