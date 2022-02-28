import { useCallback, useState, useEffect } from "react";
import axios from "axios";

// const Counter = (parentCallback) => {
//   const [genre, setGenre] = useState("");

//   return (
//     <select
//       name=""
//       id=""
//       onChange={(e) => {
//         setGenre(e.target.value);
//         parentCallback(e.target.value);
//       }}
//     >
//       <option value="drama">drama</option>
//       <option value="action">action</option>
//     </select>
//   );
// };
export default function App1() {
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    return await axios.get("http://localhost:3000/movies");
  };

  useEffect(async () => {
    const response = await getMovies();
    if (response?.data) {
      setMovies(response.data);
    }
  }, []);

  //   const callback22 = useCallback((genre) => {
  //     setGenre(genre);
  //   });

  console.log("zzz", movies);
  return (
    <>
      <div className="App">
        {/* <Counter parentCallback={callback22} /> */}
        <h2>count {genre}</h2>
      </div>
      <div>
        {movies.filter(
          (movie) => (
            //   movie.info.genres === genre ? (
            <div style={{ color: "red" }} key={movie.id}>
              {movie.title}
            </div>
          )
          //   ) : (
          //     <div></div>
          //   )
        )}
      </div>
    </>
  );
}
