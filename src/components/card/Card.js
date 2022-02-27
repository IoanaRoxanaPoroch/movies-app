import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import poster from "../../assets/images/poster.png";

export default function MovieCard() {
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
          Title
        </Typography>
        <p>Release date</p>
        <p>Genre</p>
      </CardContent>
      <CardActions>
        <Button size="small">Add to watchlist</Button>
        <Button size="small">"props.raiting"</Button>
      </CardActions>
    </Card>
  );
}
