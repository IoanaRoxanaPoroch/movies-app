import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../../components/card/Card";
import "./Home.css";
import axios from "axios";
import SelectByGenre from "../../components/forms/inputs/select/SelectByGenre";
import SelectAnyDate from "../../components/forms/inputs/select/SelectAnyDate";

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState("");

  const getMovies = async () => {
    return await axios.get("http://localhost:3000/movies");
  };

  useEffect(async () => {
    const response = await getMovies();
    if (response?.data) {
      setMovies(response.data);
      setLoading(false);
    }
  }, []);
  const Callback = useCallback((genre) => {
    setGenre(genre.charAt(0).toUpperCase() + genre.slice(1));
  }, []);

  return (
    <>
      <div className="next-container">
        <div className="top-elements">
          <div className="title-top-container">
            <p>See what movies are coming next month</p>
          </div>
          <div className="select-input-container">
            <p>Filter by</p>
            <SelectByGenre parentCallback={Callback} />
            <SelectAnyDate />
          </div>
        </div>
        {loading && <div>Loading</div>}

        {!loading && (
          <div className="moviecard-container">
            {movies
              .filter((movie) =>
                genre === "" ? movie : movie.info.genres.indexOf(genre) > -1
              )
              .map((movie, index) => {
                return (
                  <div key={index} className="moviecard">
                    <MovieCard movie={movie} />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
