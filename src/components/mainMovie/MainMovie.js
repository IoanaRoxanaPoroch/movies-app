import React, { Component } from "react";
import Title from "../forms/title/Title";

function MainMovie() {
  return (
    <>
      <div className="content-container">
        <Title title={""} />
      </div>
      <div className="text-container"></div>
      <div className="img-conatiner">
        <img src="" alt="main movie poster" />
      </div>
      <div className="btn">
        <button>Watch trailer</button>
        <button>Add to list</button>
      </div>
    </>
  );
}
export default MainMovie;
