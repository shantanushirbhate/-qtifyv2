import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import AlbumCard from "../card/Albumcard";
import Carousel from "../Carousal/Carousal";

function Section({ title, fetchUrl }) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get(fetchUrl);
        setAlbums(res.data);
      } catch (err) {
        console.error("Error fetching albums:", err);
      }
    };
    fetchAlbums();
  }, [fetchUrl]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={() => setShowAll((prev) => !prev)} className={styles.toggleBtn}>
          {showAll ? "Collapse All" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.gridView}>
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      ) : (
        <Carousel
          items={albums}
          renderItem={(album) => (
            <AlbumCard
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          )}
        />
      )}
    </section>
  );
}

export default Section;
