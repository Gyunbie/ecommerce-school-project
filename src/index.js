import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Listing from "./components/Listing";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Listing />} />
          <Route
            path="/categories/electronics"
            element={<Listing category="electronics" />}
          />
          <Route
            path="/categories/kitchen"
            element={<Listing category="kitchen" />}
          />
          <Route
            path="/categories/sports"
            element={<Listing category="sports" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
