import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function TitlebarBelowImageList(props) {
  return (
    <ImageList cols={4}>
      {props.digimons.map((digimon, index) => (
        <ImageListItem key={index}>
          <img
            src={digimon.img}
            srcSet={digimon.img}
            alt={digimon.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={digimon.name}
            subtitle={<span>Level: {digimon.level}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
