import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Products from "./routes/Products";
import Singlepage from "./components/SinglePage";
import Contact from "./routes/Contact";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Singlepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
