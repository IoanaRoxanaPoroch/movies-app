import React, { useState, useCallback } from "react";
import Searchfield from "../../components/forms/inputs/input/search/Search";
import "./MoviesAdmin.css";
import Modal from "../../components/forms/modal/Modal";
import bin from "../../assets/images/bin.png";
import pen from "../../assets/images/pen.png";

function RowCard({ info }) {
  const clickDelete = () => {
    console.log("delete clicked");
  };
  const clickEdit = () => {
    console.log("edit clicked");
  };
  return (
    <div className="row-card-container">
      <img
        src="https://mdbootstrap.com/img/new/standard/nature/111.webp" //imagine film
        alt="..."
        style={{ width: "80px", height: "80px" }}
      />
      {/* Title */}
      <h3 style={{ color: "black" }}>{info[0]}</h3>
      {/* Release Date */}
      <p style={{ color: "black" }}>{info[7]}</p>
      {/* Genre/Category */}
      <p style={{ color: "black" }}>{info[5]}</p>
      <img
        src={bin}
        alt="..."
        style={{ width: "14px", height: "16px" }}
        onClick={clickDelete}
      />
      <img
        src={pen}
        alt="..."
        style={{ width: "14px", height: "16px" }}
        onClick={clickEdit}
      />
    </div>
  );
}

export default function MoviesAdmin() {
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [show, setShow] = useState(false);

  const infos = useCallback((infos) => {
    setInfo(infos);
    setShow(true);
  }, []);
  console.log("info", info);
  return (
    <div className="movies-admin-container">
      <div className="navbar-container">
        <ul className="navbar-list-admin">
          <li className="text-nav">
            <a className="nav-links" href="/moviesadmin">
              Movies
            </a>
          </li>
          <li className="text-nav">
            <a className="nav-links" href="/categories">
              My Profile
            </a>
          </li>
        </ul>
      </div>
      <div className="btn-input-container">
        <Searchfield
          className="search-movies-admin"
          placeholder="Search for a movie..."
        />
        <button className="btn-add-admin" onClick={() => setIsOpen(true)}>
          Add new
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} parentCallback={infos} />}
        {/* {show && <RowCard info={info} />} */}
      </div>

      <div className="movies-list">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
