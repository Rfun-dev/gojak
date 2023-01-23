import React from "react";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";

import Home from "./page/Home";
import Careers from "./page/Careers";
import Product from "./page/Product";
import Blog from "./page/Blog";
import Profile from "./page/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
