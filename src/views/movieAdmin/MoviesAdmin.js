import React, { useEffect, useState } from "react";
import Searchfield from "../../components/forms/inputs/input/search/Search";
import "./MoviesAdmin.css";
import UseModal from "../../components/forms/modal/UseModal";
import ModalAdd from "../../components/forms/modal/ModalAdd";
import Modal from "../../components/forms/modal/ModalAdd";

export default function MoviesAdmin() {
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log("in functie", modalIsOpen);
  };

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
        <button className="btn-add-admin" onClick={openModal}>
          Add new
        </button>

        <Modal toggle={modalIsOpen} />
      </div>
      <div className="movies-list">
        <ul>
          <li>FirstMovie</li>
        </ul>
      </div>
    </div>
  );
}
