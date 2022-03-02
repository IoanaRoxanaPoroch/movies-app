import React, { useState, useCallback } from "react";
import "./SelectByGenre.css";

export default function SelectByGenre({ parentCallback }) {
  const [genre, setGenre] = useState("");

  return (
    <>
      <select
        className="select-form-genre"
        onChange={(e) => {
          setGenre(e.target.value);
          parentCallback(e.target.value);
        }}
      >
        <option value="">Select by gen</option>
        <option value="adventure">Adventure</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="thriller">Thriller</option>
        <option value="romance">Romance</option>
        <option value="musical">Musical</option>
      </select>
    </>
  );
}
