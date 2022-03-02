import React, { Component } from "react";
import "./Footer.css";
import logo from "../../../assets/logo/logo.png";
import facebook from "../../../assets/logo/facebook.png";
import twitter from "../../../assets/logo/twitter.png";
import youtube from "../../../assets/logo/youtube.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />
        </div>
        <div className="footer-center">
          <div className="footer-items">
            <p>
              <a href="#">Press Room</a>
            </p>
          </div>
          <div className="footer-items">
            <p>
              <a href="#">Advertising</a>
            </p>
          </div>
          <div className="footer-items">
            <p>
              <a href="#">Jobs</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-items">
            <p>
              <a href="#">Contact us</a>
            </p>
          </div>
          <div className="footer-items">
            <p>
              <a href="/register">Register</a>
            </p>
          </div>
          <div className="footer-items">
            <p>
              <a href="#">News</a>
            </p>
          </div>
        </div>
        <div className="footer-element-3">
          <div className="footer-items">
            <p>
              <a href="#">Conditions of Use</a>
            </p>
          </div>
          <div className="footer-items">
            <p>
              <a href="#">Privacy Policy</a>
            </p>
          </div>
          <div className="footer-items">
            <p>
              <a href="#">Interest-Based Ads</a>
            </p>
          </div>
        </div>

        <hr />

        <div className="second-fotter">
          <div className="footer_text">
            <p>Copyright &copy; 1990-2019 Moovie.com, Inc.</p>
          </div>

          <div className="footer_icons">
            <div className="inline-block">
              <p className="footer-text-social">Follow us on social media</p>
            </div>
            <div className="inline-block">
              <a href="#" className="footer-social-buttons">
                <img src={facebook} />
              </a>
              <a href="#" className="footer-social-buttons">
                <img className="footer-logo-width" src={twitter} />
              </a>
              <a href="#">
                <img className="footer-logo-width" src={youtube} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
