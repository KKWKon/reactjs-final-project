import * as React from "react";
import ImageList from "@mui/material/ImageList";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function TitlebarBelowImageList(props) {
  return (
    <ImageList cols={5}>
      {props.digimons.map((digimon, index) => (
        <Card
          key={index}
          sx={{ border: 1, borderRadius: 1, margin: 1, boxShadow: 3 }}
        >
          <CardMedia component="img" image={digimon.img} alt={digimon.name} />
          <CardContent sx={{ border: 1, borderRadius: 1, margin: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {digimon.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {<span>Level: {digimon.level}</span>}
            </Typography>
          </CardContent>
        </Card>
        // <ImageListItem key={index}>
        //   <img
        //     src={digimon.img}
        //     srcSet={digimon.img}
        //     alt={digimon.name}
        //     loading="lazy"
        //   />
        //   <ImageListItemBar
        //     title={digimon.name}
        //     subtitle={<span>Level: {digimon.level}</span>}
        //     position="below"
        //   />
        // </ImageListItem>
      ))}
    </ImageList>
  );
}
