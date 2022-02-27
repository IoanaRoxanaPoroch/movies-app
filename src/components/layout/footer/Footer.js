import React, { Component } from "react";
import "./Footer.css";
import logo from "../../../assets/logo/logo.png";
// import "font-awesome/css/font-awesome.min.css";

class Footer extends Component {
  render() {
    // cred ca ar trebui sa folosesti nume de clase mai pe inteles
    return (
      <footer>
        <div className="footer">
          <div className="logo-f">
            <img src={logo} alt="logo" style={{ width: "min(50vw, 200px)" }} />
          </div>
          <div className="column links">
            <ul className="ul-f">
              <li className="li">
                <a href="#">Press Room</a>
              </li>
              <li className="li">
                <a href="#">Advertising</a>
              </li>
              <li className="li">
                <a href="#">Jobs</a>
              </li>
            </ul>
          </div>
          <div className="column links">
            <ul className="ul-f">
              <li className="li">
                <a href="#">Contact us</a>
              </li>
              <li className="li">
                <a href="/register">Register</a>
              </li>
              <li className="li">
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="column links">
            <ul className="ul-f">
              <li className="li">
                <a href="#">Conditions of Use</a>
              </li>
              <li className="li">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="li">
                <a href="#">Interest-Based Ads</a>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <p>Copyright © 1990-2019 Moovie.com, Inc.</p>
          </div>
          <div className="social">
            <i className="fa-brands fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
