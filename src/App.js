import React from "react";
import "./App.css";
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/common/Navbar";
import ProductPage from "./components/product/ProductPage";

function App() {
  const route = window.location.pathname;

  function getComponent() {
    if (route === "/about") {
      return <AboutPage />;
    } else if (route === "/product") {
      return <ProductPage />;
    } else {
      return <HomePage />;
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid">{getComponent()}</div>
    </div>
  );
}

export default App;
