import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import poster from "../../assets/images/poster.png";
import "./Card.css";

export default function MovieCard({ movie }) {
  const { title, info } = movie;
  return (
    <Card
      sx={{
        maxWidth: 272,
        margin: 2,
      }}
    >
      <CardMedia
        component="img"
        alt="movie poster"
        width="272"
        height="416"
        image={poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="black">
          {movie.title}
        </Typography>
        <p style={{ color: "red" }}>{movie.info.genre}</p>
        <p>{movie.info.release_date}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Add to watchlist</Button>
        <Button size="small">"props.raiting"</Button>
      </CardActions>
    </Card>

    // <div>
    //   <div className="image-container">
    //     <img src={poster} alt="movie poster" />
    //     <div className="btns-container">
    //       <button className="btn-add">Add to watchlist</button>
    //       <button className="btn-rating">{info?.rating}</button>
    //     </div>
    //   </div>

    //   <div className="card-content">
    //     <div className="title-movie-container">
    //       <p>{title}</p>
    //     </div>
    //     <div className="info-container">
    //       <p>Release date:{movie?.info?.release_date}</p>
    //       <p>{info.genres}</p>
    //     </div>
    //   </div>
    // </div>
  );
}
