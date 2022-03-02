import * as React from "react";
import poster from "../../assets/images/poster.png";
import "./Card.css";

export default function MovieCard({ movie }) {
  const { title, info } = movie;
  return (
    <div>
      <div className="image-container">
        <img src={poster} alt="movie poster" />
        <div className="btns-container">
          <button className="btn-add">Add to watchlist</button>
          <button className="btn-rating">{info.rating}</button>
        </div>
      </div>

      <div className="card-content">
        <div className="title-movie-container">
          <p>{title}</p>
        </div>
        <div className="info-container">
          <p>Release date:{movie && movie.info && movie.info.release_date}</p>
          <ul className="genre-ul">
            {info.genres.map((genre, index) => {
              return <li key={index}>{genre}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
