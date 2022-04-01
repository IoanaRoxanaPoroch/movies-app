import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import poster from "../../assets/images/poster.png";
import "./TryCard.css";

export default function TryCard() {
  return (
    // <Card sx={{ maxWidth: 272, minHeight: 416 }}>
    //   <CardMedia
    //     component="img"
    //     alt="green iguana"
    //     minHeight="416"
    //     image={poster}
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Lizard
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Add to watchlist</Button>
    //     <Button size="small">Rating</Button>
    //   </CardActions>
    // </Card>
    <div className="card">
      <img src={poster} alt="" />
      <div className="card-content">
        <button>Add to watchlist</button>
        <button>Rating</button>
      </div>
    </div>
  );
}
