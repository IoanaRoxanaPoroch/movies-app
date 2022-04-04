import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../../components/card/Card";
import "./Home.css";
import axios from "axios";
import SelectByGenre from "../../components/forms/inputs/select/SelectByGenre";
import SelectAnyDate from "../../components/forms/inputs/select/SelectAnyDate";
import CarouselImage from "../../components/carousel/CardsCarousel";
import MainMovie from "../../components/mainMovie/MainMovie";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  const getMovies = async () => {
    return await axios.get("http://localhost:3000/movies");
  };
  console.log("test");
  useEffect(async () => {
    const response = await getMovies();
    if (response && response.data) {
      setMovies(response.data);
      setLoading(false);
    }
  }, []);

  const Callback = useCallback((genre) => {
    setGenre(genre.charAt(0).toUpperCase() + genre.slice(1));
  }, []);

  const dateCallback = useCallback((date) => {
    setDate(date);
  }, []);

  return (
    <>
      <div className="main-movie-container">
        <MainMovie />
      </div>
      <div className="carousel-wrapper">
        {!loading && <CarouselImage movie={movies[0]} />}
      </div>
      <div className="next-container">
        <div className="top-elements">
          <div className="title-top-container">
            <p>See what movies are coming next month</p>
          </div>
          <div className="select-input-container">
            <p>Filter by</p>
            <SelectByGenre parentCallback={Callback} />
            <SelectAnyDate parentCallback={dateCallback} />
          </div>
        </div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div className="moviecard-container">
            {movies
              .filter((movie) =>
                genre === "" ? movie : movie.info.genres.indexOf(genre) > -1
              )
              .filter((movie) =>
                date === ""
                  ? movie
                  : date.length === 2
                  ? movie.info.release_date.slice(5, 7) === date
                  : new Date(movie.info.release_date) >= new Date(date) &&
                    new Date(movie.info.release_date) <= new Date()
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
