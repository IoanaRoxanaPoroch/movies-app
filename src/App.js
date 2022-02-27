import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./views/home/Home";
import Categories from "./views/categories/Categories";
import Contact from "./views/contact/Contact";
import "./App.css";
import Footer from "./components/layout/footer/Footer";
import Watchlist from "./views/watchlist/Watchlist";
import LoginContainer from "./views/authentification/login/loginContainer";
import RegisterContainer from "./views/authentification/register/registerContainer";
import ResetContainer from "./views/authentification/reset/resetContainer";

export default function App() {
  const [isShowenNavbarFooter, setIsShowenNavbarFooter] = useState(true);
  useEffect(() => {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/register" ||
      window.location.pathname === "/reset"
    ) {
      setIsShowenNavbarFooter(false);
    }
  });
  return (
    <div>
      <Router>
        {isShowenNavbarFooter && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route exact path="/watchlist" element={<Watchlist />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<RegisterContainer />}></Route>
          <Route path="/login" element={<LoginContainer />}></Route>
          <Route path="/reset" element={<ResetContainer />}></Route>
        </Routes>
        {isShowenNavbarFooter && <Footer />}
      </Router>
    </div>
  );
}
