import { useState } from "react";

const UseModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");

  function toggle() {
    setIsShowing(!isShowing);
  }

  function handleClickAdd() {
    console.log("a intrat in functie");
  }

  function settingMovieTitle(e) {
    setMovieTitle(e.target.value);
  }

  return {
    isShowing,
    toggle,
    setMovieTitle,
    handleClickAdd,
  };
};

export default UseModal;
