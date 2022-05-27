import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Fridge from "./Pages/Fridge";
import Recipes from "./Pages/Recipes";

import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/fridge" element={<Fridge />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
