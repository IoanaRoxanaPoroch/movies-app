import React, { useState, useEffect } from "react";
import Title from "../forms/title/Title";
import axios from "axios";
import "./MainMovie.css";

function MainMovie() {
  const [latestMovie, setLatestMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    return await axios.get("http://localhost:3000/movies");
  };

  useEffect(async () => {
    const response = await getMovies();
    const lastMovie = getLatestMovie();
    console.log("xxxx", lastMovie);
    if (response && response.data) {
      setMovies(response.data);
      setLoading(false);
      if (latestMovie && isEmpty(lastMovie)) {
        setLatestMovie(lastMovie);
      }
    }
  }, []); //ar trebui sa ruleze si la update - atunci cand adminul adauga un nou film

  const getLatestDate = () => {
    if (movies && movies.length > 0) {
      return new Date(
        Math.max.apply(
          null,
          movies.map(function(e) {
            return new Date(e.info.release_date);
          })
        )
      );
    }
  };
  const getLatestMovie = () => {
    if (movies && movies.length > 0) {
      let lastDate = getLatestDate()
        .toISOString()
        .substring(0, 10);
      const latest = movies.find(
        (movie) => movie.info.release_date === lastDate
      );
      console.log("zzz", latest);
      return latest;
    }
  };
  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  if (movies && movies.length > 0) {
    console.log("aaa", latestMovie);
  }

  return (
    <>
      <div className="main-movie-wrapper">
        <div className="content-container">
          {/* {!loading && <Title title={latestMovie} />} */}
        </div>
        {/* <div className="text-container">{latestMovie.info.plot}</div> */}
        <div className="img-conatiner">
          <img src="" alt="main movie poster" />
        </div>
        <div className="btn">
          <button>Watch trailer</button>
          <button>Add to list</button>
          <button onClick={getLatestMovie}> See the movie</button>
        </div>
      </div>
    </>
  );
}
export default MainMovie;
