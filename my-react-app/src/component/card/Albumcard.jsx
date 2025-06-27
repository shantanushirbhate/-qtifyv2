import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Chip,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./Card.module.css";

function AlbumCard({ image, title, follows }) {
  return (
    <div className={styles.cardwrapper}>
      <Card className={styles.outercard}>
        <Box className={styles.imageWrapper}>
          <CardMedia
            component="img"
            height="180"
            image={image}
            alt={title}
            className={styles.albumImage}
          />
          <Chip
            label={`${follows} Followers`}
            className={styles.chip}
          />
        </Box>
        <CardContent className={styles.cardContent} />
      </Card>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default AlbumCard;
