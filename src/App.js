import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "./page/Home";
import Careers from "./page/Careers";
import Product from "./page/Product";
import Blog from "./page/Blog";
import Profile from "./page/Profile";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="gojak/" element={<Home />} />
        <Route path="gojak/careers" element={<Careers />} />
        <Route path="gojak/product" element={<Product />} />
        <Route path="gojak/blog" element={<Blog />} />
        <Route path="gojak/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
