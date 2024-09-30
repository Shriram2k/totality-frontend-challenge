import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Contact.jsx";
import Pricing from "./Components/Pages/Pricing.jsx";
import Service from "./Components/Pages/Service.jsx";
import Blog from "./Components/Pages/Blog.jsx";
import Layout from "./Layout.jsx";
import Checkout from "./Components/Pages/Checkout.jsx";
import CartPage from "./Components/Pages/Cartpage.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CartProvider>
    </Router>
  </StrictMode>
);
