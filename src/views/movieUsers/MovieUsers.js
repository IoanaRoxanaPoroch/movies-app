import React, { useState } from "react";

export default function MovieUsers() {
  const [title, setTitle] = useState(props.search);
  const [poster, setPoster] = useState(props.search);
  const [year, setYear] = useState(props.search);
  return (
    <div className="movie">
      <div className="title-year">
        <h1 className="title">{title}</h1>
        <h2 className="year">{year}</h2>
      </div>
      <div className="poster">
        <img src={poster} alt="my movie poster" />
      </div>
    </div>
  );
}
