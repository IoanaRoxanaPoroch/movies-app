import React, { useEffect, useState } from "react";
import Search from "../../components/forms/inputs/input/search/Search";
import Select from "../../components/forms/inputs/select/Select";
import Title from "../../components/forms/title/Title";

export default function Watchlist() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle("Welcome to your Watchlist page");
  });
  return (
    <div className="watchlist-container">
      <div className="title-container">
        <Title title={title} className="title-watchlist" />
      </div>
      <div className="search-movies-container">
        <Search placeholder="Search for a movie..." type="search" />
        <Select />
      </div>
      <div className="list-cards-container">
        
      </div>
    </div>
  );
}
