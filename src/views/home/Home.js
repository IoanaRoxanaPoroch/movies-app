import React from "react";
import MovieCard from "../../components/card/Card";
import "./Home.css";


const Home = () => {
  return (
    <>
      Home Component
      <div className="moviecard">
        {/* cred ca poti forma un json, iar aici sa folosesti map-ul */}
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
       
      </div>
    </>
  );
};
export default Home;
