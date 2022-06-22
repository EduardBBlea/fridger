import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import useGlobalState from "./hooks/useGlobalState";
import { GlobalProvider } from "./contexts/GlobalContext";

import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Fridge from "./Pages/Fridge";
import Recipes from "./Pages/Recipes";
import NotFound from "./Pages/NotFound";

import "./App.scss";

const App = () => {
  const globalState = useGlobalState();

  return (
    <GlobalProvider value={globalState}>
      <BrowserRouter>
        <div id="main-wrapper">
          <Header />
          <div id="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/add" element={<Add />}></Route>
              <Route path="/fridge" element={<Fridge />}></Route>
              <Route path="/recipes" element={<Recipes />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
